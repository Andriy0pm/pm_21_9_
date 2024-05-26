function simpleTask(cd) {
    console.log('This is test task!');
    cd();
}
exports.default = simpleTask

const { src, dest, watch, series, parallel} = require ("gulp");
const concat = require ("gulp-concat");
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require ("gulp-autoprefixer");
const cssnano = require ("gulp-cssnano");
const rename = require ("gulp-rename");
const uglify = require ("gulp-uglify");
const imagemin = require ("gulp-imagemin");
const sync = require("browser-sync").create();

function server(){
    sync.init({
        server: { baseDir: 'app/'},
        online: true,
        logConnections: true,
    })
    
}
exports.server =server

//копіювання HTML файлів в папку dist
function task_html() {
    return src ("app/*.html")
        .pipe(dest("dist"))
}
exports.html = task_html
//об'єднання, компіляція Sass в CSS, додавання префіксів і подальша мінімізація коду
function task_sass () {
    return src ( "app/sass/*.sass")
        .pipe (concat ( 'styles.sass'))
        .pipe (sass ())
        .pipe (autoprefixer ({
            browsers: [ 'last 2 versions'],
            cascade: false
        }))
        .pipe (cssnano ())
        .pipe (rename ({suffix: '.min'}))
        .pipe (dest ( "app/css"))
}
exports.sass = task_sass

//об'єднання і стиснення JS-файлів
function task_scripts () {
    return src ( "app/js/*.js") //вихідна директорія файлів
        .pipe (concat ( 'scripts.js')) // конкатенація js-файлів в один
        .pipe (uglify ()) //стиснення коду
        .pipe (rename ({suffix: '.min'})) //перейменування файлу з приставкою .min
        .pipe (dest ("dist/js")) // директорія продакшена
        .pipe (sync.stream())
}
exports.scripts = task_scripts


//cтискання зображень
function task_imgs() {
    return src ( "app/img/*.+(jpg|jpeg|png|gif)")
        .pipe (imagemin ({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe (dest ("dist/images"))
}
exports.imgs = task_imgs

//відстежування за змінами у файлах
function task_watch() {
    watch ("app/*.html", task_html);
    watch ("app/js/*.js", task_scripts);
    watch ("app/sass/*.sass", task_sass);
    watch ("app/images/*.+(jpg|jpeg|png|gif)", task_imgs);
    watch ("app/**/*.html").on("change", sync.reload);
    
}
exports.watch = task_watch

//Запуск тасків за замовчуванням
exports.default = parallel(task_html, task_sass, task_scripts, task_imgs, task_watch, server, simpleTask)