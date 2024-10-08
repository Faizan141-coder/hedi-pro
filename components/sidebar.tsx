"use client";

import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

// @ts-ignore
const SidebarContext = createContext();

export default function Sidebar({ children }: any) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`min-h-screen transition-width duration-300 ${
        expanded ? "w-[300px]" : "w-[67px]"
      }`}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm overflow-y-auto">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="/hedi.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-24 ml-1.5" : "w-0"
            }`}
            alt=""
            width={10}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <ChevronFirst color="black" />
            ) : (
              <img
                src="/hedi-icon.png"
                className={`overflow-hidden transition-all w-20`}
                alt=""
                width={10}
              />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-black">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, href, alert }: any) {
  // @ts-ignore
  const { expanded } = useContext(SidebarContext);
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      onClick={() => router.push(href)}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          isActive
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {/* {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )} */}
    </li>
  );
}
