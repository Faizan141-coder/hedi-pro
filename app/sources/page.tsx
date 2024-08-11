import SourceChart from "@/components/charts/source-chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";

const data = [
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "1",
    date: "31/05/2024",
  },
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "2",
    date: "30/05/2024",
  },
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "3",
    date: "30/05/2024",
  },
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "1",
    date: "31/05/2024",
  },
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "2",
    date: "30/05/2024",
  },
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "3",
    date: "30/05/2024",
  },
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "1",
    date: "31/05/2024",
  },
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "2",
    date: "30/05/2024",
  },
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "3",
    date: "30/05/2024",
  },
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "1",
    date: "31/05/2024",
  },
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "2",
    date: "30/05/2024",
  },
  {
    source: "Google",
    avis: "Une belle note de 0/20 totalement déqu aprés 7 ans de fidélité on mincite de partir de chezeux, les conseillerssont jamais responsable de quoique ce soit des retardset j en passe pour moic est pas du sérieux !",
    note: "3",
    date: "30/05/2024",
  },
];

const SourcesPage = () => {
  return (
    <div className="p-5">
      <div className="w-full flex lg:flex-row md:flex-row sm:flex-col flex-col">
        <div className="lg:w-1/3 md:w-1/2 sm:w-full w-full lg:pr-6 md:pr-6 sm:pr-0 pr-0">
          <h1 className="text-2xl font-semibold">Source</h1>
          <div className="mt-3">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a source" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sources</SelectLabel>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="trustpilot">TrustPilot</SelectItem>
                  <SelectItem value="playstore">Playstore</SelectItem>
                  <SelectItem value="appstore">Appstore</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="twitter">Twitter (X)</SelectItem>
                  <SelectItem value="reddit">Reddit</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="border border-dashed border-[#2e765e] rounded-2xl p-5 mt-5 h-fit">
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
        <div className="lg:w-2/3 md:w-1/2 sm:w-full w-full">
          <h1 className="text-2xl font-semibold lg:mt-0 md:mt-0 sm:mt-3 mt-3">
            Resume
          </h1>
          <div className="relative border border-transparent shadow-xl rounded-2xl p-5 mt-3">
            <h1 className="px-2">
              Avis positif: La majorité des avis (5 étoiles) louent le service
              client excellent, l&apos;efficacité et la satisfaction globale.
            </h1>
            <div className="absolute top-0 left-0 h-full w-3 bg-red-700 rounded-l-2xl"></div>
          </div>
          <div className="relative border border-transparent shadow-xl rounded-2xl p-5 mt-3">
            <h1 className="px-2">
              Un nombre significatif d&apos;avis (I étoile) mentionnent des
              problémes avec le service client, le traitement des sinistres et
              des attentes non satisfaites
            </h1>
            <div className="absolute top-0 left-0 h-full w-3 bg-red-700 rounded-l-2xl"></div>
          </div>
          <div className="relative border border-transparent shadow-xl rounded-2xl p-5 mt-3">
            <h1 className="px-2">
              Les avis intermédiaires (3 et 4 étoiles) reconnaissent des points
              positifs mais soulignent aussi des améliorations nécessaires.
            </h1>
            <div className="absolute top-0 left-0 h-full w-3 bg-red-700 rounded-l-2xl"></div>
          </div>
        </div>
      </div>

      <div className="w-full flex lg:flex-row md:flex-row sm:flex-col flex-col">
        <div className="py-5 lg:w-1/2 md:w-1/2 sm:w-full w-full">
          <h1 className="font-semibold pb-5 text-xl">
            Rating Evloution vs Reviews Evolution
          </h1>
          <div className="-ml-5 lg:-mr-0 md:-mr-0 sm:-mr-5 -mr-5">
            <SourceChart />
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full mt-5">
          <h1 className="text-2xl pb-2 font-semibold">Recommendations</h1>
          <div className="relative border border-transparent shadow-xl rounded-2xl p-5 mt-3">
            <h1 className="px-2">Réponse rapide et personnalisée</h1>
            <div className="absolute top-0 left-0 h-full w-3 bg-red-700 rounded-l-2xl"></div>
          </div>
          <div className="relative border border-transparent shadow-xl rounded-2xl p-5 mt-3">
            <h1 className="px-2">
              Suivi et fidélisation des clients mécontents
            </h1>
            <div className="absolute top-0 left-0 h-full w-3 bg-red-700 rounded-l-2xl"></div>
          </div>
          <div className="relative border border-transparent shadow-xl rounded-2xl p-5 mt-3">
            <h1 className="px-2">Réponse rapide et personnalisée</h1>
            <div className="absolute top-0 left-0 h-full w-3 bg-red-700 rounded-l-2xl"></div>
          </div>
          <div className="relative border border-transparent shadow-xl rounded-2xl p-5 mt-3">
            <h1 className="px-2">
              Suivi et fidélisation des clients mécontents
            </h1>
            <div className="absolute top-0 left-0 h-full w-3 bg-red-700 rounded-l-2xl"></div>
          </div>
        </div>
      </div>

      <div className="p-5 max-w-screen-2xl mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default SourcesPage;
