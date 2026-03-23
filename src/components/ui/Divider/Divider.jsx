import { classNames } from '../../../lib/classNames';
import styles from './Divider.module.css';

/**
 * Divider - Subtle section separator
 */
export function Divider({ className }) {
  return (
    <hr className={classNames(styles.divider, className)} />
  );
}