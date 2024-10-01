(function () {
    'use strict';

    screen = new Proxy(screen, {
        apply: function (target, thisArg, argumentsList) {
          if (argumentsList[0] == 'tv') {
            return true
          }else{
            return target(argumentsList[0])
          }
        }
      })
})();