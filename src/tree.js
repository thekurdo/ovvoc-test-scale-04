import chalk from 'chalk';

function renderTreeNode(name, isDir, isLast, depth) {
  const indent = depth > 0
    ? chalk.gray('│   '.repeat(depth - 1) + (isLast ? '└── ' : '├── '))
    : '';
  const label = isDir
    ? chalk.bold.blue(name + '/')
    : chalk.white(name);
  return indent + label;
}

function renderTree(items, depth) {
  depth = depth || 0;
  return items.map((item, i) => {
    const isLast = i === items.length - 1;
    const line = renderTreeNode(item.name, item.isDir, isLast, depth);
    if (item.children && item.children.length > 0) {
      return line + '\n' + renderTree(item.children, depth + 1);
    }
    return line;
  }).join('\n');
}

function renderFileSize(bytes) {
  if (bytes < 1024) return chalk.dim(bytes + ' B');
  if (bytes < 1024 * 1024) return chalk.yellow((bytes / 1024).toFixed(1) + ' KB');
  return chalk.red((bytes / (1024 * 1024)).toFixed(1) + ' MB');
}

function renderFileEntry(name, size, modified) {
  return chalk.white(name) + chalk.gray(' — ') + renderFileSize(size) +
    (modified ? chalk.dim(' (' + modified + ')') : '');
}

export default {  renderTreeNode, renderTree, renderFileSize, renderFileEntry  };
