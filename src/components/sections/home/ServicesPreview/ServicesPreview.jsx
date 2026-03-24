import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import styles from './ServicesPreview.module.css';

/**
 * ServicesPreview section - Overview of services offered
 * Two-column layout: left for heading/intro, right for service list
 */
export function ServicesPreview() {
  return (
    <Section space="lg">
      <Container size="wide">
        <div className={styles.servicesGrid}>
          <div className={styles.servicesLeft}>
            <Stack gap="space-5">
              <Eyebrow>What We Do</Eyebrow>
              <h2 className={styles.title}>Services</h2>
              <p className={styles.intro}>
                End-to-end consultancy spanning brand strategy, design direction,
                and digital experience design. We partner with clients ready to make a meaningful impact.
              </p>
            </Stack>
          </div>
          <div className={styles.servicesRight}>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>Brand Strategy</li>
              <li className={styles.serviceItem}>Design Direction</li>
              <li className={styles.serviceItem}>Digital Experience</li>
              <li className={styles.serviceItem}>Visual Identity</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
