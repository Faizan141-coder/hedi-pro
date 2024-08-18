"use client";

import Example from "@/components/charts/pie-chart";
import { SearchInput } from "@/components/search-input";
import { cn } from "@/lib/utils";
import React, { Suspense, useEffect, useState } from "react";
import { Sankey, Tooltip } from "recharts";

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

  const MyCustomNode = (props: any) => {
    const { x, y, width, height, index, payload } = props;
    const colors = [
      "#2c3e50", // claims management
      "#e74c3c", // customer service
      "#16a085", // general experience
      "#f39c12", // product & service
      "#d35400", // marketing & sales
      "#3498db", // anger
      "#1abc9c", // disappointment
      "#2ecc71", // neutral
      "#9b59b6", // sadness
      "#f1c40f", // disgust
      "#e74c3c", // joy
      "#d35400", // sad
      "#2980b9", // fear
      "#f39c12", // 1
      "#16a085", // 2
      "#2ecc71", // 3
      "#9b59b6", // 4
      "#e74c3c", // 5
    ];
  
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={colors[index % colors.length]}
          stroke="#000"
          strokeWidth={1}
        />
        <text
          x={x + width}
          y={y + height / 2}
          textAnchor="start"
          dy=".35em"
          fill="#000"  // Set text color to black
        >
          {payload.name}
        </text>
      </g>
    );
  };
  

  const data = {
    nodes: [
      { name: "claims management" },
      { name: "customer service" },
      { name: "general experience" },
      { name: "product & service" },
      { name: "marketing & sales" },
      { name: "anger" },
      { name: "disappointment" },
      { name: "neutral" },
      { name: "sadness" },
      { name: "disgust" },
      { name: "joy" },
      { name: "sad" },
      { name: "fear" },
      { name: "1" },
      { name: "2" },
      { name: "3" },
      { name: "4" },
      { name: "5" },
    ],
    links: [
      { source: 0, target: 5, value: 3 },
      { source: 0, target: 6, value: 5 },
      { source: 1, target: 7, value: 7 },
      { source: 2, target: 8, value: 2 },
      { source: 2, target: 9, value: 6 },
      { source: 3, target: 10, value: 5 },
      { source: 4, target: 11, value: 3 },
      { source: 4, target: 12, value: 2 },
      { source: 5, target: 13, value: 1 },
      { source: 6, target: 14, value: 5 },
      { source: 7, target: 15, value: 4 },
      { source: 8, target: 16, value: 3 },
      { source: 9, target: 17, value: 2 },
    ],
  };

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
        <Sankey
          width={1200}
          height={600}
          data={data}
          node={<MyCustomNode />}
          nodePadding={20}
          margin={{
            left: 200,
            right: 200,
            top: 100,
            bottom: 100,
          }}
          link={{ stroke: "#888", strokeOpacity: 0.4 }} // Adjust the link color and opacity
        >
          <Tooltip />
        </Sankey>
      </div>
    </>
  );
};

export default ThematiquesPage;
