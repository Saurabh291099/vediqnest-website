import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Container, Section } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { TrialForm } from '../components/forms/TrialForm';
import { sessionFlow } from '../data/programs';
import { useSEOMetaTags } from '../hooks/useSEOMetaTags';

export const WeekendProgram = () => {
  useSEOMetaTags({
    title: 'Weekend Program for Kids in Noida | VediqPath',
    description: 'Join VediqPath\'s weekend program for children aged 6–12. Experience storytelling, yoga, creativity and values-based learning.',
    keywords: 'weekend program kids Noida, kids activities, creative learning',
  });

  return (
    <>
      <section className="bg-gradient-to-b from-vedic-50 to-cream-50 py-20 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-hero mb-4 text-vedic-900"
            >
              Make Weekends Meaningful
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="subheading text-vedic-600 mb-8"
            >
              A joyful learning experience for children aged 6–12 in Noida
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 text-vedic-700 font-medium"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">👶</span>
                <span>Ages 6–12</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📅</span>
                <span>Weekends</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span>Noida</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Session Flow */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            title="What Happens During a Session?"
            subtitle="A typical VediqPath weekend experience"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {sessionFlow.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative">
                  <div className="card p-6 h-full text-center flex flex-col items-center justify-center">
                    <div className="text-4xl font-display font-600 text-saffron-500 mb-3">
                      {step.number}
                    </div>
                    <h3 className="font-display font-600 text-vedic-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-vedic-700">{step.description}</p>
                  </div>

                  {index !== sessionFlow.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <span className="text-3xl text-saffron-400">→</span>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white rounded-xl border-2 border-vedic-200">
            <p className="text-vedic-800 text-center text-lg font-medium">
              <span className="font-semibold">Note:</span> Exact timings and session format are customized based on the age group and specific needs of participants.
            </p>
          </div>
        </Container>
      </Section>

      {/* Who Is It For */}
      <Section className="bg-cream-50">
        <Container>
          <SectionHeading
            title="Who Is It For?"
            subtitle="The ideal VediqPath participant"
          />

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <AnimatedSection>
                <div className="card p-8 h-full">
                  <h3 className="text-2xl font-display font-600 text-vedic-900 mb-4">
                    The Right Age
                  </h3>
                  <p className="text-vedic-700 mb-4">
                    Children aged 6–12 who are ready to explore learning beyond traditional classrooms.
                  </p>
                  <ul className="space-y-2 text-vedic-600">
                    <li>✓ Kindergarten to Grade 6</li>
                    <li>✓ All learning styles welcome</li>
                    <li>✓ No prior experience needed</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="card p-8 h-full">
                  <h3 className="text-2xl font-display font-600 text-vedic-900 mb-4">
                    Perfect For Parents Looking For
                  </h3>
                  <ul className="space-y-3 text-vedic-700">
                    <li className="flex gap-3">
                      <span>🎯</span>
                      <span>Meaningful weekend activities</span>
                    </li>
                    <li className="flex gap-3">
                      <span>🌿</span>
                      <span>Cultural and mindfulness learning</span>
                    </li>
                    <li className="flex gap-3">
                      <span>🎨</span>
                      <span>Creative expression opportunities</span>
                    </li>
                    <li className="flex gap-3">
                      <span>💪</span>
                      <span>Confidence and values development</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-saffron-200">
              <p className="text-center text-vedic-800 font-medium">
                <span className="font-semibold">Important:</span> VediqPath is not a therapeutic program, medical intervention, or replacement for school education. It's a complementary weekend enrichment experience designed to support holistic development.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Book Trial */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            title="Book a Trial Session"
            subtitle="Start your child's VediqPath journey"
            centered={true}
          />

          <div className="max-w-2xl mx-auto">
            <TrialForm />
          </div>
        </Container>
      </Section>

      {/* FAQ Quick */}
      <Section className="bg-cream-50">
        <Container>
          <SectionHeading title="Quick Questions?" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'How long is a session?',
                a: 'Session length varies, typically ranging from 1.5 to 2.5 hours, customized for the age group.',
              },
              {
                q: 'Do I need to attend?',
                a: 'Parents typically drop off. We update you regularly on your child\'s progress and experiences.',
              },
              {
                q: 'What if my child is shy?',
                a: 'Our facilitators create a safe, inclusive space where every child can participate at their own pace.',
              },
              {
                q: 'Can we join anytime?',
                a: 'Yes! You can start with a trial session and join our ongoing weekend programs. New batches begin regularly.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card p-6 h-full">
                  <h4 className="font-display font-600 text-vedic-900 mb-3">
                    {item.q}
                  </h4>
                  <p className="text-vedic-700">{item.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-vedic-700 mb-6">Still have questions?</p>
            <Link to="/contact">
              <Button variant="secondary">Get in Touch</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
};
