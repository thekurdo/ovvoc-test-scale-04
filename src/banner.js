import chalk from 'chalk';

function renderBanner(title, subtitle) {
  const width = Math.max(title.length, (subtitle || '').length) + 4;
  const top = chalk.hex('#FF6B6B')('╔' + '═'.repeat(width) + '╗');
  const bottom = chalk.hex('#FF6B6B')('╚' + '═'.repeat(width) + '╝');
  const titleLine = chalk.hex('#FF6B6B')('║') + ' ' +
    chalk.bold.white(title.padEnd(width - 2)) + ' ' +
    chalk.hex('#FF6B6B')('║');

  const lines = [top, titleLine];
  if (subtitle) {
    const subLine = chalk.hex('#FF6B6B')('║') + ' ' +
      chalk.dim(subtitle.padEnd(width - 2)) + ' ' +
      chalk.hex('#FF6B6B')('║');
    lines.push(subLine);
  }
  lines.push(bottom);
  return lines.join('\n');
}

function renderHeading(text, level) {
  if (level === 1) return chalk.bold.underline.white(text);
  if (level === 2) return chalk.bold.cyan(text);
  return chalk.bold(text);
}

function renderVersion(name, version) {
  return chalk.bold.white(name) + chalk.dim('@') + chalk.green(version);
}

function renderSeparator(char, width) {
  return chalk.hex('#4A9EFF')(char.repeat(width || 50));
}

export default {  renderBanner, renderHeading, renderVersion, renderSeparator  };
