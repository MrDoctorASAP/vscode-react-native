// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

const fs = require('fs');
const path = require('path');

const packageDir = path.dirname(__dirname);
const root = path.dirname(path.dirname(path.dirname(__dirname)));

const rootPackageJsonFile = path.join(root, 'package.json');
const thisPackageJsonFile = path.join(packageDir, 'package.json');
const rootPackageJson = JSON.parse(fs.readFileSync(rootPackageJsonFile, 'utf8'));
const thisPackageJson = JSON.parse(fs.readFileSync(thisPackageJsonFile, 'utf8'));

thisPackageJson.version = rootPackageJson.version;

fs.writeFileSync(thisPackageJsonFile, JSON.stringify(thisPackageJson, null, '  '));
