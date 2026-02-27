import toolkit from '../src/index.js';
const {
  logger, progress, table, spinner, banner,
  diff, tree, status, prompt, help, theme
} = toolkit;

let passed = 0;
let failed = 0;

function assert(condition, name) {
  if (condition) {
    passed++;
    console.log('  \x1b[32m✓\x1b[0m ' + name);
  } else {
    failed++;
    console.log('  \x1b[31m✗\x1b[0m ' + name);
  }
}

function assertType(val, type, name) {
  assert(typeof val === type, name + ' (type=' + type + ')');
}

console.log('\novvoc-test-scale-04: CLI Toolkit Tests\n');

// 1. Logger
console.log('logger:');
assertType(logger.logInfo('test'), 'string', 'logInfo returns string');
assertType(logger.logWarn('test'), 'string', 'logWarn returns string');
assertType(logger.logError('test'), 'string', 'logError returns string');
assertType(logger.logDebug('test'), 'string', 'logDebug returns string');
assertType(logger.logSuccess('test'), 'string', 'logSuccess returns string');

// 2. Progress
console.log('progress:');
assertType(progress.renderProgressBar(5, 10), 'string', 'renderProgressBar returns string');
assertType(progress.renderStep(1, 5, 'Install'), 'string', 'renderStep returns string');
assertType(progress.renderComplete('Done'), 'string', 'renderComplete returns string');

// 3. Table
console.log('table:');
assertType(table.renderTable(['A', 'B'], [['1', '2']]), 'string', 'renderTable returns string');
assertType(table.renderKeyValue([['key', 'val']]), 'string', 'renderKeyValue returns string');
assertType(table.renderDivider(20, 'test'), 'string', 'renderDivider returns string');

// 4. Spinner
console.log('spinner:');
assertType(spinner.formatSpinnerFrame(0, 'Loading'), 'string', 'formatSpinnerFrame returns string');
assertType(spinner.formatSpinnerDone('Done'), 'string', 'formatSpinnerDone returns string');
assertType(spinner.formatSpinnerFail('Err', 'msg'), 'string', 'formatSpinnerFail returns string');
assert(Array.isArray(spinner.SPINNER_FRAMES), 'SPINNER_FRAMES is array');

// 5. Banner
console.log('banner:');
assertType(banner.renderBanner('Title', 'Sub'), 'string', 'renderBanner returns string');
assertType(banner.renderHeading('H1', 1), 'string', 'renderHeading level 1');
assertType(banner.renderVersion('pkg', '1.0.0'), 'string', 'renderVersion returns string');

// 6. Diff
console.log('diff:');
assertType(diff.renderAddedLine('new line'), 'string', 'renderAddedLine returns string');
assertType(diff.renderRemovedLine('old line'), 'string', 'renderRemovedLine returns string');
assertType(diff.renderDiffHeader('file.js'), 'string', 'renderDiffHeader returns string');
assertType(diff.renderDiffStats(10, 5), 'string', 'renderDiffStats returns string');

// 7. Tree
console.log('tree:');
assertType(tree.renderTreeNode('src', true, false, 0), 'string', 'renderTreeNode returns string');
assertType(tree.renderFileSize(2048), 'string', 'renderFileSize returns string');
assertType(tree.renderFileEntry('file.js', 1024, '2024-01-01'), 'string', 'renderFileEntry returns string');

// 8. Status
console.log('status:');
assertType(status.renderSuccess('ok'), 'string', 'renderSuccess returns string');
assertType(status.renderFail('err', 'reason'), 'string', 'renderFail returns string');
assertType(status.renderSkip('skip'), 'string', 'renderSkip returns string');
assertType(status.renderStatusBadge('pass'), 'string', 'renderStatusBadge returns string');
assertType(status.renderTestResult('test1', 'pass', 42), 'string', 'renderTestResult returns string');

// 9. Prompt
console.log('prompt:');
assertType(prompt.renderPrompt('Name?', 'anon'), 'string', 'renderPrompt returns string');
assertType(prompt.renderConfirm('Sure?', true), 'string', 'renderConfirm returns string');
assertType(prompt.renderSelect('Pick', ['a', 'b'], 0), 'string', 'renderSelect returns string');
assertType(prompt.renderInput('Email', '', 'you@example.com'), 'string', 'renderInput returns string');

// 10. Help
console.log('help:');
assertType(help.renderUsage('cmd', [{ name: 'file', required: true }]), 'string', 'renderUsage returns string');
assertType(help.renderCommandList([{ name: 'init', description: 'init project' }]), 'string', 'renderCommandList returns string');
assertType(help.renderOption('--verbose', '-v', 'Verbose output'), 'string', 'renderOption returns string');
assertType(help.renderExample('cmd init', 'Initialize'), 'string', 'renderExample returns string');
assertType(help.renderDeprecated('use X instead'), 'string', 'renderDeprecated returns string');

// 11. Theme
console.log('theme:');
assert(typeof theme.THEMES === 'object', 'THEMES is object');
assertType(theme.primary('text'), 'string', 'primary returns string');
assertType(theme.secondary('text'), 'string', 'secondary returns string');
assertType(theme.success('text'), 'string', 'success returns string');
assertType(theme.danger('text'), 'string', 'danger returns string');
assertType(theme.highlight('text'), 'string', 'highlight returns string');
theme.setTheme('ocean');
assert(theme.getTheme().primary === '#0077B6', 'setTheme to ocean works');

console.log('\n─────────────────────────────');
console.log('Total: ' + (passed + failed) + ' | Passed: ' + passed + ' | Failed: ' + failed);
console.log('─────────────────────────────\n');

if (failed > 0) process.exit(1);
