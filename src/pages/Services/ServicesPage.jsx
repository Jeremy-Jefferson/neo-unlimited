import { Link } from 'react-router-dom';
import { Section } from '../../components/layout/Section/Section';
import { Container } from '../../components/layout/Container/Container';
import { Stack } from '../../components/layout/Stack/Stack';
import { Eyebrow } from '../../components/ui/Eyebrow/Eyebrow';
import { Button } from '../../components/ui/Button/Button';
import { Divider } from '../../components/ui/Divider/Divider';
import { services, approachNote, cta } from '../../data/services.mock';
import styles from './ServicesPage.module.css';

/**
 * Services page - Strategic capability presentation
 * Presents core services with clear hierarchy and premium aesthetic
 */
export function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section space="xl">
        <Container size="wide">
          <Stack gap="space-7">
            <div className={styles.heroContent}>
              <Eyebrow>Services</Eyebrow>
              <h1 className={styles.headline}>
                Clarity, identity, and digital execution—done with intent.
              </h1>
              <p className={styles.subtext}>
                We partner with brands that understand distinction is earned, not designed.
              </p>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Services List */}
      <Section space="lg">
        <Container size="wide">
          <Stack gap="space-8">
            {services.map((service, index) => (
              <article key={service.id} className={styles.serviceItem}>
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceNumber}>0{index + 1}</span>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
                {index < services.length - 1 && (
                  <Divider className={styles.serviceDivider} />
                )}
              </article>
            ))}
          </Stack>
        </Container>
      </Section>

      {/* Approach Note */}
      <Section space="md">
        <Container size="wide">
          <div className={styles.approachSection}>
            <p className={styles.approachText}>
              {approachNote.text}{' '}
              <Link to={approachNote.link} className={styles.approachLink}>
                {approachNote.linkLabel} →
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section space="xl">
        <Container size="narrow">
          <div className={styles.ctaContent}>
            <Stack gap="space-6" className={styles.ctaStack}>
              <h2 className={styles.ctaTitle}>
                {cta.headline}
              </h2>
              <p className={styles.ctaText}>
                {cta.subtext}
              </p>
              <Button variant="primary">{cta.buttonText}</Button>
            </Stack>
          </div>
        </Container>
      </Section>
    </>
  );
}
