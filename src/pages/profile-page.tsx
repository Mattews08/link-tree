import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, UtensilsCrossed } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yPpBI6Rnu1VcYqslsCe8Ii8wLOfDDG.png')] bg-cover bg-bottom flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
        <Image
          src="/placeholder.svg?height=80&width=80"
          alt="Mindy Frauke"
          width={80}
          height={80}
          className="rounded-full border-4 border-white mb-2 shadow-md"
        />
        <h1 className="text-xl font-semibold text-gray-800 mb-1">Mindy Frauke</h1>
        <p className="text-sm text-gray-600 mb-6">Fashion advice from yours truly</p>
        
        <div className="w-full space-y-3">
          <Button 
            className="w-full bg-white text-black hover:bg-gray-100 flex items-center px-4 py-3 rounded-xl relative shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
            variant="ghost"
          >
            <Instagram className="h-6 w-6 absolute left-4 text-[#E4405F]" />
            <span className="flex-grow text-center">Instagram</span>
          </Button>
          <Button 
            className="w-full bg-white text-black hover:bg-gray-100 flex items-center px-4 py-3 rounded-xl relative shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
            variant="ghost"
          >
            <MessageCircle className="h-6 w-6 absolute left-4 text-[#25D366]" />
            <span className="flex-grow text-center">WhatsApp</span>
          </Button>
          <Button 
            className="w-full bg-white text-black hover:bg-gray-100 flex items-center px-4 py-3 rounded-xl relative shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
            variant="ghost"
          >
            <UtensilsCrossed className="h-6 w-6 absolute left-4 text-[#EA1D2C]" />
            <span className="flex-grow text-center">iFood</span>
          </Button>
        </div>
      </div>
    </div>
  )
}