import chalk from 'chalk';

function renderProgressBar(current, total, width = 30) {
  const ratio = Math.min(current / total, 1);
  const filled = Math.round(ratio * width);
  const empty = width - filled;
  const percent = Math.round(ratio * 100);

  const bar = chalk.green('█'.repeat(filled)) + chalk.gray('░'.repeat(empty));
  const label = percent >= 100
    ? chalk.green.bold(percent + '%')
    : chalk.cyan(percent + '%');

  return `${bar} ${label} ${chalk.dim('(' + current + '/' + total + ')')}`;
}

function renderStep(step, totalSteps, label) {
  const prefix = chalk.blue.bold('[' + step + '/' + totalSteps + ']');
  return prefix + ' ' + chalk.white(label);
}

function renderDownload(filename, percent) {
  const bar = renderProgressBar(percent, 100, 20);
  return chalk.dim('Downloading ') + chalk.underline(filename) + ' ' + bar;
}

function renderComplete(label) {
  return chalk.green('✓') + ' ' + chalk.green.bold(label) + chalk.dim(' — done');
}

function renderPending(label) {
  return chalk.yellow('○') + ' ' + chalk.dim(label);
}

export default { 
  renderProgressBar, renderStep, renderDownload, renderComplete, renderPending
 };
