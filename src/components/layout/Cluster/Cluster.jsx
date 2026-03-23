import { classNames } from '../../../lib/classNames';
import styles from './Cluster.module.css';

/**
 * Cluster - Inline grouped content with flexible gap
 * @param {string} gap - Spacing token (space-1 through space-10)
 * @param {React.ReactNode} children - Cluster content
 */
export function Cluster({ gap = 'space-4', children, className }) {
  return (
    <div className={classNames(styles.cluster, styles[gap], className)}>
      {children}
    </div>
  );
}