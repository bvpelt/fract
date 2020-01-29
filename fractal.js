'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();
const helpers = require('./.fractal/helpers.js')(fractal);
const collator = require('./.fractal/collator.js');

const hbs = require('@frctl/handlebars')({
    helpers
});

/* Set the title of the project */
fractal.set('project.title', 'BSoft Component Library');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Bart van Pelt <bart.vanpelt@gmail.com>');

/* Tell Fractal where the components will live */
fractal.components.engine(hbs);
fractal.components.set('path', __dirname + '/src/components');
fractal.components.set('default.preview', '@preview');
fractal.components.set('ext', '.hbs');  // default is .hbs
fractal.components.set('default.status', 'wip');
fractal.components.set('label', 'Componenten');

/* Tell Fractal where the documentation pages will live */
fractal.docs.engine(hbs);
fractal.docs.set('path', __dirname + '/src/docs');
fractal.docs.set('ext', '.md');       // default is .md
fractal.docs.set('default.status', 'draft');
fractal.docs.set('label', 'Documentatie');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/assets');
/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');




const comp_instance = fractal.components.engine(hbs);
const doc_instance = fractal.docs.engine(hbs);
// `comp_instance.handlebars` is now a Handlebars instance that you can
//  register helpers with or pass to other libraries/modules etc.

comp_instance.handlebars.registerHelper('foo', function(str){
    /* handlebars helper code */
});


