import { IoLogoInstagram } from "react-icons/io";
import { MdWhatsapp } from "react-icons/md";

export function Footer() {
  return (
    <footer className="w-full flex justify-center overflow-hidden ">
      <div className="w-full bg-zinc-500 py-16 px-4 flex justify-center items-start">
        <div className="px-6 lg:px-0 lg:flex-row max-w-screen-xl w-full h-full flex flex-col justify-between items-start ">
          <div className="mb-6" data-aos="fade-right">
            <p className="font-bold text-4xl text-white">FALE CONOSCO</p>
            <span className="text-white text-xl flex items-center">
              <MdWhatsapp color="white" className="text-3xl mr-2" /> (51)
              3490-2950
            </span>
          </div>

          <nav
            className="flex flex-col text-lg gap-y-1 mb-10"
            data-aos="fade-up"
          >
            <a className="font-light text-white" href="#SOBRE">
              SOBRE
            </a>
            <a className="font-light text-white" href="#MARCA">
              MARCA
            </a>
            <a className="font-light text-white" href="#LOCALIZAÇÃO">
              LOCALIZAÇÃO
            </a>
          </nav>

          <div className="flex flex-col mb-6">
            <span className="font-bold text-lg text-white ">
              SIGA NAS REDES SOCIAIS
            </span>

            <a
              href="https://www.instagram.com/petrytintas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg  flex"
            >
              <IoLogoInstagram color="white" className="text-3xl mr-1" />
              @petrytintas
            </a>
          </div>

          <img src="/logo.png" alt="Whatsapp" className="h-24 mb-4" />
        </div>
      </div>
    </footer>
  );
}
