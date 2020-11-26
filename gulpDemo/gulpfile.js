const { src } = require("gulp");
const gulp = require("gulp");


const delHandler = ()=>{
    return del(['../dist'])
}

const htmlHandler = ()=>{
    return gulp.src('../src/pages/*.html')
    .pipe(htmlmin({
        removeAttributeQuotes:true,
        removeComments:true,
        collapseWhitespace:true,
        minifyCSS:true,
        minifyJS:true,
        collapseBooleanAttributes:true
    }))
    .pipe(gulp.dest('../dist/pages'))
}

const cssHandler =()=>{
    return gulp.src('../src/css/*css')
    
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('../dist/css'))

}

const imagesHandler =  ()=>{
    return gulp.src('../src/images/**')
    .pipe(gulp.dest('../dist/iamges'))
}

const jsHandler = ()=>{
    return gulp.src('../src/js/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('../dist/js'))
}

const phpHandler = ()=>{
    return gulp.src('../src/php/*.php')
    .pipe(gulp.dest('../dist/php'))
}

const libHandler = ()=>{
    return gulp.src('../src/lib/*.js').pipe(gulp.dest('../dist/lib'))
}

// 书写自动监控任务
const watchHandler = ()=>{
    gulp.watch('../src/css/*.css',cssHandler)
    gulp.watch('../src/js/*.js',jsHandler)
    gulp.watch('../src/*.html',htmlHandler)
    gulp.watch('../src/lib/*.js',libHandler)
    gulp.watch('../src/images/**',imagesHandler)
    gulp.watch('../src/php/*.php',phpHandler)
    
}