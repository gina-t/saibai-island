import Resilience from '../assets/resilience.png'

export default function StakeHoldersPage() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-linear-115 from-[#FCFFC1]/80 from-28% via-[#41A67E]/80 via-65% to-[#1055C9]/80 sm:bg-linear-145 z-10 mix-blend-multiply pointer-events-none"></div>
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
              <p className="text-base/7 font-semibold text-indigo-600">Stakeholders</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Climate Change Officers and Rangers
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Climate change officers are currently being trained by the Torres Strait & Northern Peninsula Area Climate Resilience Centre. We suggest that these officers will be the primary stakeholders for implementing our design solution.
              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="resilience"
            src={Resilience}
            className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
              <p>
                They bring: • Technical training in climate adaptation strategies • Understanding of local environmental conditions and weather patterns • Coordination skills for emergency response and community engagement • Knowledge of available resources and regional support networks • Capacity to monitor weather forecasts and trigger deployment protocols
              </p>
              <p className="mt-8">
                Rangers play a critical support role in flood mitigation efforts through their deep local knowledge, physical capability, and community trust. They provide: • Intimate knowledge of the island's geography, vulnerable areas, and access routes • Physical workforce for deploying and removing flood barriers • Strong community relationships ensuring cultural safety and cooperation • Experience with practical logistics and equipment management in remote settings • On-ground presence for rapid response when flooding is imminent
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Why these stakeholders matter</h2>
              <p className="mt-6">
                Unlike traditional infrastructure projects where stakeholders might be government agencies or contractors, temporary flood mitigation requires local implementation partners who can respond quickly to weather events. Climate officers and rangers are ideal stakeholders because they:
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
                    Understand cultural protocols, sacred sites, and community concerns that external teams might overlook
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
