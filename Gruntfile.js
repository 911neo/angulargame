module.exports = function(grunt){


  grunt.initConfig({
    concat: {
     dist: {
        src: ['server.js', 'app/home.controller.js', 'app/app.js'],
        dest: 'build/js/scripts.js',
      },
    },
    watch: {
    js: {
    files: ['**/*.js'],

    tasks: ['concat'],

  },
},
uglify: {
    my_target: {
      files: {
        'build/js/scripts.min.js': ['app/home.controller.js', 'app/app.js']

      }
    }
  }


  });

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');


};
