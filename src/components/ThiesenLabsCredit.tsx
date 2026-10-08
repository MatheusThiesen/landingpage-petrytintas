import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"] });

// Versões do símbolo aprovadas no manual da Thiesen Labs
const VARIANTS = {
  // "Sobre Grafite": traço verde, ponto cinza claro
  grafite: { main: "#1A9F5F", dot: "#ECEDEB", text: "text-[#ECEDEB]" },
  // "Negativo": tudo em branco, para fundos coloridos
  negativo: { main: "#FFFFFF", dot: "#FFFFFF", text: "text-white" },
};

export function ThiesenLabsCredit({
  variant = "grafite",
}: {
  variant?: keyof typeof VARIANTS;
}) {
  const colors = VARIANTS[variant];

  return (
    <a
      href="https://thiesenlabs.com.br/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${archivo.className} ${colors.text} flex items-center gap-[7px] text-[13px] opacity-80 hover:opacity-100 transition-opacity`}
    >
      site feito por
      <svg viewBox="0 0 100 100" aria-hidden="true" className="h-[14px] w-[14px]">
        <path
          fill={colors.main}
          d="M100 50A50 50 0 0 0 0 50V100H86V83H17V50A33 33 0 0 1 83 50Z"
        />
        <path fill={colors.dot} d="M42 58a12 12 0 1 0 24 0a12 12 0 1 0-24 0Z" />
      </svg>
      <span
        className="whitespace-nowrap leading-none"
        style={{ fontWeight: 720, fontStretch: "118%", letterSpacing: "-.02em" }}
      >
        thiesen labs
      </span>
    </a>
  );
}
