define(['lib/qwest','app-storage'],
    function (qwest, appStorage) {
        const baseUrl = 'http://hiv.enit.biz/app_dev.php/api/alternatives.json';

        const alternativesStorageKey='alternativesStorageKey';
        const alternativesKey='alternativesKey';
        const nextUpdateTimeKey = 'nextUpdateTime';
        const sevenDaysInMs = 7*24*60*60*1000;

        var alternatives = null;

        var error=null;
        if (!appStorage.isPresent(alternativesStorageKey) ||
            appStorage.get(alternativesStorageKey)[nextUpdateTimeKey]<Date.now()) {
            qwest.get(baseUrl, {}, {'async': false}).success(function (hiv_alternatives) {
                alternatives = {};
                for (var i = 0; i < hiv_alternatives.length; i++) {
                    alternatives[hiv_alternatives[i].domain] = hiv_alternatives[i].hiv_domain.name;
                }
                appStorage.put(alternativesStorageKey,
                    {nextUpdateTimeKey:Date.now()+sevenDaysInMs, alternativesKey:alternatives});
            }).error(function (err) {
                    error = err;
                    console.warn("AFTER LOAD: error=%s", error);
            });
        } else {
            alternatives = appStorage.get(alternativesStorageKey)[alternativesKey];
        }

        return {
            alternatives:alternatives,
            error:error
        };
    }
);