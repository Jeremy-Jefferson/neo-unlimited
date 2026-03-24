import { Hero } from '../../components/sections/home/Hero/Hero';
import { Positioning } from '../../components/sections/home/Positioning/Positioning';
import { ServicesPreview } from '../../components/sections/home/ServicesPreview/ServicesPreview';
import { FeaturedWork } from '../../components/sections/home/FeaturedWork/FeaturedWork';
import { Approach } from '../../components/sections/home/Approach/Approach';
import { CTA } from '../../components/sections/home/CTA/CTA';
import { Divider } from '../../components/ui/Divider/Divider';

/**
 * HomePage - Composes all home sections in order
 * Clean composition layer with no inline content
 */
export function HomePage() {
  return (
    <main>
      <Hero />
      <Divider />
      <Positioning />
      <Divider />
      <ServicesPreview />
      <Divider />
      <FeaturedWork />
      <Divider />
      <Approach />
      <Divider />
      <CTA />
    </main>
  );
}
