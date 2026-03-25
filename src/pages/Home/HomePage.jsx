import { Hero } from '../../components/sections/home/Hero/Hero';
import { CoreServices } from '../../components/sections/home/CoreServices/CoreServices';
import { Protection } from '../../components/sections/home/Protection/Protection';
import { WealthStrategy } from '../../components/sections/home/WealthStrategy/WealthStrategy';
import { BusinessPartnerships } from '../../components/sections/home/BusinessPartnerships/BusinessPartnerships';
import { AboutTrust } from '../../components/sections/home/AboutTrust/AboutTrust';
import { LeadCapture } from '../../components/sections/home/LeadCapture/LeadCapture';
import { Divider } from '../../components/ui/Divider/Divider';

/**
 * HomePage - Conversion-focused homepage composition
 * Leads with hero CTA and guides visitors through conversion funnel
 */
export function HomePage() {
  return (
    <main>
      <Hero />
      <Divider />
      <CoreServices />
      <Divider />
      <Protection />
      <Divider />
      <WealthStrategy />
      <Divider />
      <BusinessPartnerships />
      <Divider />
      <AboutTrust />
      <Divider />
      <LeadCapture />
    </main>
  );
}
