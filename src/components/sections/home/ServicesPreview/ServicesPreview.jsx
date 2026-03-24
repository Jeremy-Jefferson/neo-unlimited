import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import styles from './ServicesPreview.module.css';

/**
 * ServicesPreview section - Overview of services offered
 * Two-column layout with interactive service rows
 */
const services = [
  {
    title: 'Brand Strategy',
    description: 'Positioning, messaging, and market differentiation that sets your brand apart.'
  },
  {
    title: 'Design Direction',
    description: 'Visual systems that define and scale your brand across every touchpoint.'
  },
  {
    title: 'Digital Experience',
    description: 'User-centered digital products that engage and convert your audience.'
  },
  {
    title: 'Visual Identity',
    description: 'Distinctive visual languages that capture your brand essence.'
  }
];

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
              {services.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <span className={styles.serviceTitle}>{service.title}</span>
                  <span className={styles.serviceDescription}>{service.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
