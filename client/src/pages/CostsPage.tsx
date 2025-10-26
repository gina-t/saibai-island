import Cost from '../assets/cost.png'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid'

export default function CostsPage() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-linear-115 from-[#FCFFC1]/80 from-28% via-[#41A67E]/80 via-65% to-[#1055C9]/80 sm:bg-linear-145 z-10 mix-blend-multiply pointer-events-none">
      </div>
       {/* grid overlay */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden"> */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="232931"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#232931)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      {/* </div> */}
       {/* main content */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">Flood Barriers</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Manufacturing Cost
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">The design could not be injected moulded so we consulted a Sydney company with expertise in thermofusion. Warringah Plastics in Brookvale are experienced in sheet plastic vacuum/ pressure thermoforming & fabrication, epoxy tooling, and CNC for 3D routing. Material is recycled plastic pellets, inherently one piece to provide strength and rigidity. 
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
                Cost is estimated at $99,495 for 600 units excluding GST. Factor costs for testing, interstate road freight to Queensland and sea freight to Saibai.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Samples</strong> 5 samples to be constructed at unit price of $699 for testing.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Timber Pattern</strong> Required to cast tooling.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Epoxy Tooling</strong> Production tooling cast from the initial timber pattern and required for production quantities.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Production</strong> Parts vacuum formed from 5mm Black HMWPE (starting guage).

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Testing</strong> Manly Hydraulics Laboratory provides specialist and impartial advice relating to coastal and water engineering and water flow assurance, utilising physical and numerical modelling, NATA accredited facilities and extensive data collection programs in water, sewer, stormwater, irrigation, coastal, riverine and environmental systems. MHL is a business unit within the Water Division of the Department of Climate Change, Energy, the Environment, and Water.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Transportation to Saibai</strong> Sydney to Cairns road freight estimated cost of $2,500. Cairns to Saibai by barge estimated cost of $3,500 to $5,500.
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
