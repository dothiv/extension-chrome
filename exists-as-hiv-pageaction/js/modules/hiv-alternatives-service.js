define(['hiv-alternatives-storage'],
    function (hivAlternativesStorage) {
        var alternatives = hivAlternativesStorage.alternatives;

        function domainOf(url) {
            var matches = url.match(/^https?:\/\/(www\.)?([^\/?#]+)(?:[\/?#]|$)/i);
            return matches && matches[2];
        }

        function alternativeFor(url) {
            var domain = domainOf(url);
            var alternative = alternatives[domain];
            if (alternative) {
                return  url.replace(domain,alternative);
            } else return url;
        }

        function existsAlternativeFor(url) {
            var domain = domainOf(url);
            return domain && domain in alternatives;
        }

        return {
            alternativeFor: alternativeFor,
            existsAlternativeFor: existsAlternativeFor,
            error: hivAlternativesStorage.error
        };
    }
);