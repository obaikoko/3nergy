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
      <Hero />
      <TestimonialCarousel/>
      <SuccessStories />
      <PowerInAction />
      <HowItWork />
      <FeaturesSection />
      <PricingSection/>
      <FeatureTwo/>
      <ReferralRewards />
      <KnowledgeHub />
      <FaqSection/>
      <CTASection/>
    </>
  );
};

export default HomePage;
