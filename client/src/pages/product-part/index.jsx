import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './index.scss'
import { Link} from 'react-router-dom'
import Search from '../../components/input-search'
const ProductPart = () => {
    const[product,setProduct]=useState([])
 
    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/products')
        setProduct(await data.data)
    }
    useEffect(() => {
    getData()
    }, [])

    
    const handleSort=()=>{
        axios.get("http://localhost:8000/products").then((data)=>{
          let sort = data.data.sort((a,b)=>Number(a.price)-Number(b.price))
          setProduct([...sort])
      
        }
        )
      }
    const Sort=()=>{
        axios.get("http://localhost:8000/products").then((data)=>{
          let sort = data.data.sort((a,b)=>Number(b.price)-Number(a.price))
          setProduct([...sort])
      
        }
        )
      }




  return (
    <div className='productPart'>
       
        <div className='productTitle'>
            <h4>Popular Item in the market</h4>
            <h1>Trending Product</h1>
        <div className='line'></div>
      <Search setProduct={setProduct}/>

        <button onClick={()=>handleSort()} className='sort'>Min to Max</button>
        <button onClick={()=>Sort()} className='sort'>Max to Min</button>
        </div>
       <div className='main_product'>
        {product.map((element)=>{
            return(
                <div className='all'>
                   <Link to={`/home-page/${element._id}`}>
                   <div className='card'>
                        <div className='cardImg'><img src={element.img} alt="" /></div>
                        <div className='cardText'>
                            <h4>{element.catacory}</h4>
                            <h3>{element.name}</h3>
                            <h2>{element.price}$</h2>
                        </div>
                    </div>
                   </Link>
                </div>
            )
        })}
       </div>
    </div>
  )
}

export default ProductPart