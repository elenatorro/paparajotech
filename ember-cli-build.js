/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

module.exports = function(defaults) {
  var tree, RobotoFonts, PatrickHand, CaveatBrush, Ubuntu, CardImages;

  var app = new EmberApp(defaults, {
    babel: {
      experimental: true
    },

    fingerprint: {
      exclude: [
        'images/layers-2x.png',
        'images/layers.png',
        'images/marker-icon-2x.png',
        'images/marker-icon.png',
        'images/marker-shadow.png'
      ]
    }
  });

  app.import(`${app.bowerDirectory}/materialize/dist/js/materialize.js`);
  app.import(`${app.bowerDirectory}/materialize/dist/css/materialize.css`);

  RobotoFonts = pickFiles(`${app.bowerDirectory}/materialize/fonts/roboto`, {
    srcDir: '/',
    destDir: '/fonts/roboto'
  });

  CaveatBrush = pickFiles(`public/assets/fonts/Caveat_Brush`, {
    srcDir: '/',
    destDir: '/assets/fonts/Caveat_Brush'
  });

  PatrickHand = pickFiles(`public/assets/fonts/Patrick_Hand`, {
    srcDir: '/',
    destDir: '/assets/fonts/Patrick_Hand'
  });

  Ubuntu = pickFiles(`public/assets/fonts/Ubuntu`, {
    srcDir: '/',
    destDir: '/assets/fonts/Ubuntu'
  });

  CardImages = pickFiles(`public/assets/images`, {
    srcDir: '/',
    files: ['*.png'],
    destDir: '/assets/images/'
  });

  tree = app.toTree();
  return mergeTrees([tree, RobotoFonts, CaveatBrush, PatrickHand, Ubuntu, CardImages], { overwrite: true });
};
