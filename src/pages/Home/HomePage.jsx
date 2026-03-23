import { Section } from '../../components/layout/Section/Section';
import { Container } from '../../components/layout/Container/Container';
import { Stack } from '../../components/layout/Stack/Stack';
import { Eyebrow } from '../../components/ui/Eyebrow/Eyebrow';
import { Divider } from '../../components/ui/Divider/Divider';
import styles from './HomePage.module.css';

/**
 * Home page with placeholder sections for:
 * - Hero
 * - Positioning
 * - Services
 * - Featured Work
 * - Approach
 * - CTA
 */
export function HomePage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <Section spacing="lg">
        <Container width="default">
          <Stack gap="space-6">
            <Eyebrow>Strategic Consultancy</Eyebrow>
            <h1 className={styles.heroTitle}>
              We help ambitious brands find their edge.
            </h1>
            <p className={styles.heroSubtitle}>
              Neo Unlimited is a premium consultancy for brands that refuse to blend in.
              We craft distinctive digital experiences and strategic direction for
              forward-thinking organizations.
            </p>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* Positioning Section */}
      <Section spacing="lg">
        <Container width="narrow">
          <Stack gap="space-5">
            <Eyebrow>Our Position</Eyebrow>
            <h2 className={styles.sectionTitle}>
              Design as a strategic asset
            </h2>
            <p className={styles.sectionText}>
              We don't just make things look good. We use design as a catalyst for
              business transformation—creating brands that resonate, convert, and
              endure in an increasingly noisy world.
            </p>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* Services Section */}
      <Section spacing="lg">
        <Container width="default">
          <Stack gap="space-6">
            <div className={styles.servicesHeader}>
              <Eyebrow>What We Do</Eyebrow>
              <h2 className={styles.sectionTitle}>Services</h2>
            </div>
            <p className={styles.sectionText}>
              End-to-end consultancy spanning brand strategy, design direction,
              and digital experience design. We partner with clients who are ready
              to make a meaningful impact.
            </p>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* Featured Work Section */}
      <Section spacing="lg">
        <Container width="default">
          <Stack gap="space-6">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionText}>
              A selection of our recent consultancy and design work across
              brand identity, digital products, and strategic engagement.
            </p>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* Approach Section */}
      <Section spacing="lg">
        <Container width="narrow">
          <Stack gap="space-5">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className={styles.sectionTitle}>
              A deliberate, collaborative process
            </h2>
            <p className={styles.sectionText}>
              Every engagement is tailored to the unique challenges and ambitions
              of our clients. We bring clarity to complexity, craft with intent,
              and measure success by the impact we create together.
            </p>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* CTA Section */}
      <Section spacing="xl">
        <Container width="narrow">
          <Stack gap="space-6" align="center">
            <Eyebrow>Let's Talk</Eyebrow>
            <h2 className={styles.ctaTitle}>
              Ready to build something exceptional?
            </h2>
            <p className={styles.ctaText}>
              Reach out to discuss how we can help your brand find its edge.
            </p>
          </Stack>
        </Container>
      </Section>
    </div>
  );
}