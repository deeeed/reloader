Package.describe({
  name: 'jamielob:reloader',
  version: '1.1.5',
  summary: 'More control over hot code push reloading',
  git: 'https://github.com/jamielob/reloader/',
  documentation: 'README.md'
});

Cordova.depends({
  'cordova-plugin-splashscreen': '3.2.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.use('check');
  api.use('underscore', 'web.cordova');
  api.use('reload', 'web.cordova');
  api.use('templating', 'web.cordova');
  api.use('reactive-var', 'web.cordova');
  api.use('tracker', 'web.cordova');

  // So that the app can reference LaunchScreen
  api.imply('launch-screen', 'client');

  api.mainModule('reloader.js', 'web.cordova');

  api.export('Reloader');

});
