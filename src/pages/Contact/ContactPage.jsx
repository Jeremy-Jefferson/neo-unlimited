import { useState } from 'react';
import { Section } from '../../components/layout/Section/Section';
import { Container } from '../../components/layout/Container/Container';
import { Stack } from '../../components/layout/Stack/Stack';
import { Eyebrow } from '../../components/ui/Eyebrow/Eyebrow';
import { Button } from '../../components/ui/Button/Button';
import { hero, qualification, projectTypes, budgetRanges, contact, formLabels } from '../../data/contact.mock';
import styles from './ContactPage.module.css';

/**
 * Contact page - Premium consultancy entry point
 * Selective, qualification-focused contact form
 */
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <main>
      {/* Hero Section */}
      <Section space="xl">
        <Container size="narrow">
          <Stack gap="space-7">
            <div className={styles.heroContent}>
              <Eyebrow>Contact</Eyebrow>
              <h1 className={styles.headline}>
                {hero.headline}
              </h1>
              <p className={styles.subtext}>
                {hero.subtext}
              </p>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Qualification Block */}
      <Section space="md">
        <Container size="narrow">
          <p className={styles.qualificationText}>
            {qualification.text}
          </p>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section space="lg">
        <Container size="narrow">
          <form onSubmit={handleSubmit} className={styles.form}>
            <Stack gap="space-6">
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="name" className={styles.label}>
                    {formLabels.name} <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="email" className={styles.label}>
                    {formLabels.email} <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="company" className={styles.label}>
                    {formLabels.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formRowTwoCol}>
                <div className={styles.formField}>
                  <label htmlFor="projectType" className={styles.label}>
                    {formLabels.projectType}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    {projectTypes.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formField}>
                  <label htmlFor="budget" className={styles.label}>
                    {formLabels.budget}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    {budgetRanges.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="message" className={styles.label}>
                    {formLabels.message} <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.textarea}
                    placeholder={formLabels.messagePlaceholder}
                  />
                </div>
              </div>

              <div className={styles.formActions}>
                <Button type="submit" variant="primary">
                  {formLabels.submitButton}
                </Button>
              </div>
            </Stack>
          </form>

          {/* Alternative Contact */}
          <div className={styles.alternativeContact}>
            <p className={styles.emailText}>
              Or email us directly — <a href={`mailto:${contact.email}`} className={styles.emailLink}>{contact.email}</a>
            </p>
          </div>

          {/* Response Time */}
          <div className={styles.responseTime}>
            <p className={styles.responseText}>{contact.responseTime}</p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
