import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import styles from './FeaturedWork.module.css';

/**
 * FeaturedWork section - Showcase of selected projects
 * Wide container for more horizontal space
 */
export function FeaturedWork() {
  return (
    <Section space="lg">
      <Container size="wide">
        <Stack gap="space-6">
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.text}>
            A selection of our recent consultancy and design work across
            brand identity, digital products, and strategic engagement.
          </p>
        </Stack>
      </Container>
    </Section>
  );
}
