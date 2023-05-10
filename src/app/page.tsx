import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
            <div className="w-3 h-3 bg-green-500 rounded-full"/>
          </div>

          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">火 | FIRE</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">地 | EARTH</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">水 | WATER</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">風 | WIND</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">空 | EMPTY</a>
            
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
        
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eve-bokurano.jpg" width={104} height={104} alt=""/>
              <strong>Bokurano</strong>
              
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eve-kakaikitan.jpg" width={104} height={104} alt=""/>
              <strong>Bokurano</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eve-smile.jpg" width={104} height={104} alt=""/>
              <strong>Bokurano</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eve-bokurano.jpg" width={104} height={104} alt=""/>
              <strong>Bokurano</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eve-kakaikitan.jpg" width={104} height={104} alt=""/>
              <strong>Bokurano</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eve-smile.jpg" width={104} height={104} alt=""/>
              <strong>Bokurano</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h1 className="font-semibold text-2xl mt-10">Made for Gabriel de Vasconcelos</h1>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image src="/eve-smile.jpg" className="w-full rounded-md" width={120} height={120} alt=""/>
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Eve, Japan</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image src="/eve-smile.jpg" className="w-full rounded-md" width={120} height={120} alt=""/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Eve, Japan</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image src="/eve-smile.jpg" className="w-full rounded-md" width={120} height={120} alt=""/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Eve, Japan</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image src="/eve-smile.jpg" className="w-full rounded-md" width={120} height={120} alt=""/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Eve, Japan</span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image src="/eve-smile.jpg" className="w-full rounded-md" width={120} height={120} alt=""/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Eve, Japan</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/eve-smile.jpg" width={56} height={56} alt=""/>
          <div className="flex flex-col">
            <strong className="font-normal hover:underline">LEO</strong>
            <span className="text-xs text-zinc-400 hover:underline">Eve</span>
          </div>
          <Heart size={16} className="text-zinc-400 hover:text-green-500" />
        </div>
        <div></div>
        <div></div>
      </footer>
    </div>
  )
}
