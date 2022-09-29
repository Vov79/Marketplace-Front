import { useState } from "react";



export default function Pagination({productsPerPage, totalProducts, paginate}){
    const pageNumbers =[]
    const [page,setPage]=useState(1);
    for (let i = 1; i <= Math.round(totalProducts/ productsPerPage); i++){
        pageNumbers.push(i)
    }
    
    if(((pageNumbers.length * productsPerPage) < totalProducts))
    pageNumbers.push(pageNumbers.length+1)
    
    return (
        <div>
          
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className={page===number?"page-item-active":"page-item-inactive"} onClick={() => 
                        {
                        setPage(number)
                        paginate(number)}
                        } key={number}>
                                {number}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}