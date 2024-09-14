import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../productCard/productCard'

const POS = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/api/products')
            .then((res) => {
                setProducts([...res.data])
                console.log(products)
            })
    }, [])
    const handleDeleteProduct = () => {

    }
    const handleEditProduct = () => {

    }
    return (
        <div className='flex'>

            <div className="flex flex-wrap justify-center gap-5 pb-4">
                {
                    products.map((item) => (
                        <ProductCard
                            item={item}
                            key={item._id}
                            showDelete={false}
                            showEdit={false}
                        />
                    ))
                }
            </div>
            <div className="flex w-5/12 bg-red-200">
            <div className='flex-1'>dsf</div>
            </div>
        </div>
    )
}

export default POS