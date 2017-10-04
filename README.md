# yaml-prune

[![npm version](https://badge.fury.io/js/yaml-prune.svg)](http://badge.fury.io/js/yaml-prune)
[![Build Status](https://travis-ci.org/lmammino/yaml-prune.svg?branch=master)](https://travis-ci.org/lmammino/yaml-prune)
[![codecov.io](https://codecov.io/gh/lmammino/yaml-prune/coverage.svg?branch=master)](https://codecov.io/gh/lmammino/yaml-prune)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


A simple command line script that allows to prune parts of a yaml file

The command basically takes a YAML string from the standard input, a `path` option (as supported by [object-path](http://npm.im/object-path)), removes the yaml branch identified by the path and prints in the standard output the resulting yaml content.


## Install

Globally:

```bash
npm install --global yaml-prune
```

Or as a dev dependency (e.g. you need it as part of your build process)

```bash
npm install --save-dev yaml-prune
```


## Usage

Using "pipes":

```bash
cat file.yml some.path | yaml-prune
```

Using input redirection:

```bash
yaml-prune some.path < file.yml
```

If you want to save the output to a file just use output redirection:

```bash
yaml-prune some.path < file.yml > strippedFile.yml
```


## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/lmammino/yaml-prune/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.
