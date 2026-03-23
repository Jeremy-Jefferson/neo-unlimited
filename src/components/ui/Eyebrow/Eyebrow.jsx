import { classNames } from '../../../lib/classNames';
import styles from './Eyebrow.module.css';

/**
 * Eyebrow - Small uppercase label for section headers
 * @param {React.ReactNode} children - Eyebrow text
 */
export function Eyebrow({ children, className }) {
  return (
    <span className={classNames(styles.eyebrow, className)}>
      {children}
    </span>
  );
}