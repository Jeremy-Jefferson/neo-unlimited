import { useState } from 'react';
import { Section } from '../../../layout/Section/Section';
import { Container } from '../../../layout/Container/Container';
import { Stack } from '../../../layout/Stack/Stack';
import { Button } from '../../../ui/Button/Button';
import styles from './LeadCapture.module.css';

/**
 * LeadCapture section - Form for lead generation
 */
export function LeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added when backend is connected
    console.log('Form submitted:', formData);
  };

  return (
    <Section space="xl">
      <Container size="narrow">
        <div className={styles.wrapper}>
          <Stack gap="space-6">
            {/* Form Heading */}
            <div className={styles.header}>
              <h2 className={styles.title}>Claim Your Free Financial Game Plan</h2>
              <p className={styles.subtitle}>
                Free financial strategy session. No pressure.
              </p>
            </div>

            {/* Lead Capture Form */}
            <form className={styles.form} onSubmit={handleSubmit}>
              <Stack gap="space-4">
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="phone" className={styles.label}>Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="(555) 555-5555"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    Message / Goal <span className={styles.optional}>(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="Tell us about your goals..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className={styles.submitButton}>
                  Claim Your Game Plan
                </Button>
              </Stack>
            </form>

            {/* Support text */}
            <p className={styles.disclaimer}>
              We respect your privacy. Your information is never shared.
            </p>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
