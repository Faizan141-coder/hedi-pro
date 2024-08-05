import SimpleTreeMap from "@/components/charts/simple-treemap";
import React from "react";

const EvolutionPage = () => {
  return (
    <div>
      <div className="px-5">
        <h1 className="pt-5 ml-7 font-bold text-lg text-center">
          2023 - 2024
        </h1>
        <div className="grid grid-cols-2 gap-5 p-5">
          <div>
            <SimpleTreeMap />
          </div>
          <div>
            <SimpleTreeMap />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 p-5">
        <div className="broder border-transparent shadow-xl rounded-2xl p-5">
          <div className="flex space-x-2 items-center justify-center">
            <div>
              <div className="flex justify-between">
                <h1 className="font-semibold">Nb des notes: </h1>
                <p className="ml-5">7601</p>
              </div>
              <div className="flex justify-between">
                <h1 className="font-semibold">Note moyenne: </h1>
                <p className="ml-5">3.6</p>
              </div>
              <div className="flex justify-between">
                <h1 className="font-semibold">Response: </h1>
                <p className="ml-5">10%</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-muted-foreground text-sm">
              GESTION DES SINISTRES
            </h2>
            <div className="mt-2">
              <label className="flex items-center">
                <input type="radio" name="gestion_sinistres" className="mr-2" />
                <h1>
                  Les clients se plaignent fréquemment de sinistres non résolus
                  ou mal gérés.
                </h1>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gestion_sinistres" className="mr-2" />
                <h1>
                  Accusations récurrentes de mauvaise foi et de manque de
                  transparence dans le traitement des dossiers.
                </h1>
              </label>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-muted-foreground text-sm">SUPPORT CLIENT</h2>
            <div className="mt-2">
              <label className="flex items-center">
                <input type="radio" name="support_client" className="mr-2" />
                <h1>
                  Difficultés rapportées dans la communication et le suivi des
                  réclamations.
                </h1>
              </label>
              <label className="flex items-center">
                <input type="radio" name="support_client" className="mr-2" />
                <h1>
                  Des avis négatifs concernant la qualité du support client, en
                  particulier pour les clients de longue date.
                </h1>
              </label>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-muted-foreground text-sm">
              PRIX ET FACTURATION
            </h2>
            <div className="mt-2">
              <label className="flex items-center">
                <input type="radio" name="prix_facturation" className="mr-2" />
                <h1>Problèmes de transparence sur les tarifs.</h1>
              </label>
              <label className="flex items-center">
                <input type="radio" name="prix_facturation" className="mr-2" />
                <h1>Difficultés avec la facturation et les remboursements.</h1>
              </label>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-muted-foreground text-sm">
              MARKETING ET VENTE
            </h2>
            <div className="mt-2">
              <label className="flex items-center">
                <input type="radio" name="marketing_vente" className="mr-2" />
                <h1>Marketing perçu comme trompeur par certains clients.</h1>
              </label>
              <label className="flex items-center">
                <input type="radio" name="marketing_vente" className="mr-2" />
                <h1>Promesses non tenues dans les publicités.</h1>
              </label>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-muted-foreground text-sm">TECH ET ASSURANCE</h2>
            <div className="mt-2">
              <label className="flex items-center">
                <input type="radio" name="tech_assurance" className="mr-2" />
                <h1>
                  Problèmes techniques fréquents avec les plateformes en ligne.
                </h1>
              </label>
              <label className="flex items-center">
                <input type="radio" name="tech_assurance" className="mr-2" />
                <h1>Interface utilisateur peu conviviale.</h1>
              </label>
            </div>
          </div>
        </div>
        <div className="broder border-transparent shadow-xl rounded-2xl p-5">
          <div className="flex space-x-2 items-center justify-center">
            <div>
              <div className="flex justify-between">
                <h1 className="font-semibold">Nb des notes: </h1>
                <p className="ml-5">3010</p>
              </div>
              <div className="flex justify-between">
                <h1 className="font-semibold">Note moyenne: </h1>
                <p className="ml-5">4.1</p>
              </div>
              <div className="flex justify-between">
                <h1 className="font-semibold">Response: </h1>
                <p className="ml-5">33%</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-muted-foreground text-sm">
              GESTION DES SINISTRES
            </h2>
            <div className="mt-2">
              <label className="flex items-center">
                <input type="radio" name="gestion_sinistres" className="mr-2" />
                <h1>
                  Les clients signalent des attentes prolongées pour la gestion
                  des sinistres.
                </h1>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gestion_sinistres" className="mr-2" />
                <h1>
                  Les avis positifs soulignent la compétence et l&apos;écoute des
                  conseillers.
                </h1>
              </label>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-muted-foreground text-sm">SUPPORT CLIENT</h2>
            <div className="mt-2">
              <label className="flex items-center">
                <input type="radio" name="support_client" className="mr-2" />
                <h1>
                  La majorité des avis positifs mettent en avant la qualité et
                  la compétence du support client.
                </h1>
              </label>
              <label className="flex items-center">
                <input type="radio" name="support_client" className="mr-2" />
                <h1>Les clients mentionnent des temps d&apos;attente prolongés.</h1>
              </label>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-muted-foreground text-sm">
              PRIX ET FACTURATION
            </h2>
            <div className="mt-2">
              <label className="flex items-center">
                <input type="radio" name="prix_facturation" className="mr-2" />
                <h1>
                  Quelques plaintes concernant des augmentations de tarifs.
                </h1>
              </label>
              <label className="flex items-center">
                <input type="radio" name="prix_facturation" className="mr-2" />
                <h1>
                  Généralement perqu comme transparent et équitable en termes de
                  tarification.
                </h1>
              </label>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-muted-foreground text-sm">
              MARKETING ET VENTE
            </h2>
            <div className="mt-2">
              <label className="flex items-center">
                <input type="radio" name="marketing_vente" className="mr-2" />
                <h1>
                  Perception généralement positive de la transparence dans les
                  communications.
                </h1>
              </label>
              <label className="flex items-center">
                <input type="radio" name="marketing_vente" className="mr-2" />
                <h1>
                  Quelques critiques sur le manque d&apos;informations détaillées
                  dans les communications.
                </h1>
              </label>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-muted-foreground text-sm">TECH ET ASSURANCE</h2>
            <div className="mt-2">
              <label className="flex items-center">
                <input type="radio" name="tech_assurance" className="mr-2" />
                <h1>
                  Quelques problémes signalés avec les applications mobiles.
                </h1>
              </label>
              <label className="flex items-center">
                <input type="radio" name="tech_assurance" className="mr-2" />
                <h1>
                  Perception généralement positive de la technologie et des
                  services numériques.
                </h1>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionPage;
