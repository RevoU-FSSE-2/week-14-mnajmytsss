// matchMedia.mock.js
global.matchMedia = global.matchMedia || function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    };
  };
  