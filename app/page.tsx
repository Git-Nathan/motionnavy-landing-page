import { AboutMe } from '@/components/about-me/AboutMe';
import { Contact } from '@/components/contact/Contact';
import { HomeSection } from '@/components/home/HomeSection';
import { MyWorkV2 } from '@/components/my-work-v2/MyWorkV2';
import { Pricing } from '@/components/pricing/Pricing';
import { WhyChooseMe } from '@/components/why-choose-me/WhyChooseMe';

export default function Home() {
  return (
    <>
      <HomeSection />
      <WhyChooseMe />
      <MyWorkV2 />
      <Pricing />
      <AboutMe />
      <Contact />
    </>
  );
}
