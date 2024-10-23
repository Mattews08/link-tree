import { Button } from "@/components/ui/button";
import { Instagram, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

export default function Component() {
  return (
    <div className="min-h-screen bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yPpBI6Rnu1VcYqslsCe8Ii8wLOfDDG.png')] bg-cover bg-bottom flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
        <Image
          src="/logo.JPG"
          alt="Mindy Frauke"
          width={80}
          height={80}
          className="rounded-full border-4 border-white mb-2 shadow-md"
        />
        <h1 className="text-xl font-semibold text-gray-800 mb-1">
          Memórias de Ana
        </h1>

        <div className="w-full space-y-3 mt-5">
          <a href="https://wa.me/5592984512933?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido.">
            <Button
              className="w-full bg-white text-black hover:bg-gray-100 flex items-center px-4 py-3 rounded-xl relative shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
              variant="ghost"
            >
              <BsWhatsapp className="h-6 w-6 absolute left-4 text-[#25D366]" />
              <span className="flex-grow text-center">WhatsApp</span>
            </Button>
          </a>

          <a href="https://www.ifood.com.br/delivery/manaus-am/memorias-de-ana-coroado/4bbbe952-1550-41ed-b52a-5467c4a7d1be?UTM_Medium=share">
            <Button
              className="w-full bg-white text-black hover:bg-gray-100 flex items-center px-4 py-3 rounded-xl relative shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
              variant="ghost"
            >
              <UtensilsCrossed className="h-6 w-6 absolute left-4 text-[#EA1D2C]" />
              <span className="flex-grow text-center">iFood</span>
            </Button>
          </a>

          <Button
            className="w-full bg-white text-black hover:bg-gray-100 flex items-center px-4 py-3 rounded-xl relative shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
            variant="ghost"
          >
            <Instagram className="h-6 w-6 absolute left-4 text-[#E4405F]" />
            <span className="flex-grow text-center">Instagram</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
