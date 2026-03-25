import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Button } from '../../../ui/Button/Button';
import styles from './AboutTrust.module.css';

/**
 * AboutTrust section - Credibility and trust building
 */
export function AboutTrust() {
  return (
    <Section space="xl">
      <Container size="narrow">
        <Stack gap="space-6">
          {/* Section Title */}
          <h2 className={styles.title}>Meet Franklin Jefferson</h2>

          {/* Trust-focused content */}
          <div className={styles.content}>
            <p className={styles.paragraph}>
              Franklin isn't a salesperson. He's a strategic partner who helps people 
              build and protect what matters most.
            </p>
            <p className={styles.paragraph}>
              With a focus on long-term relationships rather than quick wins, Franklin 
              takes the time to understand your unique situation before recommending 
              any strategy. His approach is grounded, practical, and always centered 
              on your best interests.
            </p>
            <p className={styles.paragraph}>
              Whether you're protecting your family, structuring your wealth, or 
              exploring business opportunities, you'll work with someone who genuinely 
              cares about your success.
            </p>
          </div>

          {/* Optional CTA */}
          <div className={styles.ctaSection}>
            <Button>Claim Your Game Plan</Button>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
