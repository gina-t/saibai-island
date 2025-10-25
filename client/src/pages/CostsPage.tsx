import Cost from '../assets/cost.png'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid'

export default function CostsPage() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-linear-115 from-[#FCFFC1]/80 from-28% via-[#41A67E]/80 via-65% to-[#1055C9]/80 sm:bg-linear-145 z-10 mix-blend-multiply pointer-events-none">
      </div>
       {/* grid overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="111317"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(11317)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
       {/* main content */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">Flood Barriers</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Manufacturing Cost
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">The design could not be injected moulded so we consulted a Sydney company with expertise in thermofusion. Warringah Plastics in Brookvale are experienced in sheet plastic vacuum/ pressure thermoforming & fabrication, epoxy tooling, CNC for 3D routing. Recycled plastic pellets, inherently one piece to provide strength and rigidity.
                
              </p>
            </div>
          </div>
        </div>
          {/* image */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="spreadsheet"
            src={Cost}
            className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
              <p>
                Initial outlay is estimated at $48,000 for 600 parts + GST + delivery
                Factor interstate road freight to QLD and sea freight to Saibai

              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Samples.</strong> 

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Timber Pattern</strong> Coastal ersosion, disappearing beaches, hypersalination of mangroves and wetlands, loss of biodiversity, loss of traditional crops and community gardens.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Production</strong> 

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Epoxy Tooling</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Testing</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Transportation to Saibai</strong> 
                  </span>
                </li>
              </ul>
              {/* <p className="mt-8">
                The traditional inhabitants of Saibai will not willingly leave their island and relinquish Ailan Kastom. The Torres Strait Island Regional Council promotes adaptive resilience and use of traditional ecological knowledge to counter the impacts of climate change.
              </p> */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Thermoforming Process</h2>
              {/* YouTube Video */}
              <a 
                href="https://www.youtube.com/watch?v=OmS0Y1bqGyA"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl ring-1 ring-gray-900/10 hover:ring-indigo-600 transition-all group">
                  <img 
                    src={`https://img.youtube.com/vi/OmS0Y1bqGyA/maxresdefault.jpg`}
                    alt="Thermoforming Process Video"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Click to watch: Thermoforming manufacturing process demonstration
              </p>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
