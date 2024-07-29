import SimpleTreeMap from "@/components/charts/simple-treemap";
import StackedAreaChart from "@/components/charts/stacked-area-chart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Plus, Star } from "lucide-react";
import React from "react";

const EmotionsPage = () => {
  return (
    <div className="w-full p-5">
      <div className="mb-5">
        <div className="border border-dashed border-[#2e765e] rounded-2xl p-5 h-full">
          <div className="flex justify-between">
            <div>
              <h1 className="py-2 ml-7 font-normal text-xl">
                Evolution des emotions
              </h1>
            </div>
            <div>
              <div className="flex justify-start items-center space-x-2">
                <div className="rounded-full size-3 bg-[#2e765e]" />
                <h2 className="font-normal text-sm">Colere</h2>
              </div>
              <div className="flex justify-start items-center space-x-2">
                <div className="rounded-full size-3 bg-[#a33e60]" />
                <h2 className="font-normal text-sm">Joie</h2>
              </div>
              <div className="flex justify-start items-center space-x-2">
                <div className="rounded-full size-3 bg-[#3ea381]" />
                <h2 className="font-normal text-sm">Neutre</h2>
              </div>
              <div className="flex justify-start items-center space-x-2">
                <div className="rounded-full size-3 bg-[#9747ff]" />
                <h2 className="font-normal text-sm">Trsite</h2>
              </div>
              <div className="flex justify-start items-center space-x-2">
                <div className="rounded-full size-3 bg-[#d8b684]" />
                <h2 className="font-normal text-sm">Surprise</h2>
              </div>
            </div>
          </div>
          <Carousel className="w-full h-[350px]">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex h-[350px] items-center justify-center p-0">
                      <StackedAreaChart />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex h-[350px] items-center justify-center p-0">
                      <SimpleTreeMap />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="ml-7" />
            <CarouselNext className="mr-7" />
          </Carousel>
        </div>
        <div className="grid grid-cols-2 gap-5 p-5">
          <div className="space-y-5">
            <div className="flex space-x-2 items-center">
              <h1 className="font-bold text-xl">Sentiment: </h1>
              <p>Joie</p>
            </div>
            <div>
              <h1 className="font-bold text-xl">Sentiment General: </h1>
              <p>
                Les utilisateurs expriment une grande satisfaction et une
                expérience positive avec Direct Assurance.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-xl">Points forts mentionnés:</h1>
              <ul className="list-disc list-inside">
                <li>Rapidité et efficacité du service</li>
                <li>Amabilité et compétence des conseillers</li>
                <li>
                  Facilité d'utilisation des outils en ligne et de l'application
                  mobile
                </li>
                <li>Prix compétitifs et Offres attractives</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl">Les derniers avis: </h1>
            <div className="p-3 space-y-5 h-72 overflow-y-auto">
              <div>
                <div className="flex justify-between">
                  <div>
                    <h1 className="font-semibold">Google</h1>
                    <p className="text-muted-foreground text-sm">31/05/2024</p>
                  </div>
                  <div className="flex space-x-1 pr-10">
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star fill="blue" stroke="blue" size={20} />
                  </div>
                </div>
                <p className="mt-3 ">
                  "Une assurance simple et efficace, å l'écoute de ses clients.
                  Une équipe trés pro.."
                </p>
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="font-semibold">Author</h1>
                      <p className="text-muted-foreground text-sm">Job Role</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 pr-10">
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star size={20} />
                  </div>
                </div>
                <p className="mt-3 ">
                  "Réactivité, disponibilité, amabilité, service tip top.."
                </p>
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <h1 className="font-semibold">Google</h1>
                    <p className="text-muted-foreground text-sm">31/05/2024</p>
                  </div>
                  <div className="flex space-x-1 pr-10">
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star fill="blue" stroke="blue" size={20} />
                    <Star fill="blue" stroke="blue" size={20} />
                  </div>
                </div>
                <p className="mt-3 ">
                  "Une assurance simple et efficace, å l'écoute de ses clients.
                  Une équipe trés pro.."
                </p>
              </div>
            </div>
            <div className="text-blue-500 flex flex-col items-center justify-center mt-2">
              <Button
                variant="outline"
                className="border-blue-500 rounded-full"
              >
                <Plus size={20} />
                <h1 className="ml-2">Voir Plus</h1>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionsPage;
