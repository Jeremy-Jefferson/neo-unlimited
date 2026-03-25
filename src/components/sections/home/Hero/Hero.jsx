import { Link } from 'react-router-dom';
import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Button } from '../../../ui/Button/Button';
import styles from './Hero.module.css';

/**
 * Hero section - Primary brand statement with conversion focus
 * Two-column composition: logo left, text right with clear CTA
 */
export function Hero() {
  return (
    <Section space="xl">
      <Container size="wide">
        <div className={styles.heroWrapper}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroLayout}>
            {/* Left column: Logo */}
            <Link to="/" className={styles.heroLogo}>
              <img
                src="/images/NEO Seal.svg"
                alt="Neo Unlimited"
                className={styles.logoImage}
              />
            </Link>
            
            {/* Right column: Text block */}
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Strategic Financial Consulting</p>
              <h1 className={styles.headline}>
                Build Income. Protect Your Family. Create Generational Wealth.
              </h1>
              <p className={styles.subtext}>
                NEO Unlimited helps individuals and families protect what they're building, 
                structure their finances, and create long-term strategies for growth.
              </p>
              <Stack gap="space-4" className={styles.ctaGroup}>
                <div className={styles.primaryCta}>
                  <Button>Claim Your Game Plan</Button>
                  <p className={styles.ctaSupport}>Free financial strategy session. No pressure.</p>
                </div>
                <Button variant="secondary">Learn More</Button>
              </Stack>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
