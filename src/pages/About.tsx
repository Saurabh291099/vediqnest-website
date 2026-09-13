import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Container, Section } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { pillars } from '../data/programs';
import { useSEOMetaTags } from '../hooks/useSEOMetaTags';

export const About = () => {
  useSEOMetaTags({
    title: 'About VediqPath | Vedic & Values-Based Learning for Kids',
    description: 'Discover VediqPath\'s approach to child development combining Vedic traditions with modern, engaging activities for children aged 6–12.',
    keywords: 'vedic education, values-based learning, child development, holistic learning',
  });

  return (
    <>
      <section className="bg-cream-50 py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-hero mb-6 text-vedic-900"
            >
              Rooted in Tradition. Designed for Today's Child.
            </motion.h1>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <AnimatedSection>
                <p className="body-lg text-vedic-800 mb-8 leading-relaxed">
                  Children learn not only through classrooms and textbooks, but through stories, experiences, movement, creativity and meaningful conversations.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="body-lg text-vedic-800 mb-8 leading-relaxed">
                  VediqPath brings together elements of India's Vedic and cultural traditions with engaging activities designed for children aged 6–12.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="body-lg text-vedic-800 leading-relaxed">
                  Our aim is to create an environment where children can slow down, discover, participate and grow — building focus, confidence, creativity and values along the way.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section className="bg-cream-50">
        <Container>
          <SectionHeading title="Our Approach" subtitle="Four pillars of VediqPath" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group hover:bg-gradient-to-b hover:from-vedic-50 hover:to-saffron-50"
              >
                <div className="text-4xl font-display font-600 text-vedic-600 group-hover:text-vedic-700 mb-4 transition-colors">
                  {['🎓', '🧘', '🎨', '🌱'][index]}
                </div>
                <h3 className="text-2xl font-display font-600 text-vedic-900 mb-3 uppercase tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-vedic-700">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            title="What We Believe"
            subtitle="Principles that guide VediqPath"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                icon: '🌟',
                title: 'Every Child Is Unique',
                description: "We celebrate individual learning styles and support each child's unique journey of discovery.",
              },
              {
                icon: '🌍',
                title: 'Culture Matters',
                description: 'Indian heritage and Vedic wisdom offer timeless insights for modern childhood.',
              },
              {
                icon: '❤️',
                title: 'Holistic Growth',
                description: 'True development happens across mind, body, emotion and spirit.',
              },
              {
                icon: '🤝',
                title: 'Community Connection',
                description: 'Children thrive when they feel part of a caring, supportive community.',
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex gap-6">
                  <div className="text-4xl flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-display font-600 text-vedic-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-vedic-700">{value.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-cream-50 text-center">
        <Container>
          <h2 className="heading-section mb-6">Ready to Begin?</h2>
          <p className="subheading text-vedic-600 mb-12 max-w-2xl mx-auto">
            Join us for a trial session and experience the VediqPath difference.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Book a Trial Session
            </Button>
          </Link>
        </Container>
      </Section>
    </>
  );
};
