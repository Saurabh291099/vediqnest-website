import { Container, Section } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { ContactForm } from '../components/forms/ContactForm';
import { motion } from 'framer-motion';
import { Mail, MapPin, Users } from 'lucide-react';
import { useSEOMetaTags } from '../hooks/useSEOMetaTags';

export const Contact = () => {
  useSEOMetaTags({
    title: 'Book a Trial Session | VedicNest Noida',
    description: 'Get in touch with VedicNest to book a trial session or learn more about our programs for children aged 6–12.',
    keywords: 'contact vedicnest, book trial, kids programs Noida',
  });

  return (
    <>
      <section className="bg-white border-b-2 border-cream-300 py-20 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-hero mb-6 text-vedic-900">
              Let's Begin Their Journey
            </h1>
            <p className="body-lg text-vedic-700">
              Have a question about the weekend program or want your child to experience VedicNest? Get in touch with us.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection>
              <div className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-vedic-100 flex items-center justify-center">
                    <MapPin className="text-vedic-600" size={28} />
                  </div>
                </div>
                <h3 className="font-display font-600 text-vedic-900 mb-2">Location</h3>
                <p className="text-vedic-700">Noida, Uttar Pradesh</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-vedic-100 flex items-center justify-center">
                    <Mail className="text-vedic-600" size={28} />
                  </div>
                </div>
                <h3 className="font-display font-600 text-vedic-900 mb-2">Program</h3>
                <p className="text-vedic-700">Weekend Program for children aged 6–12</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-vedic-100 flex items-center justify-center">
                    <Users className="text-vedic-600" size={28} />
                  </div>
                </div>
                <h3 className="font-display font-600 text-vedic-900 mb-2">For Children</h3>
                <p className="text-vedic-700">Designed for ages 6–12</p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section className="bg-gradient-to-br from-cream-50 to-vedic-50">
        <Container>
          <SectionHeading
            title="Get in Touch"
            subtitle="Send us an enquiry and we'll respond as soon as possible"
          />

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <Container>
          <SectionHeading title="Frequently Asked Questions" />

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How do I book a trial session?',
                a: 'Fill out the enquiry form above with your details, and our team will reach out to you to schedule a convenient time for the trial session.',
              },
              {
                q: 'How much does a trial cost?',
                a: 'We offer trial sessions to help you experience VedicNest firsthand. Pricing details will be shared when we contact you.',
              },
              {
                q: 'What if my child is very shy?',
                a: 'Our facilitators create a nurturing environment where every child can participate at their own pace. Shyness is perfectly normal and we support each child\'s individual comfort level.',
              },
              {
                q: 'Do I need to provide any materials?',
                a: 'No. VedicNest provides all necessary materials and equipment. Just bring an open mind and willingness to explore!',
              },
              {
                q: 'How often are programs held?',
                a: 'Our weekend program runs regularly on designated weekends. Specific schedules will be shared when we contact you.',
              },
              {
                q: 'Can siblings attend together?',
                a: 'Sessions are age-group specific to ensure the best learning experience. Please mention if you have siblings interested, and we\'ll arrange accordingly.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <details className="group card p-6 cursor-pointer">
                  <summary className="flex items-start justify-between font-display font-600 text-vedic-900">
                    <span>{item.q}</span>
                    <span className="text-xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-vedic-700 mt-4">{item.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center bg-vedic-50 p-8 rounded-xl">
            <p className="text-vedic-800">
              <span className="font-semibold">Didn't find an answer?</span> Reach out using the form above and we'll be happy to help.
            </p>
          </div>
        </Container>
      </Section>

      {/* Map Placeholder */}
      <Section className="bg-cream-50">
        <Container>
          <h2 className="heading-section text-center mb-8">We're Located in Noida</h2>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg bg-gray-200">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112155.80219051688!2d77.25!3d28.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
              style={{ border: 'none' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-vedic-700 mt-6 text-sm">
            Specific location details will be provided upon booking a trial session.
          </p>
        </Container>
      </Section>
    </>
  );
};
