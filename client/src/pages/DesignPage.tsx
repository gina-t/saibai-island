import Solution from '../assets/solution.png'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid'

export default function DesignPage() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-linear-115 from-[#FCFFC1]/80 from-28% via-[#41A67E]/80 via-60% to-[#1055C9]/80 sm:bg-linear-145 z-10 mix-blend-multiply pointer-events-none">
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
              id="111317"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#111317)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      {/* </div> */}
       {/* main content */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">
                Design Opportunity 3.2
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                EWB Challenge 2025
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                "Consider durable, rapidly deployable designs that provide short-term protection against flooding, particularly during extreme weather events, storm surges, or seasonal high tides. These could be particularly useful in areas such as the south eastern portion of the township or the culturally sensitive cemetery."
              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="mt-0 ml-0 p-6 sm:-mt-12 sm:-ml-12 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="technical drawing"
            src={Solution}
            className="w-full sm:w-3xl md:w-204 max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 object-cover object-right"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
              <p>
                Utilising a decision matrix, we identified the primary goals of our solution in terms of affordability, durability, adaptability, simplicity, rapid deployment, and ease of maintenance. Temporary and demountable flood barriers was ranked first, and we proceeded with our own design for an L-shaped flood barrier using CAD.  
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Design Features</strong> 
                    <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                      <li ml-2>Handle for portability</li>
                      <li ml-2>Interlocking mechanism to create barriers of varying lengths</li>
                      <li ml-2>Baffles to redirect water flow, increase surface area, and provide structural reinforcement</li>
                      <li ml-2>Can be stacked and stored in council facility </li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Manufacture and Material</strong>
                    <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                      <li ml-2>Thermoforming process that converts sheet plastics into 3 dimensional shapes</li>
                      <li ml-2>Recycled plastic pellets</li>
                      <li ml-2>Ultraviolet resistant</li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Dimensions of L-shaped Barrier</strong> 
                    <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                      <li>Overall module height: 1,050 mm (nominal)</li>
                      <li>Module width: 500 mm</li>
                      <li>Module depth (footprint): 805 mm</li>
                      <li>Wall thickness: 5 mm (nominal)</li>
                    </ul>
                  </span>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
