export function Header() {
  return (
    <>
      <header className="w-screen flex flex-col justify-center ">
        <div className="w-screen bg-zinc-800 text-zinc-50 flex justify-center items-center py-2">
          <span className="font-light mr-2 text-sm">
            Compre também pelo telefone:{" "}
          </span>

          <img src="/whatsapp.png" alt="Whatsapp" className="max-h-5 mr-2" />
          <span className="font-bold text-sm">(51) 3490-2950</span>
        </div>
        <div className="bg-zinc-500 h-24 py-4 px-4 flex justify-center">
          <div className="max-w-screen-xl w-full h-full flex justify-between items-center">
            <img src="/logo.png" alt="Whatsapp" className="h-5/6" />
            <nav className="flex  gap-x-8">
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
          </div>
        </div>
        <div className="w-full h-1 flex ">
          <div className="bg-orange-600 h-full flex-1" />
          <div className="bg-yellow-400 h-full flex-1" />
          <div className="bg-green-400 h-full flex-1" />
          <div className="bg-blue-400 h-full flex-1" />
          <div className="bg-red-500 h-full flex-1" />
        </div>
      </header>

      <header
        className={`w-screen flex flex-col justify-center fixed top-0 left-0 z-[100]`}
      >
        <div className="w-screen bg-zinc-800 text-zinc-50 flex justify-center items-center py-2">
          <span className="font-light mr-2 text-sm">
            Compre também pelo telefone:{" "}
          </span>

          <img src="/whatsapp.png" alt="Whatsapp" className="max-h-5 mr-2" />
          <span className="font-bold text-sm">(51) 3490-2950</span>
        </div>
        <div className="bg-zinc-500 h-24 py-4 px-4 flex justify-center">
          <div className="max-w-screen-xl w-full h-full flex justify-between items-center">
            <img src="/logo.png" alt="Whatsapp" className="h-5/6" />
            <nav className="flex  gap-x-8">
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
          </div>
        </div>
        <div className="w-full h-1 flex ">
          <div className="bg-orange-600 h-full flex-1" />
          <div className="bg-yellow-400 h-full flex-1" />
          <div className="bg-green-400 h-full flex-1" />
          <div className="bg-blue-400 h-full flex-1" />
          <div className="bg-red-500 h-full flex-1" />
        </div>
      </header>
    </>
  );
}
