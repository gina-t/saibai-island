import Cemetery from '../assets/cemetery.jpg'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid'

export default function ImplementationPage() {
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
              <p className="text-base/7 font-semibold text-indigo-600">Saibai Island </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Cemetery
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Located west of township, occupies an area of about 500 m2 (perimeter 300 m) Represents:Connection to ancestral spirits and family lineage; Connection to Country, Land and Sea; Landscape of belonging Ailan KastomCultural identity and continuity; Family totems, symbols, storiesUnique spiritual practices and ceremonies; Tombstone Opening Respect to Elders and duty of care to the dead
              </p>
            </div>
          </div>
        </div>
          {/* image */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="fallen tombstones near a tree"
            src={Cemetery}
            className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
              <p>
                Not protected by the upgraded 2.2km seawall completed 2017 ($23.8 million) by private contractor Koppen Construction; Small concrete wall (2015, stage 1 works) & mangroves partially separate cemetery from sea; Area floods during every king tide; Continuing erosion of gravesites, wooden frames dislodged, tombstones topple or are washed away; Relatives unable to identify where ancestor’s remains lie.
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Governence and Funding
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Jurisdictional and administrative arrangements over the Torres Strait environment are complex: 3 tiers of government (local, state, commonwealth), multiple departments, agencies, research organisations

              </p>
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Torres Strait Island Regional Council.</strong> (2008): local government body for 15 island communities, promoting information, education, awareness, monitoring. TSIRC obtains funding from Commonwealth government and Queensland government. TSIRC implemented Seawalls project with significant cost overruns.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Torres Starit Regional authority</strong> (2005): leading Commonwealth representative body for Torres Strait Islanders delivering policy and planning. TSRA is coordinating authority in respect of climate change adaptation.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Torres Strait & Northern Peninsula Area Climate Resilience Centre</strong> (2022): indigenous led, integrating indigenous knowledge with science, training of local climate resilience officers
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Funding</strong> In 2025 Labor committed 36.2 million for stage 3 works of Seawalls project, $41.2 million for stage 7 of Major Infrastructure project

                  </span>
                </li>
              </ul>
              {/* <p className="mt-8">
                The traditional inhabitants of Saibai will not willingly leave their island and relinquish Ailan Kastom. The Torres Strait Island Regional Council promotes adaptive resilience and use of traditional ecological knowledge to counter the impacts of climate change.
              </p> */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Indigenous Knowledge</h2>
              <p className="mt-6">
                Important to approach infrastructure around the cemetery with sensitivity
                Consult local Elders and cultural Custodians
                Centralise and incorporate Indigenous knowledge
                The Sabai community holds deep, place-based, holistic, evolving and intergenerational knowledge systems developed over thousands of years
                How to adapt to environmental changes, manage natural resources sustainably, and build community resilience
                Bridging the gap between Indigenous knowledge and scientific research requires:
                Respectful collaboration
                Free, prior and informed consent
                Recognition of sovereignty and intellectual property rights

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
