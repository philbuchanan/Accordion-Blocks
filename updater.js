module.exports.readVersion = function (contents) {
  const line = contents.match(/Version: [0-9][0-9.]*/g);
  return line[0].split('Version: ')[1];
}

module.exports.writeVersion = function (contents, version) {
  return contents.replace(/Version: [0-9][0-9.]*/g, 'Version: ' + version);
}
