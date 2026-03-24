import { Section } from '../../../layout/Section/Section';
import { Stack } from '../../../layout/Stack/Stack';
import { Eyebrow } from '../../../ui/Eyebrow/Eyebrow';
import styles from './ServicesPreview.module.css';

/**
 * ServicesPreview section - Overview of services offered
 */
export function ServicesPreview() {
  return (
    <Section space="lg">
      <Stack gap="space-6">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className={styles.title}>Services</h2>
        <p className={styles.text}>
          End-to-end consultancy spanning brand strategy, design direction,
          and digital experience design. We partner with clients ready to make a meaningful impact.
        </p>
      </Stack>
    </Section>
  );
}
