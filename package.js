Package.describe({
  summary: "Meteorite package to add various fonts in the Helvetica family to a Meteor app."
});

Package.on_use(function (api) {
    api.add_files('fonts/ColaborateLight.otf', "client");
    api.add_files('fonts/ColaborateBold.otf', "client");
    api.add_files('fonts/ColaborateMedium.otf', "client");
    api.add_files('fonts/ColaborateRegular.otf', "client");
    api.add_files('fonts/ColaborateThin.otf', "client");

    api.add_files('fonts/ExistenceLight.otf', "client");
    api.add_files('fonts/ExistenceStencilLight.otf', "client");
    api.add_files('fonts/ExistenceUnicaseLight.otf', "client");

    api.add_files('fonts/PrintClearly.otf', "client");
    api.add_files('fonts/PrintClearlyBold.otf', "client");
    api.add_files('fonts/PrintClearlyDashed.otf', "client");

    api.add_files('fonts/QuicksandBold.otf', "client");
    api.add_files('fonts/QuicksandBoldOblique.otf', "client");
    api.add_files('fonts/QuicksandBook.otf', "client");
    api.add_files('fonts/QuicksandBookOblique.otf', "client");
    api.add_files('fonts/QuicksandDash.otf', "client");
    api.add_files('fonts/QuicksandLight.otf', "client");
    api.add_files('fonts/QuicksandLightOblique.otf', "client");

    api.add_files('fonts-helveticas.css', "client");
});
