import { useRef } from "react";

import { FiArrowUpRight } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi2";
import { checkmark } from "../../assets/svgs/dashboard";
import { Link } from "react-router-dom";
import { HeroSection } from "./ui/HeroSection";
import { TrustedBusinesses } from "./ui/TrustedBusinesses";
import { ServiceSection } from "./ui/ServiceSection/ServiceSection";
import { PortfolioSection } from "./ui/PortfolioSection";
import { PricingSection } from "./ui/PricingSection";
import { Testimonials } from "./ui/Testimonials";
export const Dashboard: React.FC = () => {
  const textEl = useRef<HTMLSpanElement>(null);

  return (
    <>
      <HeroSection />

      <TrustedBusinesses />

      <ServiceSection />

      <PortfolioSection />

      <PricingSection />

      <Testimonials />
    </>
  );
};
