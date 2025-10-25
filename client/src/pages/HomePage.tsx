import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import Hero from '../assets/hero.png'


export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent">
      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-linear-115 from-[#FCFFC1]/80 from-28% via-[#41A67E]/80 via-65% to-[#1055C9]/80 sm:bg-linear-145 z-10 mix-blend-multiply pointer-events-none">
      </div>
      {/* grid overlay */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="2357"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#2357)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      {/* main content- links above */}
      <div className="mx-auto w-full px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link to="/saibai" className="inline-flex space-x-6">
              <span className="rounded-2xl bg-indigo-50 px-3.5 py-2 text-sm/6 font-semibold text-indigo-600 shadow-xs ring-1 ring-indigo-600/20 ring-inset  hover:bg-indigo-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Climate Change and Saibai Island
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-indigo-600">
                <span>Design Solution</span>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 text-gray-400"
                />
              </span>
            </Link>
          </div>
          {/* main content- heading */}
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
            Temporary Flood Mitigation Solutions for Saibai
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Saibai Island in the Torres Strait is bearing the brunt of climate change.
          </p>
          {/* main content- links below */}
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/implementation"
              className="rounded-2xl bg-indigo-50 px-3.5 py-2 text-sm/6 font-semibold text-indigo-600 shadow-xs ring-1 ring-indigo-600/20 ring-inset hover:bg-indigo-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Proposed Implementation
            </Link>
            <Link to="/costs" className="flex items-center text-sm/6 font-semibold text-gray-900">
              Cost Analysis  <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400" />
            </Link>
          </div>
          {/* Acknowledgment */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm italic text-gray-700 leading-relaxed">
            We acknowledge that Aboriginal and Torres Strait Islander people maintain a unique, continuing and profound spiritual and cultural connection to land and sea, and practice language, lore and culture which enriches our lives and identity as a nation.
          </p>
        </div>
        </div>
        
        {/* hero image */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt="aerial view Saibai Island"
                src={Hero}
                width={2432}
                height={1442}
                className="w-204 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10 opacity-80"
              />
            </div>
          </div>
        </div>   
      </div> 
    </div>
  );
}
