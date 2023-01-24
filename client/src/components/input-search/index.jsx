import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './index.scss'

const Search = ({setProduct}) => {
    const [search,setSearch]=useState([])

    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/products')
        setSearch(await data.data)
    }
    useEffect(() => {
    getData()
    }, [])

const handleSearch=(e)=>{
    let newData = search.filter((el)=>
    el.name
    .toLocaleLowerCase()
    .includes(e.target.value.toLocaleLowerCase())
    )
    setProduct(newData)
}

  return (
    <div className='input'>
        <input type="text" onChange={(e)=>handleSearch(e)} placeholder='Search for fun.'/>
    </div>
  )
}

export default Search