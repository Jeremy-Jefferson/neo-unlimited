import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Button } from '../../../ui/Button/Button';
import styles from './CoreServices.module.css';

/**
 * CoreServices section - Three-column service overview with conversion focus
 */
export function CoreServices() {
  return (
    <Section space="xl">
      <Container size="wide">
        <Stack gap="space-8">
          {/* Section Title */}
          <div className={styles.header}>
            <h2 className={styles.title}>How We Help</h2>
            <p className={styles.subtitle}>
              Strategic approaches tailored to your financial goals
            </p>
          </div>

          {/* Three-column service layout */}
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Protection</h3>
              <p className={styles.serviceDescription}>
                Strategies designed to protect your family, income, and long-term stability.
              </p>
            </div>

            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Wealth Strategy</h3>
              <p className={styles.serviceDescription}>
                Structured approaches to building, organizing, and growing your financial future.
              </p>
            </div>

            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Business & Partnerships</h3>
              <p className={styles.serviceDescription}>
                Opportunities to expand income, collaborate, and build ownership.
              </p>
            </div>
          </div>

          {/* CTA below services */}
          <div className={styles.ctaSection}>
            <Button>Claim Your Game Plan</Button>
            <p className={styles.ctaSupport}>Free financial strategy session. No pressure.</p>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
