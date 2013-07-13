define(function () {
    var keyPrefix = 'hiv-';
    return {

        disableCaching : function() {
            this.disabled = true;
        },

        enableCaching : function() {
            this.disabled = false;
        },

        version : function() {
            return '1';
        },

        prefixKey : function(key) {
            return keyPrefix + this.version() + '-' + key;
        },

        put : function(key, value) {
            key = this.prefixKey(key);
            value = JSON.stringify(value);
            localStorage.setItem(key, value);
        },

        get : function(key) {
            key = this.prefixKey(key);
            var value = localStorage.getItem(key);
            return JSON.parse(value);
        },

        erase : function(key) {
            key = this.prefixKey(key);
            localStorage.removeItem(key);
        },

        flush : function() {
            while (localStorage.length) localStorage.removeItem(localStorage.key(0));
        },

        isPresent : function(key) {
            if(!this.disabled) {
                return !! this.get(key);
            }
            return false;
        }

    };
});
