Gulp C Preprocessor
===============

Gulp plugin for using a C like preprocessor with JS.  
It use [C-Preprocessor](https://www.npmjs.com/package/c-preprocessor) to compile the files.


## Usage

```js
var preprocessor = require('gulp-c-preprocessor');

gulp.task('default', function() {
  gulp.src('./src/file.js')
    .pipe(preprocessor({ /* options */ })
    .pipe(gulp.dest('./dest/'));
});
```


## Options

See [C-Preprocessor library](https://github.com/ParksProjets/C-Preprocessor#customize-options)
to have a look on the options.  
This options are the same.
