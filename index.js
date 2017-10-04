#!/usr/bin/env node

'use strict'

const yaml = require('yamljs')
const objectPath = require('object-path')
const stdin = process.stdin
const stdout = process.stdout
let content = ''

const pathToPrune = process.argv[2]

if (!pathToPrune) {
  console.error(`Missing argument "path".

  Usage:

    ${process.argv[0]} ${process.argv[1]} <path>
`)

  process.exit(1)
}

stdin.resume()
stdin.setEncoding('utf8')

stdin.on('data', function (chunk) {
  content += chunk
})

stdin.on('end', function () {
  const parsedData = yaml.parse(content)
  objectPath.del(parsedData, pathToPrune)
  const outputYaml = yaml.stringify(parsedData, 8)
  stdout.write(outputYaml)
  stdout.write('\n')
})
