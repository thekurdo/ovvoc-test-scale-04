import chalk from 'chalk';

function logInfo(msg) {
  return chalk.blue('[INFO]') + ' ' + msg;
}

function logWarn(msg) {
  return chalk.yellow('[WARN]') + ' ' + chalk.yellow(msg);
}

function logError(msg) {
  return chalk.red.bold('[ERROR]') + ' ' + chalk.red(msg);
}

function logDebug(msg) {
  return chalk.gray('[DEBUG]') + ' ' + chalk.dim(msg);
}

function logSuccess(msg) {
  return chalk.green.bold('[OK]') + ' ' + chalk.green(msg);
}

function printInfo(msg) { console.log(logInfo(msg)); }
function printWarn(msg) { console.log(logWarn(msg)); }
function printError(msg) { console.log(logError(msg)); }
function printDebug(msg) { console.log(logDebug(msg)); }
function printSuccess(msg) { console.log(logSuccess(msg)); }

export default { 
  logInfo, logWarn, logError, logDebug, logSuccess,
  printInfo, printWarn, printError, printDebug, printSuccess
 };
