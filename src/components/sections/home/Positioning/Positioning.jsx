import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import styles from './Positioning.module.css';

/**
 * Positioning section - Brand value proposition
 * Narrow container with left border accent
 */
export function Positioning() {
  return (
    <Section space="lg">
      <Container size="narrow">
        <div className={styles.positioningWrapper}>
          <Stack gap="space-5">
            <Eyebrow>Our Position</Eyebrow>
            <h2 className={styles.title}>
              Design as a strategic asset
            </h2>
            <p className={styles.text}>
              We don't just make things look good. We use design as a catalyst for
              business transformation—creating brands that resonate, convert, and endure.
            </p>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
