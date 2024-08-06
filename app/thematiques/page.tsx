'use client'

import Example from "@/components/charts/pie-chart";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const ThematiquesPage = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width as needed for mobile
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 mt-12 w-full h-screen">
      {/* <div className="border border-[#9747ff] border-dashed rounded-full w-[600px] h-[600px]">
        <div className="border border-[#3ea381] bg-[#3ea381] rounded-full bg w-[42%] h-[42%] mt-20 ml-20">
          <h1 className="text-center text-2xl items-center justify-center h-full flex flex-col">
            Support Client <br />
            42%
          </h1>
        </div>
        <div className="border border-[#a33e60] bg-[#a33e60] rounded-full bg w-[15%] h-[15%] ml-96 -mt-40">
          <h1 className="text-center text-xs items-center justify-center h-full flex flex-col">
            Gesiton des Sinistres <br />
            15%
          </h1>
        </div>
        <div className="border border-[#a33e60] bg-[#a33e60] rounded-full bg w-[20%] h-[20%] mt-28 ml-32">
          <h1 className="text-center items-center justify-center h-full flex flex-col">
            Ventes et Marketing <br />
            20%
          </h1>
        </div>
        <div className="border border-[#3ea381] bg-[#3ea381] rounded-full bg w-[10%] h-[10%] -mt-24 ml-72">
          <h1 className="text-center text-xs items-center justify-center h-full flex flex-col">
            Tech <br />
            10%
          </h1>
        </div>
        <div className="border border-[#a33e60] bg-[#a33e60] rounded-full bg w-[12%] h-[12%] -mt-16 ml-96">
          <h1 className="text-center text-xs items-center justify-center h-full flex flex-col">
            Tarif et facturation <br />
            12%
          </h1>
        </div>
      </div> */}
      <div className={cn("h-screen", 
        isMobile && "h-[500px]"
      )}>
      {/* <div className="h-screen"> */}
        <Example />
      </div>
      <div>
        <div className="space-y-5 px-7">
          <div>
            <h1 className="font-extrabold text-xl">Points forts: </h1>
            <ul className="list-disc list-inside">
              <li>Rapidité et efficacité du service</li>
              <li>Amabilité et compétence des conseillers</li>
              <li>
                Facilité dutilisation des outils en ligne et de lapplication
                mobile
              </li>
              <li>Prix compétitifs et Offres attractives</li>
            </ul>
          </div>
          <div>
            <h1 className="font-extrabold text-xl">Points faibles: </h1>
            <ul className="list-disc list-inside">
              <li>Rapidité et efficacité du service</li>
              <li>Amabilité et compétence des conseillers</li>
              <li>
                Facilité dutilisation des outils en ligne et de lapplication
                mobile
              </li>
              <li>Prix compétitifs et Offres attractives</li>
            </ul>
          </div>
          <div>
            <h1 className="font-extrabold text-xl">Reommendations: </h1>
            <ul className="list-disc list-inside">
              <li>Rapidité et efficacité du service</li>
              <li>Amabilité et compétence des conseillers</li>
              <li>
                Facilité dutilisation des outils en ligne et de lapplication
                mobile
              </li>
              <li>Prix compétitifs et Offres attractives</li>
              <li>Rapidité et efficacité du service</li>
              <li>Amabilité et compétence des conseillers</li>
              <li>
                Facilité dutilisation des outils en ligne et de lapplication
                mobile
              </li>
              <li>Prix compétitifs et Offres attractives</li>
            </ul>
          </div>
          <div>
            <h1 className="font-extrabold text-xl">Keywords: </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThematiquesPage;
