import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Button } from '../../../ui/Button/Button';
import styles from './BusinessPartnerships.module.css';

/**
 * BusinessPartnerships section - Focus on turning income into ownership
 */
export function BusinessPartnerships() {
  return (
    <Section space="xl">
      <Container size="wide">
        <div className={styles.layout}>
          {/* Left: Section title and description */}
          <div className={styles.content}>
            <h2 className={styles.title}>Turn Income Into Ownership</h2>
            <p className={styles.intro}>
              Income solves immediate needs. Ownership builds long-term wealth. 
              We help you identify opportunities to transition from trading time for money 
              to building assets that work for you.
            </p>
            <ul className={styles.benefitList}>
              <li>Strategic partnership opportunities</li>
              <li>Business structuring guidance</li>
              <li>Growth collaboration frameworks</li>
              <li>Long-term ecosystem thinking</li>
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
