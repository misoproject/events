var _ = require("lodash");

<%= content %>

// Load function that makes Miso plugin loading more formal.
this.Miso.load = function(moduleName) {
  try {
    // Attempt to load from node_modules
    require(moduleName);
  } catch (ex) {
    // If path is not already full qualified prefix with cwd
    if (!path.existsSync(moduleName)) {
      moduleName = path.resolve(process.cwd(), moduleName);
    }

    // Load the correct module
    require(moduleName);
  }
};

// Expose the module
module.exports = this.Miso;