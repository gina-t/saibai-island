import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid';

export default function GovernancePage() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
      <div className="mx-auto w-full px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base/7 font-semibold text-indigo-600">
            Torres Strait
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Governance and Funding
          </h1>
          <p className="mt-6 text-xl/8 text-gray-700">
            Jurisdictional and administrative arrangements over the Torres
            Strait environment are extremely complex, and involve two countries,
            3 tiers of government (Local, Queensland, Commonwealth), multiple
            departments, agencies, research organisations, and NGOs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            {/* <svg
              aria-hidden="true"
              className="absolute -top-160 left-1 -z-10 h-256 w-702 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-gray-900/10"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
            </svg> */}
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                <p>
                  "In late 2024, we released the Torres Strait and Northern
                  Peninsula Area Climate Resilience Grant Program. Grants
                  provide up to $10.8 million over 3 years for the recruitment
                  and training of local First Nations climate resilience
                  officers. These officers will lead practical climate
                  adaptation projects and community education. In early 2025,
                  grants were awarded to 3 regional organisations. The program
                  was designed with regional leaders and is part of achieving
                  the goals of the centre."
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <div className="text-sm/6">
                  <div className="font-semibold text-gray-900">TSNPACRC</div>
                  <a
                    href="https://www.dcceew.gov.au/climate-change/policy/torres-strait-northern-peninsula-area-climate-resilience-centre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 underline"
                  >
                    https://www.dcceew.gov.au/climate-change/policy/torres-strait-northern-peninsula-area-climate-resilience-centre
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base/7 text-gray-600 lg:col-span-7">
            <p>The primary institutions are:</p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <ArrowPathRoundedSquareIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    {' '}
                    Torres Strait Island Regional Council.
                  </strong>{' '}
                  Established 2008, the TSIRC is the local government body for
                  15 island communities including Saibai. The TSIRC is governed
                  by the Local Government Act 2009 (Qld). Its primary roles are
                  promoting information, education, awareness, and monitoring,
                  and reflects community-based decision making and planning.
                  TSIRC obtains funding from Commonwealth government and
                  Queensland government. TSIRC implemented Seawalls project with
                  significant cost overruns.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowPathRoundedSquareIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Torres Strait Regional Authority.
                  </strong>{' '}
                  Established 2005, the TSRA is the leading Commonwealth
                  representative body for Torres Strait Islanders, and only
                  Torres Strait Islander or Aboriginal people are qualified to
                  be elected as members. Its primary roles are delivering policy
                  and planning. The TSRA is the coordinating authority in
                  respect of climate change adaptation measures. TSRA
                  publications include the Torres Strait Climate Change Strategy
                  2014-2018, and an adaptation and resilience plan, the Torres
                  Strait Regional Adaptation and Resilience Plan 2025-2030.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowPathRoundedSquareIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Torres Strait and Northern Peninsula Area Climate Resilience
                    Centre.
                  </strong>{' '}
                  The Centre was developed following a regional roundtable in
                  2022, and represents a $15.9 million investment over 6 years
                  (2022 to 2028). Indigenous led, the centre aims to
                  <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                    <li className="ml-2">
                      Integrate Traditional Ecological Knowledge with scientific
                      research
                    </li>
                    <li className="ml-2">
                      Recruit and train climate resilience officers.
                    </li>
                    <li className="ml-2">
                      Protect data sovereignty and Indigenous Cultural and
                      Intellectual Property
                    </li>
                    <li className="ml-2">
                      Develop sustainable partnerships between Torres Strait and
                      Northern Peninsula Area agencies and various tiers of
                      government.
                    </li>
                  </ul>
                  <p className="mt-2">
                    A grants programme was released in late 2024 for the
                    recruitment and training of local First Nations climate
                    resilience officers. These officers will lead practical
                    climate adaptation projects and community education. The
                    TSNPACRC is an ideal vehicle to test the development of
                    climate resilient governance in practice.
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
                    Funding
                  </strong>{' '}
                  The Seawalls Project, was a project that involved the
                  construction of seawalls for specific islands in the Torres
                  Strait, including Saibai. It was funded by the Commonwealth
                  and Queensland Governments and implemented by the TSIRC. The
                  project commenced in 2011, though it was ultimately split into
                  three stages. The seawall for Saibai was completed in 2017 as
                  part of stage 1 works, and suffered from spiralling costs
                  ($23.8 million) exceedingg the allocated funding. The seawall
                  for Boigu was completed in 2022, and for Poruma in 2024 as
                  part of stage 2 works. In 2025 the federal Labor government
                  committed $36.2 million for stage 3 works of the Seawalls
                  Project for Iama, Warrraber and Masig, and a further $41.2
                  million for stage 7 works of the Major Infrastructure Project.
                </span>
              </li>
            </ul>
            <p className="mt-8"></p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900"></h2>
            <p className="mt-6"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
