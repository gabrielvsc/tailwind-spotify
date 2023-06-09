import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import PlaylistRectangularView from '@/components/playlistrectangularview/playlistRectangularView';
import PlaylistSquareView from '@/components/playlistsquareview/playlistSquareView';

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
            <PlaylistRectangularView imageSrc="lost-in-japan.png" title="東京 | Lost in Japan" />
            <PlaylistRectangularView imageSrc="fire.png" title="火 | FIRE" />
            <PlaylistRectangularView imageSrc="earth.png" title="地 | EARTH" />
            <PlaylistRectangularView imageSrc="water.png" title="水 | WATER" />
            <PlaylistRectangularView imageSrc="wind.png" title="風 | WIND" />
            <PlaylistRectangularView imageSrc="empty.png" title="空 | EMPTY" />
          </div>

          <div className="flex items-center justify-between mt-10">
            <h1 className="font-semibold text-2xl hover:underline">Made for Gabriel de Vasconcelos</h1>
            <strong className="text-zinc-400 hover:underline">Show All</strong>
          </div>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <PlaylistSquareView imageSrc='playlistImage.png' title='I&#x27;m kind of into it' author='Pop Music' />
            <PlaylistSquareView imageSrc='playlistImage.png' title='Teach me to love just to let me go' author='Sad Songs' />
            <PlaylistSquareView imageSrc='playlistImage.png' title='God&#x27;s Voice' author='Perfect Voices' />
            <PlaylistSquareView imageSrc='playlistImage.png' title='↓AnimeOP&ED' author='Openings & Endings' />
            <PlaylistSquareView imageSrc='playlistImage.png' title='愰' author='My Essence' />
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/eve-smile.jpg" width={56} height={56} alt=""/>
          <div className="flex flex-col">
            <strong className="font-normal hover:underline">LEO</strong>
            <span className="text-xs text-zinc-400 hover:underline hover:text-white">Eve</span>
          </div>
          <Heart size={16} className="text-zinc-400 hover:text-green-500" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-300 hover:text-white"/>
            <SkipBack size={20} className="text-zinc-300 hover:text-white"/>
          
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size={20} className="text-zinc-300 hover:text-white"/>
            <Repeat size={20} className="text-zinc-300 hover:text-white"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">3:31</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20} className="text-zinc-300 hover:text-white"/>
          <LayoutList size={20} className="text-zinc-300 hover:text-white"/>
          <Laptop2 size={20} className="text-zinc-300 hover:text-white"/>
          <div className="flex items-center gap-2">
            <Volume size={20} className="text-zinc-300 hover:text-white"/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  )
}
