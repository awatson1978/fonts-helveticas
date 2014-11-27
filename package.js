Package.describe({
  summary: 'Meteorite package to add various fonts in the Helvetica family to a Meteor app.',
  version: '1.0.0',
  name: 'awatson1978:fonts-helveticas',
  git: 'http://github.com/awatson1978/fonts-helveticas.git'
});

Package.on_use(function (api) {
    api.addFiles('fonts/ColaborateLight.otf', 'client');
    api.addFiles('fonts/ColaborateBold.otf', 'client');
    api.addFiles('fonts/ColaborateMedium.otf', 'client');
    api.addFiles('fonts/ColaborateRegular.otf', 'client');
    api.addFiles('fonts/ColaborateThin.otf', 'client');

    api.addFiles('fonts/ExistenceLight.otf', 'client');
    api.addFiles('fonts/ExistenceStencilLight.otf', 'client');
    api.addFiles('fonts/ExistenceUnicaseLight.otf', 'client');

    api.addFiles('fonts/PrintClearly.otf', 'client');
    api.addFiles('fonts/PrintClearlyBold.otf', 'client');
    api.addFiles('fonts/PrintClearlyDashed.otf', 'client');

    api.addFiles('fonts/QuicksandBold.otf', 'client');
    api.addFiles('fonts/QuicksandBoldOblique.otf', 'client');
    api.addFiles('fonts/QuicksandBook.otf', 'client');
    api.addFiles('fonts/QuicksandBookOblique.otf', 'client');
    api.addFiles('fonts/QuicksandDash.otf', 'client');
    api.addFiles('fonts/QuicksandLight.otf', 'client');
    api.addFiles('fonts/QuicksandLightOblique.otf', 'client');

    api.addFiles('fonts-helveticas.css', 'client');
});
