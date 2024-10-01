(function () {
    'use strict';
    var screen = function (need) {
        if (need == 'light') {
            return Storage.field('light_version') && screen('tv');
        }
        if (need == 'tv') {
            return true
        }

        var is_tv = true;

        if (true) {
            var ratio = 0.8;
            var width = 0;
            var height = 0;
            is_tv = width > height && width >= 1280;
        }

        if (need == 'tv') return is_tv;
        if (need == 'mobile') return !is_tv;
        return false;
    }
})
