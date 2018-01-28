const printOnConsole = require('./hello-world.js');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

describe('Tests for checking the value printed on console', () => {
  test('HELLO WORLD will get printed', () => {
    printOnConsole('HELLO WORLD');
    expect(global.console.log).toHaveBeenCalledWith('HELLO WORLD');
  });
  test('nothing will get printed', () => {
    printOnConsole(undefined);
    expect(global.console.log).toHaveBeenCalledWith(undefined);
  });
  test('nothing will get printed', () => {
    printOnConsole(null);
    expect(global.console.log).toHaveBeenCalledWith(null);
  });
});
