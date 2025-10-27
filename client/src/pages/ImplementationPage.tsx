import Cemetery from '../assets/cemetery.jpg'

export default function ImplementationPage() {
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
              id="171923"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#171923)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      {/* </div> */}
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
                Located west of the township, the Saibai cemetery occupies an estimated area of 500 m squared, with an estimated perimeter of 300 m. Cemeteries hold deep cultural, spiritual, and community significance in Torres Strait Islander culture, representing:
                <ul className="mt-4 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                  <li className='ml-2'><strong>Connection to Ancestors.</strong> A spiritual connection to ancestral spirits, Country (land and sea), and family lineage. Cemeteries are sacred spaces where ancestral spirits reside.
                  </li>
                  <li className='ml-2'><strong>Cultural Identity and Continuity.</strong> Burial sites carry family totems, symbols, and stories that link present generations to past ones. Burial sites are part of the oral history and cultural memory of a community.
                  </li>
                  <li className='ml-2'><strong>Spiritual Practices and Ceremonies.</strong> Ceremonies such as the "Tombstone Opening" (Kulaw Gudpudai) are held at cemeteries to honour the deceased. This involves unveiling the headstone, feasting, dancing, and sharing stories, a key spiritual and cultural event. These rituals ensure the spirit of the deceased transitions peacefully and remains in harmony with the living.
                  </li>
                  <li className='ml-2'><strong>Respect and Responsibility.</strong> Maintaining cemeteries reflects the value of respecting Elders and the deceased. Families carry an ongoing duty of care to visit, clean, and maintain burial sites. Neglecting a cemetery may be interpreted as neglecting the spiritual wellbeing of the whole community.
                  </li>
                  <li className='ml-2'><strong>Connection to Place.</strong> Torres Strait Islanders believe that people should be buried on their traditional land or island, reinforcing their spiritual and cultural belonging. Cemeteries are part of the landscape of belonging, anchoring people to place, culture, and family.
                  </li>
                </ul>

              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <figure>
            <img
              alt="Fallen tombstones near a tree at Saibai Island cemetery"
              src={Cemetery}
              className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            />
            <figcaption className="mt-8 text-sm text-gray-500 italic">
              <span className="font-semibold not-italic text-gray-700 mr-2">
                Figure 4.
              </span>
              Saibai Island cemetery showing erosion and fallen tombstones. From <cite>Kabai v Commonwealth of Australia</cite> [2025] FCA 796, Federal Court of Australia. (
              <a 
                href="https://www.judgments.fedcourt.gov.au/judgments/Judgments/fca/single/2025/2025fca0796"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500 underline not-italic"
              >
                https://www.judgments.fedcourt.gov.au/judgments/Judgments/fca/single/2025/2025fca0796
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
                The upgraded 2.2km Saibai seawall, comprising of an armour rock and concrete wave return wall along the township foreshore was completed in May 2017 at a cost of $23.8 million by private contractor Koppen Construction. To protect the cemetery, a low concrete wall was completed in June 2015, as part of stage 1 works of the Seawalls Project. Despite the wall, the cemetery floods during every king tide, resulting in continuing erosion of burial sites, dislodgement of wooden frames, and toppling of tombstones. Relatives are unable to identify where their ancestor's remains lie.
              </p>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Indigenous Ecological Knowledge</h2>
              <p className="mt-6">
                It is important to approach infrastructure around the cemetery with cultural sensitivity and consult local Elders or cultural custodians. In addition, centralising and incorporating Indigenous Knowledge (also known as Traditional Ecological Knowledge) is paramount. TEK describes place-based, holistic, evolving and intergenerational knowledge systems developed over thousands of years. TEK incorporates:
                <ul className="mt-4 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                  <li><strong>Early detection of subtle environmental changes.</strong> Shifts in tides, bird migrations, or plant flowering. In the Torres Strait, Islanders observed changes in sea levels, coral bleaching, and fish behaviour long before documentation by scientists.
                  </li>
                  <li><strong>Sustainable Land and Resource Management.</strong> Traditional practices like seasonal harvesting, fire-stick farming, and marine conservation zones promote biodiversity and resilience.

                  </li>
                  <li><strong>Community-Based Adaptation and Resilience.</strong> Traditional construction techniques are adapted to resist rising sea levels and inundation. Strong kinship and communal support systems are vital for disaster response and adaptation.

                  </li>
                  <li><strong>Protection of biodiversity.</strong> Customary laws and taboos regulate access to sensitive ecosystems, creating natural conservation zones. In climate adaptation, preserving culture = preserving ecosystems.
                  </li>
                  <li><strong>Advocacy, Leadership, and Legal Recognition.</strong> Indigenous leaders are advocating for climate justice, stronger climate change adaptive measures, and the recognition of Indigenous land rights and knowledge.
                  </li>

                </ul>
                <h2 className='mt-2'><strong>Bridging the gap between TEK and scientific research requires</strong></h2>
                <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-900 list-disc marker:text-indigo-600 marker:text-xs">
                  <li className='ml-2'>Respectful collaboration</li>
                  <li className='ml-2'>Free, prior and informed consent</li>
                  <li className='ml-2'>Recognition of sovereignty and intellectual property rights</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
