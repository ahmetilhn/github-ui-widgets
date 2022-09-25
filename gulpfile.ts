"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
//sass convertor and watch
gulp.task("sass", () => {
  return gulp
    .src("src/views/assets/styles/sass/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/views/assets/styles/css/"));
});

gulp.task("watch", () => {
  gulp.watch("src/views/assets/styles/sass/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("watch"));
