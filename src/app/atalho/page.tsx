import { IoLogoInstagram } from "react-icons/io";
import { IoChevronForward, IoLocationSharp } from "react-icons/io5";
import { MdLanguage, MdWhatsapp, MdWork } from "react-icons/md";

import { ThiesenLabsCredit } from "@/components/ThiesenLabsCredit";

const links = [
  {
    href: "https://wa.me/555134902950?text=Ol%C3%A1%21+Cheguei+atrav%C3%A9s+do+site+petrytintas.com.br",
    icon: <MdWhatsapp className="text-xl" />,
    label: "WhatsApp",
    iconColor: "text-green-500",
  },
  {
    href: "https://maps.app.goo.gl/ZRYoMtNE6mWh4tsCA",
    icon: <IoLocationSharp className="text-xl" />,
    label: "Matriz — Av. Dorival C. L. de Oliveira, 8018",
    iconColor: "text-zinc-500",
  },
  {
    href: "https://maps.google.com/maps?q=Av.+Ely+Corrêa,+5564,+Parque+do+Itatiaia,+Gravataí,+RS",
    icon: <IoLocationSharp className="text-xl" />,
    label: "Filial — Av. Ely Corrêa, 5564",
    iconColor: "text-zinc-500",
  },
  {
    href: "https://www.instagram.com/petrytintas/",
    icon: <IoLogoInstagram className="text-xl" />,
    label: "Instagram",
    iconColor: "text-pink-500",
  },
  {
    href: "https://www.petrytintas.com.br/",
    icon: <MdLanguage className="text-xl" />,
    label: "Site",
    iconColor: "text-blue-500",
  },
  {
    href: "https://www.petrytintas.com.br/trabalhe-conosco",
    icon: <MdWork className="text-xl" />,
    label: "Trabalhe conosco",
    iconColor: "text-zinc-500",
  },
];

export default function Atalho() {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-6 py-14 text-white"
      style={{ backgroundColor: "#71717a" }}
    >
      <img src="/logo.png" alt="Petry Tintas" className="h-28 mb-6" />

      <div className="mb-10 text-center">
        <h1 className="font-bold text-lg tracking-wide text-white">
          PETRY TINTAS
        </h1>
        <p className="text-white/60 text-sm mt-1">Loja de Tintas desde 1985</p>
      </div>

      <div className="w-full flex flex-col gap-3 max-w-sm">
        {links.map(({ href, icon, label, iconColor }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-white hover:bg-zinc-100 transition-colors duration-200"
          >
            <span className={`${iconColor} w-6`}>{icon}</span>
            <span className="flex-1 text-center text-sm font-medium text-zinc-800">
              {label}
            </span>
            <IoChevronForward className="text-zinc-400 text-sm" />
          </a>
        ))}
      </div>

      <p className="text-white/30 text-xs mt-12">petrytintas.com.br</p>

      <div className="mt-auto pt-10">
        <ThiesenLabsCredit variant="negativo" />
      </div>
    </div>
  );
}
