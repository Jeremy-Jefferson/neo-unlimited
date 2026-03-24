import { Section } from '../../components/layout/Section/Section';
import { Container } from '../../components/layout/Container/Container';
import { Stack } from '../../components/layout/Stack/Stack';
import { Eyebrow } from '../../components/ui/Eyebrow/Eyebrow';
import { Button } from '../../components/ui/Button/Button';
import { Divider } from '../../components/ui/Divider/Divider';
import { philosophy, values, origin, team, cta } from '../../data/about.mock';
import styles from './AboutPage.module.css';

/**
 * AboutPage - Consultancy brand story and team
 * Minimal, premium, strategic - matching the Neo Unlimited aesthetic
 */
export function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section space="xl">
        <Container size="narrow">
          <Stack gap="space-6">
            <div className={styles.heroContent}>
              <Eyebrow>About Us</Eyebrow>
              <h1 className={styles.headline}>
                A consultancy for brands that refuse to blend in
              </h1>
              <p className={styles.subtext}>
                We help ambitious companies discover their distinct voice and build visual systems that set them apart.
              </p>
            </div>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* Philosophy / Our Approach */}
      <Section space="lg">
        <Container size="narrow">
          <Stack gap="space-5">
            <Eyebrow>Our Philosophy</Eyebrow>
            <p className={styles.philosophyText}>{philosophy.statement}</p>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* Values Section */}
      <Section space="lg">
        <Container size="default">
          <Stack gap="space-7">
            <div className={styles.valuesHeader}>
              <Eyebrow>What We Believe</Eyebrow>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <div key={index} className={styles.valueCard}>
                  <span className={styles.valueLabel}>{value.label}</span>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* Brief Origin */}
      <Section space="lg">
        <Container size="narrow">
          <Stack gap="space-5">
            <Eyebrow>How We Began</Eyebrow>
            <p className={styles.originText}>{origin.story}</p>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* Leadership / Team */}
      <Section space="lg">
        <Container size="default">
          <Stack gap="space-7">
            <div className={styles.teamHeader}>
              <Eyebrow>Leadership</Eyebrow>
            </div>
            <div className={styles.teamGrid}>
              {team.map((member, index) => (
                <div key={index} className={styles.teamCard}>
                  <span className={styles.teamName}>{member.name}</span>
                  <span className={styles.teamTitle}>{member.title}</span>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* CTA Section */}
      <Section space="xl">
        <Container size="narrow">
          <div className={styles.ctaContent}>
            <Stack gap="space-6" className={styles.ctaStack}>
              <h2 className={styles.ctaTitle}>{cta.headline}</h2>
              <p className={styles.ctaText}>{cta.subtext}</p>
              <Button>{cta.buttonText}</Button>
            </Stack>
          </div>
        </Container>
      </Section>
    </main>
  );
}
