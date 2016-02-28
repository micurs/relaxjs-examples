/// <reference path='./typings/node/node.d.ts' />
/// <reference path='./node_modules/relaxjs/dist/relaxjs.d.ts' />

import * as relaxjs from 'relaxjs';

const viewPage : relaxjs.Resource = {
  name: 'view-example',
  view: 'home',
  data: {
   title: 'Welcome to relaxjs and views',
   link: '/layout-example'
  }
};

const layoutPage : relaxjs.Resource = {
  name: 'layout-example',
  view: 'content',
  layout: 'master',
  data: {
   title: 'Welcome to a resource using view and layout',
   content: 'Check out the views directory in this app to see the source code.'
  }
};


const site = relaxjs.site('eample05');
site.add(viewPage);
site.add(layoutPage);
site.setHome('/view-example');

console.log('listening on port 5000');
site.serve().listen(5000);