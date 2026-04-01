import { Link } from 'react-router-dom';
import { Container } from '../../layout/Container/Container';
import { Stack } from '../../layout/Stack/Stack';
import styles from './Footer.module.css';

/**
 * Simple refined footer with brand, signature, and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Stack gap="space-5">
            <Link to="/" className={styles.logo}>
              <img 
                src="/images/NEO UNLTD.svg" 
                alt="Neo Unlimited" 
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>
              Strategic consultancy, design direction, and high-impact digital experiences.
            </p>
          </Stack>
          <div className={styles.bottomRow}>
            <div className={styles.copyright}>
              © {currentYear} Neo Unlimited. All rights reserved.
            </div>
            <div className={styles.signature}>
              <a href="https://www.hungryghost.dev/" target="_blank" rel="noopener noreferrer">Designed & Built by Hungry Ghost DEV</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
