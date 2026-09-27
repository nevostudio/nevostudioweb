import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { AdvertiserDemo } from "@/components/advertiser-demo/advertiser-demo";
import { ContactClosure } from "@/components/sections/contact-closure";

export default function Home() {
  return (
    <div id="inicio" tabIndex={-1}>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <AdvertiserDemo />
        <ContactClosure />
      </main>
      <SiteFooter />
    </div>
  );
}
