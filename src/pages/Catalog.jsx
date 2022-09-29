import { useEffect, useState } from "react";
import { AiOutlineCheck, AiOutlineSearch } from "react-icons/ai"
import { useContext } from "react";
import { data } from "../components/Context";
import Product from "../components/Product";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import {
    ChakraProvider,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Input,
    InputRightElement,
    InputLeftElement,
    InputGroup
  } from '@chakra-ui/react'
  import { TailSpin } from  'react-loader-spinner'
  import { useDispatch } from "react-redux";
  import { useSelector } from "react-redux";
  import { getPhones } from "../Features/PhonesSlice";


export default function Catalog(){
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const [sort, setSort] = useState("price");
    const products = useContext(data)
    const [sortProducts, setsortProducts] = useState(products)
    const brands = ["Apple", "Huawei", "Samsung", "Realme", "Xiaomi"];
    const [sortBrand,setSortBrand] = useState();
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProduct = sortProducts.slice(firstProductIndex, lastProductIndex);
    const [minPrice, setMinPrice] = useState(Math.min(...products.map(itm => itm.price)));
    const [maxPrice, setMaxPrice] = useState(Math.max(...products.map(itm => itm.price)));
    const [search, setSearch] = useState();
    const [loader, setLoader] = useState(1);
    const dispatch = useDispatch();
    const phones = useSelector((state) => state.phones.phones)
    
    window.onload = ()=>{
      dispatch(getPhones())
  }

    function addSortBrand(brand){
        if(sortBrand===brand) setSortBrand("")
         else setSortBrand(brand) 
    }
   
    const paginate = pageNumber => setCurrentPage(pageNumber)

    function showBrands(){
        return (
            brands.map(itm => 
               {
                return(
                    <div className="allSortIcons"><div className={sortBrand===itm?"sortIconsActive": "sortIconsInactive"} onClick={() => 
                        {   setCurrentPage(1)
                            addSortBrand(itm)
                    }}>{<AiOutlineCheck size={16} style={{color:"white"}}/>}</div>{itm}</div>
                )
                })
        )
    }

    function showProducts(arr) {
        return( 
            arr.map((product) => ( 
          <Product 
          img = {product.img} 
          title = {product.title} 
          price = {product.price}
          category = {product.category}
          id = {product.id}
          />
          ))
        )
      }
      
     
      function getProducts(){
        setLoader(0);
        if(sortBrand){
            let sortProducts = (search ? 
            products.sort((a,b) => a[sort] > b[sort] ? 1 : -1).filter(itm => (itm.brand === sortBrand.toLowerCase()) && (itm.price>=minPrice && itm.price<=maxPrice) && (itm.title.toLowerCase().includes(search.toLowerCase()))) :
            products.sort((a,b) => a[sort] > b[sort] ? 1 : -1).filter(itm => (itm.brand === sortBrand.toLowerCase()) && (itm.price>=minPrice && itm.price<=maxPrice))) 
            setsortProducts(sortProducts)
        }
        else 
        setsortProducts(search ? 
            products.sort((a,b) => a[sort] > b[sort] ? 1 : -1).filter(itm => (itm.price>=minPrice && itm.price<=maxPrice) && (itm.title.toLowerCase().includes(search.toLowerCase()))) :
            products.sort((a,b) => a[sort] > b[sort] ? 1 : -1).filter(itm => (itm.price>=minPrice && itm.price<=maxPrice)))
        
             
            const timer = setTimeout(() => setLoader(1), 1200);
      }

      useEffect(() => {
        getProducts();
      },[sortBrand])

      useEffect(() => {
        getProducts();
      },[minPrice])

      useEffect(() => {
        getProducts();
      },[maxPrice])

      useEffect(() => {
        getProducts();
      },[sort])

      useEffect(() => {
        getProducts();
      },[search])

    return(
        <div className="Catalog">
            
            <div className="catalogContainer">
            <div className="catalogSortSection">
                <h1>Smartphones</h1>

                <div className="catalogSort">
                <p id="catalogText">Brand</p>
                {showBrands()}

                <p id="catalogText">Price</p>

                <div className="catalogPrice">

                <div className="catalogMinPrice">
                <span>{minPrice}$</span>
                </div>
                <span id="dash">-</span>
                <div className="catalogMaxPrice">
                <span>{maxPrice}$</span>
                </div>

                </div>

                
                <RangeSlider aria-label={['min', 'max']} min={Math.min(...products.map(itm => itm.price))} max={Math.max(...products.map(itm => itm.price))} defaultValue={[Math.min(...products.map(itm => itm.price)), Math.max(...products.map(itm => itm.price))]} onChange={(e) => 
                    {
                    setMaxPrice(e[1])
                    setMinPrice(e[0])
                    }
                    }>
                
                <RangeSliderTrack  h ="1px">
                    <RangeSliderFilledTrack bg='#FD6906' />
                </RangeSliderTrack>
                <RangeSliderThumb borderColor = "#FD6906" index={0}/>
                <RangeSliderThumb borderColor = "#FD6906" index={1} />
                </RangeSlider>
                
                
                </div>

            </div>

            <div className="catalogItems">
                <div className="catalogItemsSort">
                <InputGroup className="inputGroup">
                <InputLeftElement
                children={<AiOutlineSearch size={25} />}
                 />
                 <Input  variant='flushed' borderColor='white' placeholder='Enter amount' onChange={(e) => {
                  setSearch(e.target.value)
                  }}/>
                 </InputGroup>

                    <select onChange={(e) => setSort(e.target.value)} value={sort}>
                        <option value="price">Price</option>
                        <option value="title">Title</option>
                    </select>
                </div>

                <div className="catalogItemsProducts">
                {loader ? showProducts(currentProduct) : <div className="loader"><TailSpin  color = '#FD6906' /></div>}
                {<div id="noProducts" style={{display: !currentProduct.length && loader ? "block" : "none"}}><span>No Products</span></div>}
                </div>
            
            <div className="catalogPagination">
                <Pagination 
                
                productsPerPage={productsPerPage}
                totalProducts = {sortProducts.length}
                paginate ={paginate}
                
                />
                </div>

        </div>
        
        </div>
        <Footer/>
        </div>
    )
}