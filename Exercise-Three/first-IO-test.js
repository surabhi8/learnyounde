const readFileAndCountNewLines = require('./first-IO.js');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};
describe('We are reading contents of file and counting number of new lines', () => {
  test('The file has 4 new lines so it should return 4', () => {
    readFileAndCountNewLines('/Users/surabhigupta/learnyounode/Exercise-Three/test-file1.txt');
    expect(global.console.log).toHaveBeenCalledWith(4);
  });
  test('Verify for no file found?', () => {
    expect(() => readFileAndCountNewLines('/Users/surabhigupta/learnyounode/test1.txt').toThrowError('No such file exist'));
  });

  test('The file has 1 new lines so it should return 1', () => {
    readFileAndCountNewLines('/Users/surabhigupta/learnyounode/Exercise-Three/test-file2.txt');
    expect(global.console.log).toHaveBeenCalledWith(1);
  });
  test('The file is blank so it should return 0', () => {
    readFileAndCountNewLines('/Users/surabhigupta/learnyounode/Exercise-Three/test-file3.txt');
    expect(global.console.log).toHaveBeenCalledWith(0);
  });
});
