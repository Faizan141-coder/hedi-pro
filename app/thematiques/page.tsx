"use client";

import Example from "@/components/charts/pie-chart";
import { SearchInput } from "@/components/search-input";
import { cn } from "@/lib/utils";
// import { sankeyLinkHorizontal } from "d3-sankey";
import React, { Suspense, useEffect, useState } from "react";

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

  // Sample data for the Sankey chart
  // const nodes = [{ id: "A" }, { id: "B" }, { id: "C" }, { id: "D" }];

  // const links = [
  //   { source: "A", target: "B", value: 10 },
  //   { source: "B", target: "C", value: 15 },
  //   { source: "C", target: "D", value: 20 },
  // ];

  // Ensure linkPath function always returns a string
  // const linkPath = sankeyLinkHorizontal() as (d: any) => string;

  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 mt-12 w-full h-screen">
        <div className={cn("h-screen", isMobile && "h-[500px]")}>
          <h1 className="text-xl font-bold px-10 -mb-14">
            Analyse des Retours Clients: thematiques
          </h1>
          <Example />
          <div className="px-20 -mt-20 flex flex-col items-center justify-center">
            <Suspense>
              <SearchInput />
            </Suspense>
          </div>
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
              <h1 className="font-extrabold text-xl">Recommendations: </h1>
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
      <div className="px-10 pb-10">
        {/* TODO */}
        {/* Add Sneaky Chart here */}
      </div>
    </>
  );
};

export default ThematiquesPage;
