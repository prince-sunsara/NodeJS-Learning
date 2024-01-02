const path = require("path")

// console.log(path);
// console.log(path.delimiter);

console.log(path.basename('/foo/bar/baz/asdf/quux.html'))
console.log(path.dirname('/foo/bar/baz/asdf/quux.html'))

console.log(__dirname)
console.log(path.extname(__filename))