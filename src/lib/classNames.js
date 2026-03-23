/**
 * Combines class names conditionally
 * Usage: classNames('base', condition && 'conditional', 'more-classes')
 */
export function classNames(...args) {
  return args.filter(Boolean).join(' ');
}