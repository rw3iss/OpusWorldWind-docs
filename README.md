# OpusWorldWind-docs

## Overview

This application contains all documentation and examples for the OpusWorldWind project, located at [https://github.com/opuslogica/OpusWorldWind](https://github.com/opuslogica/OpusWorldWind).

OpusWorldWind is an extension library for NASA's WebWorldWind library, located at [https://github.com/NASAWorldWind/WebWorldWind](https://github.com/NASAWorldWind/WebWorldWind).

## Setup

Run `npm install` to install node dependencies. Tested on node v12.16.3, but any version should work.

These scripts assume a global @angular/cli installation: `npm install -g @angular/cli`, but they can also be run locally with: `node_modules/.bin/ng <command>`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Documentation

Run `npm run docs` to generate documentation for OpusWorldWind, which is rendered to './src/docs'.

The documentation is generated from the code in `src/include/OpusWorldWind`, which is a direct clone of the OpusWorldWind repository above.