import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import styles from './FeaturedWork.module.css';

/**
 * FeaturedWork section - Showcase of selected projects
 * Image-forward cards with hover effects
 */
const projects = [
  {
    title: 'Meridian Capital',
    category: 'Brand Identity',
    description: 'Complete brand transformation for a global investment firm.'
  },
  {
    title: 'Arc Systems',
    category: 'Digital Product',
    description: 'Enterprise dashboard design for data analytics platform.'
  },
  {
    title: 'Solstice',
    category: 'Brand & Digital',
    description: 'Luxury lifestyle brand with e-commerce experience.'
  }
];

export function FeaturedWork() {
  return (
    <Section space="lg">
      <Container size="wide">
        <Stack gap="space-7">
          <div className={styles.header}>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className={styles.title}>Featured Projects</h2>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <article key={index} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div className={styles.projectPlaceholder} />
                </div>
                <div className={styles.projectContent}>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
