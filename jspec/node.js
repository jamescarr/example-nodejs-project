
require.paths.unshift('jspec', '/usr/lib/ruby/gems/1.8/gems/jspec-4.3.1/lib', 'lib')
require('jspec')
require('unit/spec.helper')
example = require("example")



JSpec
  .exec('test/spec/example.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report()
