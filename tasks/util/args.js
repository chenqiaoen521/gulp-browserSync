var yargs =require('yargs');

const args = yargs
  .option('production', {
    boolean: true,
    default: false,
    describe: 'min all scripts'
  })

  .option('watch', {
    boolean: true,
    default: false,
    describe: 'watch all files'
  })

  .option('verbose', {
    boolean: true,
    default: false,
    describe: 'log'
  })

  .option('verbose', {
    boolean: true,
    default: false,
    describe: 'log'
  })

  .option('sourcemaps', {
    describe: 'force the creation of sourcemaps'
  })

  .option('port', {
    string: true,
    defalut: '8080',
    describe: 'server port'
  }).argv;
  module.exports = args;