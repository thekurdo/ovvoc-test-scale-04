const chalk = require('chalk');

function renderUsage(command, args) {
  return chalk.bold.white('Usage:') + ' ' + chalk.cyan(command) + ' ' +
    args.map(a => a.required
      ? chalk.green('<' + a.name + '>')
      : chalk.dim('[' + a.name + ']')
    ).join(' ');
}

function renderCommandList(commands) {
  const maxLen = commands.reduce((max, c) => Math.max(max, c.name.length), 0);
  return commands.map(cmd =>
    '  ' + chalk.cyan(cmd.name.padEnd(maxLen + 2)) + chalk.dim(cmd.description)
  ).join('\n');
}

function renderOption(flag, alias, description, defaultVal) {
  const flags = chalk.green(flag) + (alias ? chalk.dim(', ') + chalk.green(alias) : '');
  const def = defaultVal != null ? chalk.dim(' [default: ' + defaultVal + ']') : '';
  return '  ' + flags.padEnd(30) + chalk.white(description) + def;
}

function renderSection(title, content) {
  return chalk.bold.underline.white(title) + '\n' + content;
}

function renderExample(command, description) {
  return '  ' + chalk.dim('$') + ' ' + chalk.cyan(command) +
    (description ? '\n  ' + chalk.dim(description) : '');
}

function renderDeprecated(message) {
  return chalk.bgYellow.black(' DEPRECATED ') + ' ' + chalk.yellow(message);
}

module.exports = {
  renderUsage, renderCommandList, renderOption,
  renderSection, renderExample, renderDeprecated
};
