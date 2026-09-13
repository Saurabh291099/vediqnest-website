import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Container, Section } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { ProgramCard } from '../components/cards';
import { programs } from '../data/programs';
import { useSEOMetaTags } from '../hooks/useSEOMetaTags';

export const Programs = () => {
  useSEOMetaTags({
    title: 'Vedic Stories, Yoga & Creativity for Kids | VediqPath Programs',
    description: 'Explore VediqPath\'s comprehensive programs: Vedic stories, yoga & mindfulness, art & creativity, and values-based learning for children aged 6–12.',
    keywords: 'yoga kids, vedic stories, creative activities, mindfulness programs, values education',
  });

  return (
    <>
      <section className="bg-gradient-to-b from-cream-50 to-white py-20 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-hero mb-6 text-vedic-900">
              Learning That Children Can Feel
            </h1>
            <p className="body-lg text-vedic-700">
              Each program is thoughtfully designed to engage multiple dimensions of child development through Vedic traditions and modern pedagogy.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Programs Grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/weekend-program">
              <Button variant="primary" size="lg">
                Explore Weekend Program
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Deep Dive Section */}
      <Section className="bg-cream-50">
        <Container>
          <SectionHeading
            title="Program Details"
            subtitle="Discover what each program offers"
          />

          {programs.map((program, index) => (
            <AnimatedSection
              key={program.id}
              delay={index * 0.1}
              className={index % 2 === 0 ? '' : ''}
            >
              <div className={`mb-16 pb-16 ${index !== programs.length - 1 ? 'border-b border-cream-200' : ''}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'order-2 md:order-1' : ''}>
                    <h3 className="text-3xl font-display font-600 text-vedic-900 mb-4">
                      {program.title}
                    </h3>
                    <p className="body-lg text-vedic-700 mb-6">
                      {program.description}
                    </p>
                    <ul className="space-y-3">
                      {program.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-saffron-500 font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-vedic-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${index % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                    <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                      {index === 0 && (
                        <img
                          src="https://images.unsplash.com/photo-1507842845857-c435f2e2b88f?w=600&h=600&fit=crop"
                          alt="Vedic stories for children"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                      {index === 1 && (
                        <img
                          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop"
                          alt="Yoga and mindfulness for kids"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                      {index === 2 && (
                        <img
                          src="https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=600&h=600&fit=crop"
                          alt="Art and creativity activities"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                      {index === 3 && (
                        <img
                          src="https://images.unsplash.com/photo-1516321318423-f06f70db51ca?w=600&h=600&fit=crop"
                          alt="Values and life skills learning"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white text-center">
        <Container>
          <h2 className="heading-section mb-6">Curious to See Them in Action?</h2>
          <p className="subheading text-vedic-600 mb-12 max-w-2xl mx-auto">
            Book a trial session and let your child experience VediqPath firsthand.
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
