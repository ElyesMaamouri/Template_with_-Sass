const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// Build style scss to css
function buildStyles() {
  return src("index.scss").pipe(sass()).pipe(dest("css"));
}
// Watch any changes in file scss
function watchTask() {
  watch(["index.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
