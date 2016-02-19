///<reference path='../node_modules/relaxjs/dist/relaxjs.d.ts' />
exports.simpleResource = {
    name: 'simple',
    outFormat: 'application/json',
    onGet: function (query, respond) {
        this.data = { myData: "example data" };
        respond.ok();
    },
    onPost: function (query, data, respond) {
        this.data = { yourData: data };
        respond.ok();
    },
    onPatch: function (query, data, respond) {
        this.data = { yourData: data };
        respond.ok();
    },
    onDelete: function (query, respond) {
        this.data = { yourData: 'have been deleted' };
        respond.ok();
    }
};
//# sourceMappingURL=resources.js.map