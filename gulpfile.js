'use strict';

import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

// Передаём значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
};

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { css } from "./gulp/tasks/css.js";
import { main, messenger, aboutAuthor, bombCountdown, refrigeratorGame, whackAMole } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.css, css);
    gulp.watch(path.watch.js, main);
    gulp.watch(path.watch.js, messenger);
    gulp.watch(path.watch.js, aboutAuthor);
    gulp.watch(path.watch.js, bombCountdown);
    gulp.watch(path.watch.js, refrigeratorGame);
    gulp.watch(path.watch.js, whackAMole);
    gulp.watch(path.watch.img, images);
}

// Построение сценариев выполнения задач
const jsTasks = gulp.parallel(main, messenger, aboutAuthor, bombCountdown, refrigeratorGame, whackAMole);
const mainTasks = gulp.parallel(copy, html, css, jsTasks, images);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };

gulp.task('default', dev);