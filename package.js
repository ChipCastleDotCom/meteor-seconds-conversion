Package.describe({
  name: 'chipcastledotcom:seconds-conversion',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Convert seconds to HH:MM:SS format',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ChipCastleDotCom/meteor-seconds-conversion.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('liyu:sprintfjs@1.0.0');
  api.addFiles('seconds-conversion.js');
  api.export(['SecondsConversion'], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chipcastledotcom:seconds-conversion');
  api.addFiles('seconds-conversion-tests.js');
});
