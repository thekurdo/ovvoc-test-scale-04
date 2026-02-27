import chalk from 'chalk';

function renderTable(headers, rows) {
  const colWidths = headers.map((h, i) => {
    const maxRow = rows.reduce((max, row) => Math.max(max, String(row[i] || '').length), 0);
    return Math.max(h.length, maxRow);
  });

  const separator = chalk.gray('+-' + colWidths.map(w => '-'.repeat(w)).join('-+-') + '-+');
  const headerRow = chalk.gray('| ') +
    headers.map((h, i) => chalk.bold.cyan(h.padEnd(colWidths[i]))).join(chalk.gray(' | ')) +
    chalk.gray(' |');

  const dataRows = rows.map(row =>
    chalk.gray('| ') +
    row.map((cell, i) => chalk.white(String(cell || '').padEnd(colWidths[i]))).join(chalk.gray(' | ')) +
    chalk.gray(' |')
  );

  return [separator, headerRow, separator, ...dataRows, separator].join('\n');
}

function renderKeyValue(pairs) {
  const maxKey = pairs.reduce((max, [k]) => Math.max(max, k.length), 0);
  return pairs.map(([key, value]) =>
    chalk.bold(key.padEnd(maxKey)) + chalk.gray(' : ') + chalk.white(value)
  ).join('\n');
}

function renderDivider(width = 40, label) {
  if (label) {
    const side = Math.max(1, Math.floor((width - label.length - 2) / 2));
    return chalk.gray('─'.repeat(side)) + ' ' + chalk.bold.white(label) + ' ' + chalk.gray('─'.repeat(side));
  }
  return chalk.gray('─'.repeat(width));
}

export default {  renderTable, renderKeyValue, renderDivider  };
