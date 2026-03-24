import { Section } from '../../../layout/Section/Section';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import { Button } from '../../../ui/Button/Button';
import styles from './Hero.module.css';

/**
 * Hero section - Primary brand statement
 * Contains headline, subtext, and CTA
 */
export function Hero() {
  return (
    <Section space="lg">
      <Stack gap="space-6">
        <Eyebrow>Strategic Consultancy</Eyebrow>
        <h1 className={styles.headline}>
          We help ambitious brands find their edge.
        </h1>
        <p className={styles.subtext}>
          Neo Unlimited is a premium consultancy for brands that refuse to blend in.
          We craft distinctive digital experiences and strategic direction.
        </p>
        <Button>Start a Conversation</Button>
      </Stack>
    </Section>
  );
}
