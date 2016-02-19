///<reference path='../node_modules/relaxjs/dist/relaxjs.d.ts' />

import * as relax from 'relaxjs';


export var simpleResource : relax.Resource = {
  name: 'simple',
  outFormat: 'application/json',

  onGet: function( query: any, respond: relax.Response )  {
    this.data = { myData: "example data" };
    respond.ok();
  },

  onPost: function( query: any, data: any, respond: relax.Response )  {
    this.data = { yourData: data };
    respond.ok();
  },

  onPatch: function( query: any, data: any, respond: relax.Response )  {
    this.data = { yourData: data };
    respond.ok();
  },

  onDelete: function( query: any, respond: relax.Response )  {
    this.data = { yourData: 'have been deleted' };
    respond.ok();
  }


}