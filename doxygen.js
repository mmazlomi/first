var doxygen = require('doxygen');
/*doxygen.downloadVersion().then(function (data) {
 //       doSomething();
 
 console.log('downloadVersion');
});
*/
//userOptions
var userOptions = {
    OUTPUT_DIRECTORY: "Docs",
    INPUT: "./",
    RECURSIVE: "YES",
    FILE_PATTERNS: ["*.js", "*.md"],
    EXTENSION_MAPPING: "js=Javascript",
    GENERATE_LATEX: "NO",
    EXCLUDE_PATTERNS: ["*/node_modules/*"]
};
//createConfig
doxygen.createConfig(userOptions);

//run
doxygen.run();