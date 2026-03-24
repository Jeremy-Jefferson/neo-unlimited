import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import styles from './Approach.module.css';

/**
 * Approach section - Process steps
 * Horizontal step cards showing the methodology
 */
const steps = [
  {
    title: 'Discover',
    description: 'We immerse ourselves in your business, market, and competitors to uncover unique insights.'
  },
  {
    title: 'Define',
    description: 'We synthesize findings into clear strategy, positioning, and creative direction.'
  },
  {
    title: 'Design',
    description: 'We craft distinctive visual systems and experiences that bring your strategy to life.'
  },
  {
    title: 'Deliver',
    description: 'We ensure flawless execution and provide ongoing guidance for sustainable impact.'
  }
];

export function Approach() {
  return (
    <Section space="lg">
      <Container size="default">
        <Stack gap="space-7">
          <div className={styles.header}>
            <Eyebrow>How We Work</Eyebrow>
            <h2 className={styles.title}>A deliberate, collaborative process</h2>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
