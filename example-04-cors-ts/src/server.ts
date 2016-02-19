///<reference path='../typings/node/node.d.ts' />
///<reference path='../node_modules/relaxjs/dist/relaxjs.d.ts' />

import * as relax from 'relaxjs';
import * as resources from './resources';

const portNum = 5000;
const site = new relax.Site('CORS Enabled Site');

console.log(`relaxjs listening on port ${portNum}`);

site.add( resources.simpleResource );
site.allowCORS(true);
site.serve().listen(portNum);
