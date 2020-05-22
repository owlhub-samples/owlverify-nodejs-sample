# OWLHUB SDK for Node.js owlverify Sample Project

A simple Node.js application illustrating usage of the OWLHUB SDK for Node.js.

## Requirements

The only requirement of this application is the Node Package Manager. All other
dependencies (including the OWLHUB SDK for Node.js) can be installed with:

    npm install
    or
    yarn

## Basic Configuration

You need to set up your OWLHUB security credentials before the sample code is able
to connect to OWLHUB. You can do this by creating a file named "config.json" you can
copy content from "config.example.json" and update your credentials and save.

## Running the OwlVerify sample

This sample application connects to OWLHUB's [OwlVerify](http://owlhub.io/owlverify). 
The "validate-email" script will verify email address. All you need to do is run it:

    node validate-email.js

## License

This sample application is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

