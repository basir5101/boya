import {
  getBenefitSection,
  getClientSection,
  getFooterSection,
  getMarketingSection,
  getPageContent,
  getServicesSection,
} from "@/sanity/sanity-utills";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Navigation } from "@/types/route";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ClientSection from "@/components/ClientSection";
import BenefitSection from "@/components/BenefitSection";
import MarketingSection from "@/components/MarketingSection";
import Footer from "@/components/Footer";

export default async function Home() {
  const pageContent = await getPageContent();
  const services = await getServicesSection();
  const clients = await getClientSection();
  const benefits = await getBenefitSection();
  const marketingContent = await getMarketingSection();
  const footerContent = await getFooterSection();
  return (
    <div className="">
      <div className="bg-black text-white">
        <div className="max-w-5xl mx-auto pb-6">
          <div className="flex justify-between items-center">
            <div>
              <Image src={logo} height={100} width={100} alt="" />{" "}
            </div>
            <div>
              <ul className="flex items-center border border-t-0 border-l-0 border-x-0 py-5 border-gray-600">
                {pageContent.navItems.map((item: Navigation, index: number) => (
                  <li key={index}>
                    <Link
                      href={item.route}
                      className="mx-5 px-3 hover:text-blue-600 transition"
                    >
                      {item.text}
                    </Link>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <HeroSection pageData={pageContent.hero} />
          <ServiceSection services={services} />
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <ClientSection clients={clients} />
        <BenefitSection benefits={benefits} />
        <MarketingSection marketingContent={marketingContent} />
      </div>
      <div className="bg-black text-white">
        <div className="max-w-5xl mx-auto pb-6">
          <Footer footerContent={footerContent} />
        </div>
      </div>
    </div>
  );
}
