function addCommandLineArguments(/*argumentsToAdd*/) {
   const arguments = process.argv.slice(2);
  const finalValue = argumentsToAdd.map(argument => Number(argument)).reduce((total, number) => total + number);
  global.console.log(finalValue);
}
//Comment below line to test and pass argument to function
addCommandLineArguments();
module.exports = addCommandLineArguments;
