import Seawall from '../assets/seawall.png'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid'

export default function SaibaiPage() {
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
              <p className="text-base/7 font-semibold text-indigo-600">Torres Strait</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Saibai Island
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Saibai island is an alluvial island formed from sediments of the Fly River, situated in the north-west of the Torres Strait, approximately 4km from the coast of Papua New Guinea. The original inhabitants of Saibai are the Koeybuway and Moegibuway peoples and are acknowledged as the Traditional Owners of Saibai. Their history spans thousands of years. The traditional owners of Saibai hold deep ecological knowledge and noted climate change prior to scientific evidence. The average land height of Saibai is 1 metre, rendering it particularly susceptible to climate change and rising sea levels. The township of Saibai, located at the northwest coast of the island occupies a narrow strip of comparatively higher ground, 1.7m above sea level, between the sea and wetlands. 

              </p>
            </div>
          </div>
        </div>
          {/* image */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="armour rock"
            src={Seawall}
            className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
              <p>
                Saibai Island is currently being submerged by rising sea levels. The 2.1 km long armour rock and concrete wave return wall, the upgrade of which was completed in 2017 following spiralling costs, is regulary being inundated during the monsoon season. Every king tide is breaching the seawall. The impacts are unprecendented. 
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Social.</strong> In October 2021, Guy Paul Kabai of Saibai Island and Pabai Pabai of Boigu filed a landmark case to the Federal Court of Australia, arguing that the Australian Government breached its duty of care to protect Torres Strait Islanders and their traditional way of life (Ailan Kastom) from the impacts of climate change. The applicants further sought orders requiring the Australian Government to implement measures to reduce greenhouse gas emissions to protect the land and marine environment of the Torres Strait Islands. Federal court Justice Michael Wigney delivered his judgement in July 2025, and in a devastating blow dismissed the case, largely because the common law of negligence “was not a suitable legal vehicle” to argue the impacts of climate change to the Torres Strait Islands. Wigney suggested that for a climate case such as the one brought by the Torres Strait Islands to succeed, current law will need to be changed. Paul Kabai was utterly dismayed by the decision and described being “in the deepest pain imaginable.”

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Environmental.</strong> Rising sea levels, coastal erosion, increased frequency of cyclones, disappearing beaches, hypersalination of mangroves and wetlands, loss of biodiversity, loss of fauna and flora species, loss of traditional crops and community gardens.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Cultural.</strong> The Saibai cemetery is a particularly important place for the community. In addition there are various sacred sites, where cultural ceremonies, including initiation ceremonies, were traditionally conducted that can no longer be visited due to rising sea levels and inundation of swamps. 

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Economic.</strong> The Saibai community is characterised by lower income, assets and housing, according to the Australian Bureau of Statistics (2016 census). There is an average of 5 people in every household, with a median weekly household income	of $1,024. The median age is 16 years, and the highest level of educational attainment is year 12 (22.6%). Employment statistics are as follows:
                    <ul>
                      <li>22.7% work full time</li>
                      <li>40.9% work part-time</li>
                      <li>36.4% are unemployed</li>
                    </ul>
                    In terms of occupations, 28.2% are labourers, 25.6% are community workers and 15.4% are clerical and administartive workers. The types of indistries for employment are LGA, housing construction, primary educations and hospitals.
                    Transport to and from the island requires air or sea transport. Shipping infrastructure and machinery to the island is expensive.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                The traditional inhabitants of Saibai will not willingly leave their island and relinquish Ailan Kastom. The Torres Strait Island Regional Council promotes adaptive resilience and use of traditional ecological knowledge to counter the impacts of climate change.
              </p>
              {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
