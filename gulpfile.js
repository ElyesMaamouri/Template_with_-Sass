const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// Build style scss to css
function buildStyles() {
  return src("*.scss").pipe(sass()).pipe(dest("css"));
}
// Watch any changes in file scss
function watchTask() {
  watch(["*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
