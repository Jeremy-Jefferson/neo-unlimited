import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import { Button } from '../../../ui/Button/Button';
import styles from './CTA.module.css';

/**
 * CTA section - Call to action for engagement
 * Narrow container with increased spacing
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
              Reach out to discuss how we can help your brand find its edge.
            </p>
            <Button>Get in Touch</Button>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
