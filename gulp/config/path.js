// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        css: `${srcFolder}/css/*.css`,
        js: {
            main: `${srcFolder}/js/index.js`,
            whackAMole: `${srcFolder}/js/whack-a-mole.js`,
            refrigeratorGame: `${srcFolder}/js/refrigerator-game.js`,
            messenger: `${srcFolder}/js/messenger.js`,
            bombCountdown: `${srcFolder}/js/bomb-countdown.js`,
            aboutAuthor: `${srcFolder}/js/about-author.js`,
        },
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
        svg: `${srcFolder}/svg/**/*.svg`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        css: `${srcFolder}/css/**/*.css`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
};