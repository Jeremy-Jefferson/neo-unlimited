import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Button } from '../../../ui/Button/Button';
import styles from './Protection.module.css';

/**
 * Protection section - Focus on protecting what clients are building
 */
export function Protection() {
  return (
    <Section space="xl">
      <Container size="wide">
        <div className={styles.layout}>
          {/* Left: Section title and description */}
          <div className={styles.content}>
            <h2 className={styles.title}>Protect What You're Building</h2>
            <p className={styles.intro}>
              Your hard-earned progress deserves protection. We help you build a safety net 
              that keeps your family secure regardless of what life brings.
            </p>
            <ul className={styles.benefitList}>
              <li>Family protection strategies</li>
              <li>Income replacement planning</li>
              <li>Debt protection mechanisms</li>
              <li>Long-term security planning</li>
            </ul>
          </div>

          {/* Right: CTA */}
          <div className={styles.ctaColumn}>
            <Stack gap="space-4">
              <Button>Claim Your Game Plan</Button>
              <p className={styles.ctaSupport}>Free financial strategy session. No pressure.</p>
            </Stack>
          </div>
        </div>
      </Container>
    </Section>
  );
}
