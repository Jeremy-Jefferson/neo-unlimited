import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Button } from '../../../ui/Button/Button';
import styles from './WealthStrategy.module.css';

/**
 * WealthStrategy section - Focus on long-term financial structure
 */
export function WealthStrategy() {
  return (
    <Section space="xl">
      <Container size="wide">
        <div className={styles.layout}>
          {/* Left: CTA */}
          <div className={styles.ctaColumn}>
            <Stack gap="space-4">
              <Button>Claim Your Game Plan</Button>
              <p className={styles.ctaSupport}>Free financial strategy session. No pressure.</p>
            </Stack>
          </div>

          {/* Right: Section title and description */}
          <div className={styles.content}>
            <h2 className={styles.title}>Don't Just Make Money — Structure It</h2>
            <p className={styles.intro}>
              Building wealth is one thing. Structuring it for long-term growth and legacy is another. 
              We help you create a foundation that compounds over time.
            </p>
            <ul className={styles.benefitList}>
              <li>Long-term planning frameworks</li>
              <li>Financial structure optimization</li>
              <li>Legacy and inheritance thinking</li>
              <li>Strong financial foundation building</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
