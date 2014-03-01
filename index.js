var sqlbox = require('sqlbox')
  , thunkify = require('thunkify')
  , create = sqlbox.create;

var methods = [
  'get',
  'mget',
  'save',
  'remove',
  'modify',
  'first',
  'all',
  'query',
];

sqlbox.create = function() {
  var model = create.apply(sqlbox, arguments);

  methods.forEach(function(method) {
    model[method + 'Thunk'] = thunkify(model[method]);
  });

  return model;
}

module.exports = sqlbox;
