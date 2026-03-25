import { Link } from 'react-router-dom';
import { Container } from '../../layout/Container/Container';
import { Stack } from '../../layout/Stack/Stack';
import styles from './Footer.module.css';

/**
 * Footer with brand, compliance text, and copyright
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
              Strategic financial consulting for individuals and families.
            </p>
            <p className={styles.compliance}>
              Franklin Jefferson is a licensed life insurance agent in the state of Texas. 
              Insurance products are offered through properly appointed carriers. 
              NEO Unlimited LLC is not an insurance company.
            </p>
          </Stack>
          <div className={styles.bottomRow}>
            <div className={styles.copyright}>
              © {currentYear} Neo Unlimited. All rights reserved.
            </div>
            <div className={styles.signature}>
              Designed & Built by Hungry Ghost DEV
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
