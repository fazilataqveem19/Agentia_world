import AcmeCorpLogo from "../assets/images/acme-corp-logo.svg";
import EchoValleyLogo from "../assets/images/echo-valley-logo.svg";
import QuantumLogo from "../assets/images/quantum-logo.svg";
import PulseLogo from "../assets/images/pulse-logo.svg";
import OutsideLogo from "../assets/images/outside-logo.svg";
import CelestialLogo from "../assets/images/celestial-logo.svg";

export const companies = [
  {
    name: "Acme Corp",
    logo: AcmeCorpLogo,
  },
  {
    name: "Echo Valley",
    logo: EchoValleyLogo,
  },
  {
    name: "Quantum",
    logo: QuantumLogo,
  },
  {
    name: "Pulse",
    logo: PulseLogo,
  },
  {
    name: "Outside",
    logo: OutsideLogo,
  },
  {
    name: "Celestial",
    logo: CelestialLogo,
  },
];

export const Companies = () => {
  return (
    <section className="pb-[30px]">
      <div className="container mx-auto px-4 lg:px-0 xl:px-16">
        <div className="border-l border-r border-[var(--color-border)]">
        <h2 className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
  Empowering Innovation, Creativity, and Growth
</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">
          
          </div>
          </div>
      </div>
    </section>
  );
};

export default Companies;
