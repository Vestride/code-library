const path = require('path');
const fs = require('fs-extra');
const getOdoDirectories = require('./get-package-directories');

module.exports = () => new Promise((resolve) => {
  getOdoDirectories.then((packages) => {
    const clone = Array.from(packages);
    clone.push('node_modules');
    const dirs = clone.map(dirname => path.resolve(__dirname, '../docs', dirname));
    const promises = dirs.map(dirpath => fs.remove(dirpath));
    Promise.all(promises).then(resolve);
  });
});
