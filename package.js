Package.describe({
  summary: "Meteorite package to add various fonts in the Helvetica family to a Meteor app."
});

Package.register_extension(
  "ttf", function (bundle, source_path, serve_path, where) {
    bundle.add_resource({
      type: "static",
      path: '/fonts/' + serve_path.split('/').pop(),
      source_file: source_path,
      where: where
    });
  }
);

Package.on_use(function (api) {
    api.add_files('fonts/HelveticaLight.ttf', "client");
    api.add_files('fonts-helveticas.css', "client");
});
