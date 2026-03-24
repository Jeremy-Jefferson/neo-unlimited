import { Link } from 'react-router-dom';
import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import { Button } from '../../../ui/Button/Button';
import styles from './Hero.module.css';

/**
 * Hero section - Primary brand statement
 * Two-column composition: logo left, text right
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
              <p className={styles.eyebrow}>Strategic Consultancy</p>
              <h1 className={styles.headline}>
                We help brands find their edge.
              </h1>
              <p className={styles.subtext}>
                Neo Unlimited is a premium consultancy for brands that refuse to blend in.
                We craft distinctive digital experiences and strategic direction for
                forward-thinking organizations.
              </p>
              <div className={styles.ctaGroup}>
                <Button>Start a Conversation</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
