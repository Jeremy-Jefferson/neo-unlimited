import { classNames } from '../../../lib/classNames';
import styles from './Container.module.css';

/**
 * Centered container with width tiers
 * @param {'narrow' | 'default' | 'wide' | 'full'} size - Container width tier
 * @param {React.ReactNode} children - Container content
 */
export function Container({ size = 'default', children, className }) {
  return (
    <div className={classNames(styles.container, styles[size], className)}>
      {children}
    </div>
  );
}