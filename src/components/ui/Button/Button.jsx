import { classNames } from '../../../lib/classNames';
import styles from './Button.module.css';

/**
 * Button component with primary and secondary variants
 * @param {'primary' | 'secondary'} variant - Button style variant
 * @param {React.ReactNode} children - Button content
 */
export function Button({ variant = 'primary', children, className, ...props }) {
  return (
    <button
      className={classNames(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}