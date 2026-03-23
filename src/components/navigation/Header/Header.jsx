import { Link } from 'react-router-dom';
import { Container } from '../../layout/Container/Container';
import { Cluster } from '../../layout/Cluster/Cluster';
import { navLinks } from '../../../data/nav';
import styles from './Header.module.css';

/**
 * Site header with logo and navigation
 */
export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <img
              src="/images/NEO Seal.svg"
              alt="Neo Unlimited"
              className={styles.logoImage}
            />
          </Link>
          <nav className={styles.nav}>
            <Cluster gap="space-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={styles.navLink}
                >
                  {link.label}
                </Link>
              ))}
            </Cluster>
          </nav>
        </div>
      </Container>
    </header>
  );
}