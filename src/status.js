const chalk = require('chalk');

function renderSuccess(label) {
  return chalk.green('●') + ' ' + chalk.green.bold(label);
}

function renderFail(label, reason) {
  return chalk.red('●') + ' ' + chalk.red.bold(label) + (reason ? chalk.dim(' — ' + reason) : '');
}

function renderSkip(label) {
  return chalk.yellow('○') + ' ' + chalk.yellow(label);
}

function renderRunning(label) {
  return chalk.cyan('◉') + ' ' + chalk.cyan(label);
}

function renderPending(label) {
  return chalk.gray('○') + ' ' + chalk.dim(label);
}

function renderStatusBadge(status) {
  const badges = {
    pass: chalk.bgGreen.black(' PASS '),
    fail: chalk.bgRed.white(' FAIL '),
    skip: chalk.bgYellow.black(' SKIP '),
    warn: chalk.bgHex('#FF8800').black(' WARN '),
    info: chalk.bgBlue.white(' INFO ')
  };
  return badges[status] || chalk.bgGray.white(' ' + status.toUpperCase() + ' ');
}

function renderTestResult(name, status, duration) {
  const badge = renderStatusBadge(status);
  const time = duration != null ? chalk.dim(' (' + duration + 'ms)') : '';
  return badge + ' ' + chalk.white(name) + time;
}

module.exports = {
  renderSuccess, renderFail, renderSkip, renderRunning,
  renderPending, renderStatusBadge, renderTestResult
};
