import { Container } from '../../layout/Container/Container';
import { Stack } from '../../layout/Stack/Stack';
import styles from './Footer.module.css';

/**
 * Simple refined footer with brand and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Stack gap="space-4">
            <div className={styles.brand}>Neo Unlimited</div>
            <p className={styles.tagline}>
              Strategic consultancy, design direction, and high-impact digital experiences.
            </p>
          </Stack>
          <div className={styles.copyright}>
            © {currentYear} Neo Unlimited. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}