import Resilience from '../assets/resilience.png'

export default function StakeHoldersPage() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-linear-115 from-[#FCFFC1]/80 from-28% via-[#41A67E]/80 via-65% to-[#1055C9]/80 sm:bg-linear-145 z-10 mix-blend-multiply pointer-events-none"></div>
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
              id="313741"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#313741)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      {/* </div> */}
      {/* main content */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">Stakeholders</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Climate Resilience Officers and Rangers
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Climate resilience officers are currently being recruited and trained by the Torres Strait & Northern Peninsula Area Climate Resilience Centre. These officers will lead practical climate adaptation projects. We suggest that these officers will be the primary stakeholders for implementing our design solution, in addition to local rangers.
              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="mt-0 ml-0 p-6 sm:-mt-12 sm:-ml-12 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <figure>
            <img
              alt="Torres Strait Regional Resilience Framework Conceptual Diagram"
              src={Resilience}
              className="w-full sm:w-3xl md:w-204 max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 object-cover object-right"
            />
            <figcaption className="mt-8 text-sm text-gray-500 italic">
              <span className="font-semibold not-italic text-gray-700 mr-2">
                Figure 6.
              </span>
              Torres Strait Regional Resilience Framework Conceptual Diagram. From <cite>Torres Strait Regional Adaptation and Resilience Plan 2025-2030</cite>, by Torres Strait Regional Authority, 2025 (
              <a 
                href="https://www.tsra.gov.au/wp-content/uploads/2025/03/TSRA-Regional-Adaptation-Plan-WEB-120325.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500 underline not-italic"
              >
                https://www.tsra.gov.au/wp-content/uploads/2025/03/TSRA-Regional-Adaptation-Plan-WEB-120325.pdf
              </a>
              ).
            </figcaption>
          </figure>  
        </div>
         {/* main content */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
              Climate Resilience Officers
              </h2>
              <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                <li className='ml-2'>Technical training in climate adaptation strategies</li>
                <li className='ml-2'>Understanding of local environmental conditions and weather patterns</li>
                <li className='ml-2'>Coordination skills for emergency response and community engagement</li>
                <li className='ml-2'>Knowledge of available resources and regional support networks</li>
                <li className='ml-2'>Capacity to monitor weather forecasts and trigger deployment protocols</li>
              </ul>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">Mura Buway Rangers</h2>
              <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                <li className='ml-2'>Intimate knowledge of the island’s geography, vulnerable areas, and access routes for targeted deployment.</li>
                <li className='ml-2'>Physical workforce for rapid installation, adjustment and removal of flood barriers during high-risk events</li>
                <li className='ml-2'>Strong community relationships that ensure culturally safe engagement and cooperation.</li>
              </ul>
              
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Why These Stakeholders Matter</h2>
              <p className="mt-6">
                Unlike traditional infrastructure projects where stakeholders might be government agencies or contractors, temporary flood mitigation requires local implementation partners who can respond quickly to weather events. Climate resilience officers and rangers are ideal stakeholders:
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Deployment Capability
                  </h4>
                  <p className="mt-2 text-sm/6">
                    Can mobilize within hours when flooding is forecast, installing barriers where most needed based on real-time conditions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Cultural Sensitivity
                  </h4>
                  <p className="mt-2 text-sm/6">
                    Understand cultural protocols, sacred sites, and community concerns
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Long-term Maintenance
                  </h4>
                  <p className="mt-2 text-sm/6">
                    Will store, inspect, and maintain equipment between flood events, ensuring readiness and longevity
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Sustainability
                  </h4>
                  <p className="mt-2 text-sm/6">
                    Build local capacity and self-reliance rather than creating dependency on external experts or contractors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
