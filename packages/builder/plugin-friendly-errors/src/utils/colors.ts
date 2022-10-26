import chalk from 'chalk';
import { Severity } from '../formatters/defaultError';

export function formatTitle(severity: Severity, message: string) {
  return chalk[bgColor(severity)].black('', message, '');
}

export function formatText(severity: Severity, message: string) {
  return chalk[textColor(severity)](message);
}

export function bgColor(
  severity: Severity,
): `bg${Capitalize<ReturnType<typeof textColor>>}` {
  const color = textColor(severity);
  const colorMark = capitalizeFirstLetter(color);
  return `bg${colorMark}` as any;
}

export function textColor(severity: Severity) {
  switch (severity.toLowerCase()) {
    case 'success':
      return 'green';
    case 'info':
      return 'blue';
    case 'note':
      return 'white';
    case 'warning':
      return 'yellow';
    case 'error':
      return 'red';
    default:
      return 'red';
  }
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
