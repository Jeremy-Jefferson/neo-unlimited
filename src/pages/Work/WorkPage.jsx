import { useState } from 'react';
import { Section } from '../../components/layout/Section/Section';
import { Container } from '../../components/layout/Container/Container';
import { Stack } from '../../components/layout/Stack/Stack';
import { Eyebrow } from '../../components/ui/Eyebrow/Eyebrow';
import { Button } from '../../components/ui/Button/Button';
import { categories, projects } from '../../data/work.mock';
import styles from './WorkPage.module.css';

/**
 * Work page - Portfolio showcase with category filtering
 * Displays selected projects in a curated grid layout
 */
export function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <Section space="xl">
        <Container size="wide">
          <Stack gap="space-7">
            <div className={styles.heroContent}>
              <Eyebrow>Portfolio</Eyebrow>
              <h1 className={styles.headline}>
                Selected work and digital experiences
              </h1>
              <p className={styles.subtext}>
                A selection of brand systems, product interfaces, and front-end builds designed to perform.
              </p>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Category Filter */}
      <Section space="md">
        <Container size="wide">
          <nav className={styles.filterNav} aria-label="Filter projects by category">
            {categories.map(category => (
              <button
                key={category.id}
                className={`${styles.filterButton} ${activeCategory === category.id ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </nav>
        </Container>
      </Section>

      {/* Project Grid */}
      <Section space="lg">
        <Container size="wide">
          <div className={styles.projectGrid}>
            {filteredProjects.map(project => (
              <article key={project.slug} className={styles.projectCard}>
                <a href={`/work/${project.slug}`} className={styles.cardLink}>
                  <div className={styles.cardImage}>
                    <div className={`${styles.imagePlaceholder} ${styles.cardImageInner}`} />
                    <div className={styles.imageOverlay} />
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.cardCategory}>
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardSummary}>{project.summary}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section space="xl">
        <Container size="narrow">
          <div className={styles.ctaContent}>
            <Stack gap="space-6" className={styles.ctaStack}>
              <h2 className={styles.ctaTitle}>
                Have a project in mind?
              </h2>
              <p className={styles.ctaText}>
                Let's build something that performs.
              </p>
              <Button>Start a Conversation</Button>
            </Stack>
          </div>
        </Container>
      </Section>
    </>
  );
}
