import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DataTable } from "@/app/sources/components/data-table";
import { columns } from "@/app/sources/components/columns";

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

export function DialogTable() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">See More</Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-xl max-h-[90vh] overflow-y-auto hide-scrollbar">
        <DataTable columns={columns} data={data} />
      </DialogContent>
    </Dialog>
  );
}
