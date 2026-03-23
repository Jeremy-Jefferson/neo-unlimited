import { classNames } from '../../../lib/classNames';
import styles from './Stack.module.css';

/**
 * Stack - Vertical spacing primitive for grouped content
 * @param {string} gap - Spacing token (space-1 through space-10)
 * @param {React.ReactNode} children - Stack content
 */
export function Stack({ gap = 'space-5', children, className }) {
  return (
    <div className={classNames(styles.stack, styles[gap], className)}>
      {children}
    </div>
  );
}