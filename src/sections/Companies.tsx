import React from "react";
import AcmeCorpLogo from "../assets/images/acme-corp-logo.svg";
import EchoValleyLogo from "../assets/images/echo-valley-logo.svg";
import QuantumLogo from "../assets/images/quantum-logo.svg";
import PulseLogo from "../assets/images/pulse-logo.svg";
import OutsideLogo from "../assets/images/outside-logo.svg";
import { SectionBorder } from "@/components/SectionBorder";

export const Companies = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder className="pt-8 pb-24 md:pb-36 lg:pb-48">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">
            Helping people create beautiful content at
          </h3>
          <div className="flex overflow-x-hidden -m-4">
            <div className="flex flex-none justify-center gap-18 md:gap-36 px-18 mt-20">
              <div className="font-space text-white font-extrabold text-xl">
                <AcmeCorpLogo className="h-8" />
              </div>
              <div className="font-space text-white font-extrabold text-xl">
                <EchoValleyLogo className="h-8" />
              </div>
              <div className="font-space text-white font-extrabold text-xl">
                <QuantumLogo className="h-8" />
              </div>
              <div className="font-space text-white font-extrabold text-xl">
                <PulseLogo className="h-8" />
              </div>
              <div className="font-space text-white font-extrabold text-xl">
                <OutsideLogo className="h-8" />
              </div>
            </div>
          </div>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Companies;
