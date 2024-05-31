export default function Cards() {
  return (
    <div className="bg-zinc-600 flex-1 h-screen flex flex-col items-center p-16 text-white">
      <img src="/logo.png" alt="Logo" className="h-10 mb-8" />

      <div className="mb-8">
        <h1 className="font-bold text-center text-xl">
          Bem-Vindo à PETRY TINTAS
        </h1>

        <p className="text-center text-md">
          Loja de Tintas desde 1985, atuando com marcas líderes do mercado.
        </p>
      </div>

      <div className="w-full flex flex-col gap-y-4 max-w-screen-sm">
        <a
          href="https://wa.me/555134902950?text=Ol%C3%A1%21+Cheguei+atrav%C3%A9s+do+site+petrytintas.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 flex p-4 rounded-2xl font-bold w-full justify-between  items-center"
        >
          <img
            src="/whatsapp.png"
            alt="whatsapp"
            className="h-8 mr-2 object-contain"
          />
          <span className="text-center">WhatsApp</span>
          <div></div>
        </a>

        <a
          href="https://maps.app.goo.gl/ZRYoMtNE6mWh4tsCA"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 flex p-4 rounded-2xl font-bold w-full justify-between  items-center"
        >
          <img src="/mapa.png" alt="mapa" className="h-8 mr-2 object-contain" />
          <span className="text-center">Endereço</span>
          <div></div>
        </a>

        <a
          href="https://www.instagram.com/petrytintas/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f44836] flex p-4 rounded-2xl font-bold w-full justify-between  items-center"
        >
          <img
            src="/instagram.png"
            alt="instagram"
            className="h-8 mr-2 object-contain"
          />
          <span className="text-center">Instagram</span>
          <div></div>
        </a>
        <a
          href="https://www.petrytintas.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 flex p-4 rounded-2xl font-bold w-full justify-between  items-center"
        >
          <img src="/site.png" alt="site" className="h-8 mr-2 object-contain" />
          <span className="text-center">Site</span>
          <div></div>
        </a>
      </div>
    </div>
  );
}
