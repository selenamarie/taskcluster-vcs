var run = require('./run');
var createCommand = require('./command');

module.exports.Clone = createCommand(function(source, dest) {
  return run(this.config.git, ['clone', source, dest]);
})
