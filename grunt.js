/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta : {
      banner :  '/**\n' +
                '* <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("m/d/yyyy") %>\n' +
                '* <%= pkg.homepage %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.authors %>;\n' +
                '* Dual Licensed: <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
                '* https://github.com/misoproject/events/blob/master/LICENSE-MIT \n' +
                '*/',
      lastbuild : '<%= grunt.template.today("yyyy/mm/dd hh:ss") %>'
    },
    
    node: {
      wrapper: "src/node/compat.js",
      content: 'dist/miso.events.<%= pkg.version %>.js'
    },

    lint: {
      files: ['grunt.js', 'src/*.js', 'test/unit/**/*.js']
    },

    qunit : {
      urls : [ 
        "http://localhost:9292/test/index.html"
      ]
    },

    concat: {
      dist: {
        dest: 'dist/miso.events.<%= pkg.version %>.js',
        src: [
          '<banner:meta.banner>', 
          'src/events.js'
        ]
      },

      fulldeps: {
        dest : "dist/miso.events.deps.<%= pkg.version %>.js",
        src : [
          "lib/lodash.js",
          'dist/miso.events.<%= pkg.version %>.js'
        ]
      }
    },

    min: {
      dist: {
        dest: 'dist/miso.events.min.<%= pkg.version %>.js',
        src: [
          '<banner:meta.banner>', 
          'dist/miso.events.<%= pkg.version %>.js'
        ]
      },
      fulldeps: {
        dest : "dist/miso.events.deps.min.<%= pkg.version %>.js",
        src : [
          "<banner>",
          "dist/miso.events.deps.<%= pkg.version %>.js"
        ]
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint test'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        predef : [ "_", "Miso", "require", "exports", "define", "module", "test", "ok", "equals" ]
      },
      globals: {}
    },
    uglify: {}
  });

  // load available tasks.
  grunt.loadTasks("tasks");

  // Default task.
  grunt.registerTask('default', 'lint testserver qunit concat min node');

};
