import React from 'react'
import TopPart from '../top-part'
import ProductPart from '../product-part'
import SalePart from '../sale-part'
import BestPart from '../best-part'
import NewsPart from '../news-part'

const HomePage = () => {
  return (
    <div>
        <TopPart/>
        <ProductPart/>
        <SalePart/>
        <BestPart/>
        <NewsPart/>
    </div>
  )
}

export default HomePage