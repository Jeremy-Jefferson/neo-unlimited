import { classNames } from '../../../lib/classNames';
import { Container } from '../Container/Container';
import styles from './Section.module.css';

/**
 * Section component with vertical spacing variants
 * @param {'sm' | 'md' | 'lg' | 'xl'} space - Vertical spacing variant
 * @param {boolean} topDivider - Optional top border divider
 * @param {React.ReactNode} children - Section content
 */
export function Section({ space = 'md', topDivider = false, children, className }) {
  return (
    <section
      className={classNames(
        styles.section,
        styles[space],
        topDivider && styles.topDivider,
        className
      )}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}