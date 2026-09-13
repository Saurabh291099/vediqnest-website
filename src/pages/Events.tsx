import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Container, Section } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { EventCard } from '../components/cards';
import { events, upcomingEventsCopy } from '../data/events';
import { useSEOMetaTags } from '../hooks/useSEOMetaTags';

export const Events = () => {
  useSEOMetaTags({
    title: 'VediqPath Events & Cultural Experiences | Noida',
    description: 'Discover VediqPath\'s devotional and cultural experiences including bhajan gatherings and community events for families.',
    keywords: 'bhajans kids, devotional events, cultural gatherings, family events Noida',
  });

  return (
    <>
      <section className="bg-gradient-to-b from-saffron-50 to-cream-50 py-20 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-hero mb-6 text-vedic-900">
              Where Tradition Comes Alive
            </h1>
            <p className="body-lg text-vedic-700">
              Beyond weekends, VediqPath creates vibrant cultural and devotional experiences where families connect, celebrate and experience the richness of Indian traditions together.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Featured Events */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            title="Our Experiences"
            subtitle="Devotional and cultural gatherings"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Deep Dive */}
      <Section className="bg-cream-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="card p-8 md:p-12 bg-gradient-to-br from-white to-cream-50">
                <h2 className="text-3xl font-display font-600 text-vedic-900 mb-6">
                  Bhajan Clubbing
                </h2>

                <p className="body-lg text-vedic-800 mb-8">
                  A vibrant devotional experience where bhajans, music, collective participation and joyful energy come together. This is not a nightclub, but a celebration of devotional traditions through music, rhythm and community connection.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border-2 border-vedic-100 p-6 rounded-lg">
                    <h4 className="font-display font-600 text-vedic-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">🎵</span>
                      Experience
                    </h4>
                    <ul className="space-y-3 text-vedic-800 font-medium">
                      <li>✓ Live devotional music</li>
                      <li>✓ Traditional and modern bhajans</li>
                      <li>✓ Collective chanting</li>
                      <li>✓ Rhythmic participation</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-saffron-200 p-6 rounded-lg">
                    <h4 className="font-display font-600 text-vedic-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">👨‍👩‍👧‍👦</span>
                      Atmosphere
                    </h4>
                    <ul className="space-y-3 text-vedic-800 font-medium">
                      <li>✓ Family-friendly</li>
                      <li>✓ Joyful and celebratory</li>
                      <li>✓ Inclusive community</li>
                      <li>✓ Cultural immersion</li>
                    </ul>
                  </div>
                </div>

                <p className="text-vedic-800 italic">
                  These experiences are perfect for families looking to deepen their connection with Indian cultural traditions in a joyful, modern way.
                </p>
              </div>
            </AnimatedSection>

            {/* Upcoming */}
            <AnimatedSection delay={0.1} className="mt-12">
              <div className="bg-white border-2 border-vedic-200 rounded-xl p-8 text-center shadow-sm\">
                <p className="text-lg text-vedic-900 font-semibold\">
                  📅 Upcoming Events:
                </p>
                <p className="text-vedic-800 mt-2 font-medium\">
                  {upcomingEventsCopy}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Why Attend */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            title="Why Attend VediqPath Events?"
            subtitle="Benefits for your family"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: 'Cultural Connection',
                description: 'Deepen your family\'s connection to Indian heritage and Vedic traditions.',
              },
              {
                icon: '👨‍👩‍👧',
                title: 'Family Bonding',
                description: 'Create meaningful memories together in a supportive community setting.',
              },
              {
                icon: '🎶',
                title: 'Joyful Experience',
                description: 'Experience the uplifting power of devotional music and collective celebration.',
              },
              {
                icon: '💆',
                title: 'Wellness',
                description: 'Enjoy stress relief and spiritual nourishment through music and meditation.',
              },
              {
                icon: '🤝',
                title: 'Community',
                description: 'Connect with like-minded families who value cultural learning.',
              },
              {
                icon: '🌟',
                title: 'Personal Growth',
                description: 'Explore spirituality, mindfulness and personal values in a modern context.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="card p-8 text-center group hover:bg-gradient-to-b hover:from-vedic-50 hover:to-saffron-50">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-600 text-vedic-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-vedic-700 text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white border-t-2 border-vedic-100">
        <Container>
          <h2 className="heading-section mb-6 text-vedic-900\">Excited to Join?</h2>
          <p className="subheading text-vedic-700 mb-12 max-w-2xl mx-auto\">
            Reach out to us to learn about upcoming events or to express your interest.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Get in Touch
            </Button>
          </Link>
        </Container>
      </Section>
    </>
  );
};
