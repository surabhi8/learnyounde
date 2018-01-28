const addCommandLineArguments = require('./baby-steps.js');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};
describe('Tests for checking value after adding all values from command line arguments', () => {
  test('The arguments are positive numbers and functions prints sum of array values', () => {
    addCommandLineArguments([1, 2, 3]);
    expect(global.console.log).toHaveBeenCalledWith(6);
  });
  test('The arguments are combination of negative and positive numbers and function prints sum of array values', () => {
    addCommandLineArguments([1, -2, -3]);
    expect(global.console.log).toHaveBeenCalledWith(-4);
  });
  test('Argument is array of strings and function prints a concatenated string', () => {
    addCommandLineArguments(['Hello', 'I', 'am', 'Batman']);
    expect(global.console.log).toHaveBeenCalledWith(NaN);
  });
});
