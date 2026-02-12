const chalk = require('chalk');

const SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

function formatSpinnerFrame(frame, text) {
  return chalk.cyan(SPINNER_FRAMES[frame % SPINNER_FRAMES.length]) + ' ' + chalk.white(text);
}

function formatSpinnerDone(text) {
  return chalk.green('✓') + ' ' + chalk.green(text);
}

function formatSpinnerFail(text, error) {
  return chalk.red('✗') + ' ' + chalk.red.bold(text) + (error ? chalk.dim(' — ' + error) : '');
}

function formatSpinnerWarn(text) {
  return chalk.yellow('⚠') + ' ' + chalk.yellow(text);
}

function formatElapsed(seconds) {
  return chalk.dim('(' + seconds.toFixed(1) + 's)');
}

function formatSpinnerWithTime(frame, text, elapsed) {
  return formatSpinnerFrame(frame, text) + ' ' + formatElapsed(elapsed);
}

module.exports = {
  SPINNER_FRAMES,
  formatSpinnerFrame, formatSpinnerDone, formatSpinnerFail,
  formatSpinnerWarn, formatElapsed, formatSpinnerWithTime
};
