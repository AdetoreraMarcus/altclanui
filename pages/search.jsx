import {React, useState, useEffect, useContext} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import {CartContext} from '../context/CartContext'
import HeaderTab from './../components/headers/HeaderTab'
import Category from './../components/Category'
import useBrands from "../hooks/useBrands"
const categories = [
  // More categories...
]
import useDebounce from '../hooks/useDebounce'
export default function Search() {
  const {cart, addToCart} = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  // Results of the search query in an array
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [searchResult, setSearchResult] = useState([])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const { data, loading, error } = useBrands('https://altclan-api-v1.onrender.com/api/merchandises/')
  //const data = fetch('https://altclan-api-v1.onrender.com/api/merchandises/')
 
 


  useEffect(() => {

    if (searchQuery !== "") {
      const results = data.filter((product) =>
        product.merchandise_name.toLowerCase().includes(searchQuery.toLowerCase())
        
      );
      console.log(results)
      setSearchResult(results);


    } else {
      setSearchResult([]);
    }
  }, [searchQuery, data]);



  return (
   
  <div className="pt-2 m-2 ">
      <div className="mx-auto p-5 ">
        <div className="flex items-center" >   
            <label for="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                
                </div>
                <input type="text" onChange={handleSearchChange} value={searchQuery} id="simple-search" className="bg-gray-50 p-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="brand, merch, category" required/>
            </div>
      
        </div>
  </div>

  {searchQuery && searchResult?.map((product) => (
           <section key={product.id } aria-labelledby="products-heading" className="pb-24">
           <h2 id="products-heading" className="sr-only">
             Products
           </h2>

           <div  className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-4">
    
            

             {/* Product grid */}
             <div className="lg:col-span-3">
                           
             <div className="mx-auto max-w-2xl  px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
         
         <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

             <div className="group relative">
               <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                 <Link href={`/products/${product.id}`}>
                 <img
                   src={product.display_image}
                   alt={product.imageAlt}
                   className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                 />
                 </Link>
               </div>
               <div className="mt-4 flex justify-between">
                 <div>
                   <h3 className="text-sm text-gray-700">
                     {/* An element here was covering the whole card making the add to cart unclickable */}
                       {product.merchandise_name}
            
                   </h3>
                   <p className="mt-1 text-sm text-gray-500">₦{product.price}</p>

                   
                 </div>
           
     <button
       className="pl-2 text-neutral-600 transition duration-200 hover:text-neutral-700"
       onClick={()=> addToCart(product.id)}> 
       {/* didn't properly call add to cart with the id */}
       <span className="[&>svg]:w-5">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           className="h-5 w-5">
           <path
             d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
         </svg>
       </span>
     </button>
               </div>
             </div>
       
         </div>
       </div>
             </div>
           </div>
         </section>
        ))}

  <div className='pt-10'>
    
  </div>
</div>

  )
}
