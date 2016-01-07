var asm = require('asm.js');
var noErrors = [];

module.exports = validate;

function validate(text) {
  if (!text) return noErrors;

  try {
    asm.validate(text);
  } catch(e) {
    var error = {
      type: 'error',
      text: e.message,
      row: 0,
      col: 0
    };
    if (e.loc) { // asm.js error
      error.row = e.loc.start.line - 1;
      error.col = e.loc.start.column;
    } else if (e.lineNumber) { // esprima error
      error.row = e.lineNumber - 1;
      error.col = e.column;
    }
    return [error];
  }

  return noErrors;
}
