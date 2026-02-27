import chalk from 'chalk';

const THEMES = {
  default: {
    primary: '#4A9EFF',
    secondary: '#FF6B6B',
    success: '#00CC88',
    warning: '#FFAA00',
    danger: '#FF4444',
    muted: '#888888',
    accent: '#AA66FF'
  },
  ocean: {
    primary: '#0077B6',
    secondary: '#00B4D8',
    success: '#06D6A0',
    warning: '#FFD166',
    danger: '#EF476F',
    muted: '#8D99AE',
    accent: '#7209B7'
  }
};

let currentTheme = 'default';

function setTheme(name) {
  if (THEMES[name]) currentTheme = name;
}

function getTheme() {
  return THEMES[currentTheme];
}

function primary(text) {
  return chalk.hex(getTheme().primary)(text);
}

function secondary(text) {
  return chalk.hex(getTheme().secondary)(text);
}

function success(text) {
  return chalk.hex(getTheme().success).bold(text);
}

function warning(text) {
  return chalk.hex(getTheme().warning)(text);
}

function danger(text) {
  return chalk.hex(getTheme().danger).bold(text);
}

function muted(text) {
  return chalk.hex(getTheme().muted)(text);
}

function accent(text) {
  return chalk.hex(getTheme().accent)(text);
}

function highlight(text) {
  return chalk.bgHex(getTheme().primary).black(text);
}

export default { 
  THEMES, setTheme, getTheme,
  primary, secondary, success, warning, danger, muted, accent, highlight
 };
