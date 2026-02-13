import chalk from 'chalk';

function renderPrompt(question, defaultValue) {
  const q = chalk.bold.green('?') + ' ' + chalk.bold.white(question);
  if (defaultValue != null) {
    return q + ' ' + chalk.dim('(' + defaultValue + ')') + chalk.cyan(' › ');
  }
  return q + chalk.cyan(' › ');
}

function renderConfirm(question, defaultYes) {
  const hint = defaultYes
    ? chalk.dim('(') + chalk.underline('Y') + chalk.dim('/n)')
    : chalk.dim('(y/') + chalk.underline('N') + chalk.dim(')');
  return chalk.bold.green('?') + ' ' + chalk.bold.white(question) + ' ' + hint + ' ';
}

function renderSelect(question, options, selected) {
  const header = chalk.bold.green('?') + ' ' + chalk.bold.white(question) +
    chalk.dim(' (use arrow keys)');
  const items = options.map((opt, i) =>
    i === selected
      ? chalk.cyan('❯ ') + chalk.cyan.bold(opt)
      : '  ' + chalk.white(opt)
  );
  return header + '\n' + items.join('\n');
}

function renderInput(label, value, placeholder) {
  const prefix = chalk.bold.green('?') + ' ' + chalk.bold.white(label) + chalk.cyan(' › ');
  if (value) return prefix + chalk.white(value);
  if (placeholder) return prefix + chalk.dim(placeholder);
  return prefix;
}

function renderError(message) {
  return chalk.red.bold('✗') + ' ' + chalk.red(message);
}

export default {  renderPrompt, renderConfirm, renderSelect, renderInput, renderError  };
