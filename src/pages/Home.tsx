import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Container, Section } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { ProgramCard, TestimonialCard } from '../components/cards';
import { programs, whyVedicNest, sessionFlow } from '../data/programs';
import { testimonials } from '../data/testimonials';
import { useSEOMetaTags } from '../hooks/useSEOMetaTags';
import * as LucideIcons from 'lucide-react';
import { handleImageError } from '../lib/images';

const HeroImage = 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop&q=80';

export const Home = () => {
  useSEOMetaTags({
    title: 'VedicNest | Vedic Learning, Yoga & Creative Experiences for Kids in Noida',
    description: 'VedicNest helps children aged 6–12 build focus, confidence and values through Vedic stories, yoga, creativity and meaningful weekend experiences in Noida.',
    image: HeroImage,
    keywords: 'vedic learning kids, vedic stories children, yoga for kids Noida, weekend program',
  });
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cream-50 py-14 sm:py-20 md:py-24 lg:py-32 min-h-[90vh] flex items-center">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="text-sm font-medium text-saffron-600 uppercase tracking-wider">
                  VEDICNEST • NOIDA
                </span>
              </div>

              <h1 className="heading-hero mb-6 text-vedic-900">
                Growing Curious Minds. Rooted in Timeless Values.
              </h1>

              <p className="body-lg text-vedic-700 mb-8 max-w-xl">
                Helping children aged 6–12 build focus, confidence and values through Vedic stories, yoga and creativity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Book a Trial Session
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button variant="secondary" size="lg">
                    Explore Programs
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-vedic-600 font-medium">
                <div>✓ Ages 6–12</div>
                <div>✓ Weekend Program</div>
                <div>✓ Noida</div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-saffron-100 rounded-full opacity-50 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-vedic-100 rounded-full opacity-50 blur-3xl" />

              <img
                src={HeroImage}
                onError={handleImageError}
                alt="Children learning at VedicNest"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="More Than a Weekend Program"
              subtitle="VedicNest creates meaningful learning experiences where children can discover the wisdom of Vedic traditions while developing focus, confidence, creativity and strong values."
            />

            <Link to="/about">
              <Button variant="secondary">Discover VedicNest</Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* What Children Experience */}
      <Section className="bg-cream-50">
        <Container>
          <SectionHeading
            title="What Children Experience"
            subtitle="Engaging activities designed for holistic growth"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Why VedicNest */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            title="Helping Children Grow From Within"
            subtitle="Four pillars of VedicNest development"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyVedicNest.map((item, index) => {
              const IconComponent = (LucideIcons as Record<string, any>)[item.icon] || LucideIcons.Lightbulb;
              return (
                <AnimatedSection key={item.id} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-saffron-100 to-vedic-100 flex items-center justify-center">
                        <IconComponent size={32} className="text-vedic-600" />
                      </div>
                    </div>
                    <h3 className="font-display font-600 text-vedic-900">{item.title}</h3>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section className="bg-cream-50">
        <Container>
          <SectionHeading title="How It Works" subtitle="Simple steps to begin the journey" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sessionFlow.slice(0, 3).map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card p-8 h-full">
                  <div className="text-5xl font-display font-600 text-saffron-500 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-display font-600 text-vedic-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-vedic-700">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Book a Trial Session
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            title="Parent Testimonials"
            subtitle="What parents and children are experiencing"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Experience */}
      <Section className="bg-gradient-to-r from-vedic-600 to-vedic-700 text-cream-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section text-cream-50 mb-6">
                Tradition That Comes Alive
              </h2>
              <p className="body-lg text-cream-100 mb-8">
                VedicNest also creates and participates in engaging devotional and cultural experiences. From vibrant bhajan gatherings to community celebrations, we bring traditional Indian culture to life in ways that inspire and connect families.
              </p>
              <Link to="/events">
                <Button variant="secondary" size="lg">
                  Explore Events
                </Button>
              </Link>
            </div>
            <motion.img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop&q=80"
              onError={handleImageError}
              alt="Bhajan clubbing event"
              className="rounded-xl w-full h-auto shadow-2xl"
              loading="lazy"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-cream-50 text-center">
        <Container>
          <h2 className="heading-section mb-6">
            Give Your Child a Weekend That Inspires.
          </h2>
          <p className="subheading text-vedic-600 mb-12 max-w-2xl mx-auto">
            Explore a joyful space where stories, movement, creativity and timeless values come together.
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
