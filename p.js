(function () {
    'use strict';
    screen = new Proxy(screen, {
        get(target, arr){
          if (arr == 'tv') {
            return true
          }else{
            return target(arr)
          }
        }
      })
})();