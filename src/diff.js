const chalk = require('chalk');

function renderAddedLine(line) {
  return chalk.green('+ ' + line);
}

function renderRemovedLine(line) {
  return chalk.red('- ' + line);
}

function renderContextLine(line) {
  return chalk.gray('  ' + line);
}

function renderDiffHeader(filename) {
  return chalk.bold.white('--- a/' + filename) + '\n' + chalk.bold.white('+++ b/' + filename);
}

function renderHunkHeader(startOld, countOld, startNew, countNew) {
  return chalk.cyan('@@ -' + startOld + ',' + countOld + ' +' + startNew + ',' + countNew + ' @@');
}

function renderDiff(filename, hunks) {
  const lines = [renderDiffHeader(filename)];
  for (const hunk of hunks) {
    lines.push(renderHunkHeader(hunk.startOld, hunk.countOld, hunk.startNew, hunk.countNew));
    for (const change of hunk.changes) {
      if (change.type === 'add') lines.push(renderAddedLine(change.content));
      else if (change.type === 'remove') lines.push(renderRemovedLine(change.content));
      else lines.push(renderContextLine(change.content));
    }
  }
  return lines.join('\n');
}

function renderDiffStats(added, removed) {
  return chalk.green.bold('+' + added) + chalk.dim(' / ') + chalk.red.bold('-' + removed);
}

module.exports = {
  renderAddedLine, renderRemovedLine, renderContextLine,
  renderDiffHeader, renderHunkHeader, renderDiff, renderDiffStats
};
