import BrandHeaderTab from "@/components/brands/BrandHeaderTab"
import styles from "@/styles/brand.module.css";
import useBrands from '@/hooks/useBrands'

const brands = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '/brands/brandProfile',
    followers: '48k',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    followers: '35k',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    followers: '89.4k',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a brandivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    followers: '1m',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More brands...
]

export default function Brands() {

  const { data, loading, error } = useBrands('https://altclan-api-v1.onrender.com/api/brands/');


  if (loading) {
    return <div className="text-center p-5 mt-5">
      <br/>

<div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
    <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>
</div>

  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="bg-white">
      <BrandHeaderTab/>
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className={styles.brands}>Brands</h2> <br/>
        
        <p className="text-gray-600 lead">Explore from our list of aesthetic brands</p> */}

        <br/>

        <div className="grid grid-cols-2 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-20">
          {data.map((brand) => (
            <a key={brand.id} href={brand.href} className="group">
              <div className="w-full overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={brand.imageSrc}
                  alt={brand.imageAlt}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <svg className={styles.rightContent} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#200E32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg>
              <h3 className={styles.brandName}>
                {brand.name}
              </h3>
              <p className={styles.followers}>{brand.followers} followers</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
