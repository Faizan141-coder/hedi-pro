import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar, { SidebarItem } from "@/components/sidebar";
import {
  BarChart3,
  Boxes,
  ChevronFirst,
  LayoutDashboard,
  LifeBuoy,
  MoreVertical,
  Package,
  Receipt,
  Settings,
  UserCircle,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hedi Pro",
  description: "Hedi Pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-white flex">
          <div className="text-black flex">
            <Sidebar>
              <SidebarItem
                icon={<LayoutDashboard size={20} />}
                text="Dashboard"
                href="/"
              />
              <SidebarItem
                icon={<UserCircle size={20} />}
                text="Emotions"
                href="/emotions"
              />
              <SidebarItem
                icon={<Boxes size={20} />}
                text="Thematiques"
                href="/thematiques"
              />
              <SidebarItem
                icon={<Package size={20} />}
                text="Conccurents"
                href="/conccurents"
              />
              <SidebarItem
                icon={<Receipt size={20} />}
                text="Sources"
                href="/sources"
              />
              <SidebarItem
                icon={<Settings size={20} />}
                text="Evolution"
                href="/evolution"
              />
            </Sidebar>
          </div>
          <div className="flex-1 overflow-y-auto text-black">{children}</div>
        </main>
      </body>
    </html>
  );
}
