import { Container, Section } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { galleryItems } from '../data/gallery';
import { motion } from 'framer-motion';
import { useSEOMetaTags } from '../hooks/useSEOMetaTags';
import { handleImageError } from '../lib/images';

export const Gallery = () => {
  useSEOMetaTags({
    title: 'VedicNest Gallery | Children Learning, Stories & Community',
    description: 'Browse our gallery of VedicNest sessions, events and community moments showcasing children learning and growing.',
    keywords: 'vedicnest gallery, children learning, yoga classes, cultural events',
  });

  return (
    <>
      <section className="bg-cream-50 py-20 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-hero mb-6 text-vedic-900"
            >
              Follow Our Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="body-lg text-vedic-700"
            >
              Glimpses of VedicNest in action — children learning, creating, moving and growing.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={item.image}
                    onError={handleImageError}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vedic-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-lg font-display font-600 text-cream-50 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cream-200 capitalize">{item.category}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="bg-white border-t-2 border-cream-200">
        <Container>
          <SectionHeading title="Gallery Categories" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: '📚', name: 'Learning', count: 8 },
              { icon: '🧘', name: 'Yoga', count: 8 },
              { icon: '🎨', name: 'Creativity', count: 8 },
              { icon: '📖', name: 'Stories', count: 8 },
              { icon: '👥', name: 'Community', count: 8 },
              { icon: '🎉', name: 'Events', count: 8 },
              { icon: '🕉️', name: 'Mindfulness', count: 8 },
              { icon: '🏫', name: 'Workshops', count: 8 },
            ].map((category, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="card p-6 text-center hover:bg-gradient-to-b hover:from-vedic-50 hover:to-saffron-50 cursor-pointer transition-all">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-display font-600 text-vedic-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-vedic-600">{category.count} photos</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

    </>
  );
};
