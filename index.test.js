'use strict'

const childProcess = require('child_process')
const path = require('path')
const yaml = require('yamljs')

test('it should strip a given path from a yaml file', function (done) {
  const input = yaml.stringify({
    main: {
      branch1: {
        branch11: 'value'
      },
      branch2: {
        branch22: 'value'
      }
    }
  })

  const expectedOutput = {
    main: {
      branch2: {
        branch22: 'value'
      }
    }
  }

  const executable = path.join(__dirname, 'index.js')
  const terminal = childProcess.spawn(executable, ['main.branch1'])

  let output = ''
  terminal.stdout.on('data', function (data) {
    output += data
  })

  terminal.on('exit', function (code) {
    const parsedOutput = yaml.parse(output)
    expect(parsedOutput).toEqual(expectedOutput)
    done()
  })

  terminal.stdin.write(input)
  terminal.stdin.end()
})
