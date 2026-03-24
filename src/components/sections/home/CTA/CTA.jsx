import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import { Button } from '../../../ui/Button/Button';
import styles from './CTA.module.css';

/**
 * CTA section - Call to action for engagement
 * Narrow container with conversion-focused copy
 */
export function CTA() {
  return (
    <Section space="xl">
      <Container size="narrow">
        <div className={styles.ctaContent}>
          <Stack gap="space-6" className={styles.ctaStack}>
            <Eyebrow>Let's Talk</Eyebrow>
            <h2 className={styles.title}>
              Ready to build something exceptional?
            </h2>
            <p className={styles.text}>
              Tell us what you're building. We'll help you shape it into something that performs.
            </p>
            <Button>Get in Touch</Button>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
