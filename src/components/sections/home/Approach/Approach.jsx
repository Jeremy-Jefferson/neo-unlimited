import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import styles from './Approach.module.css';

/**
 * Approach section - How we work description
 * Offset/narrow layout for asymmetric feel
 */
export function Approach() {
  return (
    <Section space="lg">
      <Container size="narrow">
        <div className={styles.approachOffset}>
          <Stack gap="space-5">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className={styles.title}>
              A deliberate, collaborative process
            </h2>
            <p className={styles.text}>
              Every engagement is tailored to the unique challenges and ambitions
              of our clients. We bring clarity to complexity, craft with intent,
              and measure success by the impact we create together.
            </p>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
