import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import { Button } from '../../../ui/Button/Button';
import styles from './Hero.module.css';

/**
 * Hero section - Primary brand statement
 * Strong, high-impact headline with subtle glow effect
 */
export function Hero() {
  return (
    <Section space="xl">
      <Container size="wide">
        <div className={styles.heroWrapper}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <Stack gap="space-7">
            <div className={styles.heroContent}>
              <Eyebrow>Strategic Consultancy</Eyebrow>
              <h1 className={styles.headline}>
                We help ambitious brands find their edge.
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
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
