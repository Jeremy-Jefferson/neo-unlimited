import { Section } from '../../components/layout/Section/Section';
import { Container } from '../../components/layout/Container/Container';
import { Stack } from '../../components/layout/Stack/Stack';
import { Eyebrow } from '../../components/ui/Eyebrow/Eyebrow';
import { Button } from '../../components/ui/Button/Button';
import { Divider } from '../../components/ui/Divider/Divider';
import { philosophy, positioning, values, origin, team, cta } from '../../data/about.mock';
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
          <Stack gap="space-7">
            <div className={styles.heroContent}>
              <Eyebrow>About Us</Eyebrow>
              <h1 className={styles.headline}>
                A consultancy for brands that refuse to blend in
              </h1>
              <p className={styles.subtext}>
                We work with ambitious companies who understand that distinction is earned, not designed.
              </p>
            </div>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* Philosophy Section - Editorial Layout */}
      <Section space="lg">
        <Container size="narrow">
          <Stack gap="space-7">
            <Eyebrow>Our Philosophy</Eyebrow>
            <div className={styles.philosophyBlock}>
              <p className={styles.philosophyLead}>{philosophy.lead}</p>
              <div className={styles.philosophySecondary}>
                {philosophy.lines.map((line, index) => (
                  <p key={index} className={styles.philosophyLine}>{line}</p>
                ))}
              </div>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Positioning Block - Signature Statement */}
      <Section space="md">
        <Container size="narrow">
          <div className={styles.positioningBlock}>
            <p className={styles.positioningText}>{positioning.statement}</p>
          </div>
        </Container>
      </Section>

      <Divider />

      {/* Values Section - Numbered Principles */}
      <Section space="lg">
        <Container size="default">
          <Stack gap="space-8">
            <Eyebrow>What We Believe</Eyebrow>
            <div className={styles.valuesList}>
              {values.map((value, index) => (
                <div key={index} className={styles.valueItem}>
                  <span className={styles.valueNumber}>{value.number}</span>
                  <div className={styles.valueContent}>
                    <span className={styles.valueLabel}>{value.label}</span>
                    <p className={styles.valueDescription}>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* Origin - Strategic POV */}
      <Section space="lg">
        <Container size="narrow">
          <Stack gap="space-6">
            <Eyebrow>How We Began</Eyebrow>
            <p className={styles.originText}>{origin.story}</p>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* Leadership Section */}
      <Section space="lg">
        <Container size="default">
          <Stack gap="space-8">
            <Eyebrow>Leadership</Eyebrow>
            <div className={styles.teamList}>
              {team.map((member, index) => (
                <div key={index} className={styles.teamItem}>
                  <div className={styles.teamHeader}>
                    <span className={styles.teamName}>{member.name}</span>
                    <span className={styles.teamTitle}>{member.title}</span>
                  </div>
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
