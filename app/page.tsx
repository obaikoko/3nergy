import CTASection from '@/components/shared/home-page/cta-section';
import FaqSection from '@/components/shared/home-page/faq-section';
import FeaturesSection from '@/components/shared/home-page/feature-section';
import FeatureTwo from '@/components/shared/home-page/feature-two';
import Hero from '@/components/shared/home-page/hero';
import HowItWork from '@/components/shared/home-page/how-it-work';
import KnowledgeHub from '@/components/shared/home-page/knowledge-hub';
import PowerInAction from '@/components/shared/home-page/power-in-action';
import PricingSection from '@/components/shared/home-page/pricing-section';
import ReferralRewards from '@/components/shared/home-page/referral-rewards';
import SuccessStories from '@/components/shared/home-page/success-stories';
import TestimonialCarousel from '@/components/shared/home-page/testimonial-carousel';

const HomePage = () => {
  return (
    <>
      <section id='hero'><Hero /></section>
      <section id='testimonials'><TestimonialCarousel/></section>
      <section id='success-stories'><SuccessStories /></section>
      <section id='power-in-action'><PowerInAction /></section>
      <section id='how-it-works'><HowItWork /></section>
      <section id='features'><FeaturesSection /></section>
      <section id='pricing'><PricingSection/></section>
      <section id='solutions'><FeatureTwo/></section>
      <section id='referral'><ReferralRewards /></section>
      <section id='knowledge-hub'><KnowledgeHub /></section>
      <section id='faq'><FaqSection/></section>
      <section id='contact'><CTASection/></section>
    </>
  );
};

export default HomePage;