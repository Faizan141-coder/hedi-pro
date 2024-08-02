import ActiveShapePieChart from "@/components/charts/active-shape-pie-chart";
import EvolutionLineChart from "@/components/charts/line-chart";
import RadialBarCharts from "@/components/charts/radial-bar-chart";
import Image from "next/image";

const sources = [
  { src: "/google.svg", alt: "google icon" },
  { src: "/trustpilot.svg", alt: "trustpilot icon" },
  { src: "/google-playstore.svg", alt: "playstore icon" },
  { src: "/app-store.svg", alt: "appstore icon" },
  { src: "/instagram.svg", alt: "instagram icon" },
  { src: "/tiktok.svg", alt: "tiktok icon" },
  { src: "/twitterx.svg", alt: "xtwitter icon" },
  { src: "/reddit.svg", alt: "reddit icon" },
];

export default function Home() {
  return (
    <div>
      <div className="w-full p-5">
        <div className="flex mt-5 w-full">
          <div className="w-2/3 pr-5">
            <h1 className="py-2 ml-7 font-normal text-xl">
              Evolution de la note par plateforme
            </h1>
            <EvolutionLineChart />
          </div>
          <div className="w-1/3 mb-5">
            <div className="border border-dashed border-[#2e765e] rounded-2xl p-5 h-full">
              <h1 className="text-[#3ea381] text-2xl">Overview</h1>
              <div className="flex justify-between pt-5">
                <h1>Data Cleaning</h1>
                <h1 className="text-[#3ea381]">48%</h1>
              </div>
              <div className="flex justify-between pt-5">
                <h1>Average Rating</h1>
                <h1 className="text-[#3ea381]">3.36</h1>
              </div>
              <div className="flex justify-between pt-5">
                <h1>Response Rate</h1>
                <h1 className="text-[#3ea381]">31.66%</h1>
              </div>
              <div className="flex justify-between pt-5">
                <h1>NPS</h1>
                <h1 className="text-[#3ea381]">27.08</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="border border-dashed border-[#2e765e] rounded-2xl p-5">
            <h1 className="text-[#3ea381] text-2xl">Concurrents</h1>
            <div className="flex justify-between pt-5">
              <h1>MAIF</h1>
              <h1>4.5/68010</h1>
            </div>
          </div>

          <div className="border border-dashed border-[#2e765e] rounded-2xl p-5">
            <h1 className="text-[#3ea381] text-2xl">Thematique</h1>
            <div className="flex justify-start items-center space-x-2">
              <div className="rounded-full size-3 bg-[#3ea381]" />
              <h2 className="font-normal text-sm">Postitive</h2>
            </div>
            <div className="flex justify-start items-center space-x-2">
              <div className="rounded-full size-3 bg-red-500" />
              <h2 className="font-normal text-sm">Negative</h2>
            </div>
            <RadialBarCharts />
          </div>

          <div className="border border-dashed border-[#2e765e] rounded-2xl p-5">
            <div className="-mt-20">
              <ActiveShapePieChart />
            </div>
            <div className="flex justify-between px-10 -mt-20">
              <div>
                <div className="flex justify-start items-center space-x-2">
                  <div className="rounded-full size-3 bg-[#867ae5]" />
                  <h2 className="font-normal text-xl">Joie</h2>
                </div>
                <div className="flex justify-start items-center space-x-2">
                  <div className="rounded-full size-3 bg-[#23187a]" />
                  <h2 className="font-normal text-xl">Colere</h2>
                </div>
                <div className="flex justify-start items-center space-x-2">
                  <div className="rounded-full size-3 bg-[#d7d3f6]" />
                  <h2 className="font-normal text-xl">Neutre</h2>
                </div>
              </div>
              <div>
                <div className="flex justify-start items-center space-x-2">
                  <div className="rounded-full size-3 bg-[#a33e60]" />
                  <h2 className="font-normal text-xl">Peur</h2>
                </div>
                <div className="flex justify-start items-center space-x-2">
                  <div className="rounded-full size-3 bg-[#3ea381]" />
                  <h2 className="font-normal text-xl">Tristesse</h2>
                </div>
                <div className="flex justify-start items-center space-x-2">
                  <div className="rounded-full size-3 bg-[#aea6ee]" />
                  <h2 className="font-normal text-xl">Surprise</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t h-[65px]">
        <div className="ml-5 flex space-x-3 items-center h-full">
          <h1 className="text-xl font-semibold">Sources: </h1>
          <div className="justify-between flex w-full px-10">
            {sources.map((source, index) => (
              <Image
                key={index}
                src={source.src}
                alt={source.alt}
                width={40}
                height={40}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
