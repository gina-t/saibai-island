import Seawall from '../assets/seawall.png';
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid';

export default function SaibaiPage() {
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
            id="2357"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#2357)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      {/* </div> */}
      {/* main content */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">
                Torres Strait
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Saibai Island
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Saibai island is an alluvial mud island formed by the accumulated sediments of the
                Fly River, situated in the north-west of the Torres Strait, and approximately 4km from the coast of Papua New Guinea. The original inhabitants of Saibai are the Koeybuway and Moegibuway peoples, settling there thousands of years ago, and are acknowledged as the Traditional Owners of Saibai. The Traditional Owners abide by Ailan Kastom, the traditional knowledge, practices, and laws that govern daily life and the use and ownership of lands and waters.
               </p>  
               <p className="mt-6 text-xl/8 text-gray-700">
                The average land height of Saibai is 1 metre, rendering it particularly
                susceptible to climate change and rising sea levels. The
                township of Saibai, located at the northwest coast of the island
                occupies a narrow strip of comparatively higher ground, 1.7m
                above sea level, between the sea and wetlands.  
               </p> 
            </div>
          </div>
        </div>
        {/* image */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <figure>
            <img
              alt="Armour rock seawall protecting Saibai Island township"
              src={Seawall}
              className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            />
            <figcaption className="mt-8 text-sm text-gray-500 italic">
              <span className="font-semibold not-italic text-gray-700 mr-2">
                Figure 2.
              </span>
              Armour rock seawall on Saibai Island. From <cite>Saibai Island Sea Wall and Bund Wall</cite>, by Koppens, 2018. (
              <a 
                href="https://www.koppens.com.au/2018/03/06/saibai-island-sea-wall-and-bund-wall/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500 underline not-italic"
              >
                https://www.koppens.com.au/2018/03/06/saibai-island-sea-wall-and-bund-wall/
              </a>
              ).
            </figcaption>
          </figure>
        </div>
         {/* main content */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
              <p>
                Saibai Island is currently being submerged by rising sea levels.
                The 2.2 km long armour rock and concrete wave return wall, the
                upgrade of which was completed in 2017 following spiralling
                costs, is regulary breached during the monsoon season. We
                assessed the impacts of climate change within social,
                environmental, cultural and economic contexts.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Social.
                    </strong>{' '}
                    In October 2021, Guy Paul Kabai of Saibai Island and Pabai
                    Pabai of Boigu filed a landmark case to the Federal Court of
                    Australia, arguing that the Australian Government breached
                    its duty of care to protect Torres Strait Islanders and
                    their traditional way of life (Ailan Kastom) from the
                    impacts of climate change. The applicants further sought
                    orders requiring the Australian Government to implement
                    measures to reduce greenhouse gas emissions to protect the
                    land and marine environment of the Torres Strait Islands.
                    Federal court Justice Michael Wigney delivered his judgement
                    in July 2025, and in a devastating blow dismissed the case,
                    largely because the common law of negligence “was not a
                    suitable legal vehicle” to argue the impacts of climate
                    change to the Torres Strait Islands. Wigney suggested that
                    for a climate case such as the one brought by the Torres
                    Strait Islands to succeed, current law will need to be
                    changed. Paul Kabai was utterly dismayed by the decision and
                    described being “in the deepest pain imaginable.”
                    <p className='mt-2'>
                    The Saibai community is characterised by lower income and 
                    educational attainment, higher rented dwellings, and higher morbidities, according to the Australian Bureau of Statistics (2016 census).{' '}
                    <a 
                      href="https://www.abs.gov.au/census/find-census-data/quickstats/2016/ILOC30700203" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      https://www.abs.gov.au/census/find-census-data/quickstats/2016/ILOC30700203
                    </a>
                    .
                    
                    There is an average of 5 people in
                    every household, with a median weekly household income of
                    $1,024. The median age is 16 years, and the highest level of
                    educational attainment is year 12 (22.6%). Employment
                    statistics are:
                    <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                      <li className='ml-2'>22.7% work full time</li>
                      <li className='ml-2'>40.9% work part-time</li>
                      <li className='ml-2'>36.4% are unemployed</li>
                    </ul>
                    In terms of occupations: 
                    <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                      <li className='ml-2'>28.2% are labourers</li>
                      <li className='ml-2'>25.6% are community workers</li>
                      <li className='ml-2'>15.4% are clerical and administrative
                      workers</li>
                    </ul>
                    The types of industries for employment are LGA,
                    housing construction, primary educations and hospitals.
                    </p> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Environmental.
                    </strong>{' '}
                    The environmental impacts of climate change are characterised by:
                    <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                      <li className="ml-2">Rising sea levels. Sea levels in the region are increasing at a rate of around 6mm per year, compared with the global average of 4.4mm per year, and will continue
                      to rise into the future.
                      </li>
                      <li className="ml-2">Ocean acidification (drop in pH), rising marine temperatures, coral reef bleaching</li>
                      <li className="ml-2">Coastal erosion and inundation</li>
                      <li className="ml-2">Hypersalination of mangroves and tidal wetlands</li>
                      <li className="ml-2">Increased intensity tropical cyclones</li>
                      <li className="ml-2">Increased average temperatures and heatwaves. It is likely that in the Torres Strait days over 35 degrees will increase by around 39 days a year by 2090.</li>
                      <li className="ml-2">Seasonal rainfall variability, with intense short bursts exacerbating flooding, longer dry seasons. Seasonal variability disrupts traditional knowledge systems.</li>
                      <li className="ml-2">Increase in vector transmitted diseases</li>
                      <li className="ml-2">Loss of biodiversity, for eg. coral reefs, seagrass meadows and turtles</li>
                      <li className="ml-2">Loss of traditional crops (taro, cassava, yam, sweet potato, pumpkin, sugar cane and bananas) and community gardens due to salination</li>
                      <li className="ml-2">Disruption to water security and fresh water avaialability</li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Cultural.
                    </strong>{' '}
                    Ailan Kastom encompasses:
                    <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                      <li className='ml-2'>Connection to Country (land and sea)</li>
                      <li className='ml-2'>Participation in cultural ceremonies</li>
                      <li className='ml-2'>Use of plants and animals of the Torres Strait for food, medicine and cultural ceremony</li>
                      <li className='ml-2'>Burying Torres Strait Islanders in local cemeteries and performing unique mourning rituals</li>
                      <li className='ml-2'>Dugong and marine turtle hunting</li>
                      <li className='ml-2'>Cultural education, transmitted orally, from generation to generation</li>
                       <li className='ml-2'>Cultural practices are linked to seasonal and celestial occurrences</li>
                    </ul> 
                    <p className='mt-2'>
                      The Saibai cemetery is a particularly important place for
                      the community, and is currently inundated during every king tide. In addition there are various sacred sites,
                      where cultural ceremonies, including initiation ceremonies,
                      are traditionally conducted that can no longer be visited
                      due to rising sea levels and inundation of wetlands.
                    </p>
                    </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Economic.
                    </strong>{' '}
                    Decline in quality and yield of key fisheries species.
                    Transport to and from the island requires air or sea
                    transport, and extreme weather is likely to disrupt services. Shipping infrastructure and machinery to the
                    island is already expensive, and will be further compounded. Increased cost burden for replacement, repair and
                    maintenance of infrastructure. Disruption to tourism and local employment.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                The Torres Strait Regional Authority (2025) states "Torres
                Strait Islander and Aboriginal people of our region are ready to
                face what the future holds. We are prepared to lead the way in
                terms of shaping our response to climate change, sharing our
                learnings and showcasing our approach for the benefit of other
                Indigenous communities in Australia and the world - and for the
                future of our region, our culture, our communities and our
                children." {' '}
                <a
                  href="https://www.tsra.gov.au/wp-content/uploads/2025/03/TSRA-Regional-Adaptation-Plan-WEB-120325.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Torres Strait Adaptation and Resilience Plan 2025-2030
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
