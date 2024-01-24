import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Products = () => {

    const [productData, setProductData] = useState(null)

    const params = useParams()
    const nav = useNavigate()

    const applyFilter = (e) => {
        const filter = e.target.value;
        nav(`/products/${params.category}/${filter}`)
    }

    useEffect(() => {
        fetch("https://gfdr3mj1e5.execute-api.ap-south-1.amazonaws.com/dev/")
        .then((res)=>{
            return res.json()
        })
        .then((data)=> {
            setProductData(JSON.parse(data.body))
        })
    }, [])

    return (
        <div className='products card'>
            <div>
                <select onChange={applyFilter}>
                    <option>Price:</option>
                    <option value="high-to-low">High to Low</option>
                    <option value="low-to-high">Low to High</option>
                </select>
            </div>
            <div>
                {
                    (productData) ?
                    productData.map((val) => {
                        if(params.category == val.type) {
                            return (
                                <div key={val.id} className='product-info'>
                                    <div>{val.name}</div>
                                    <div>{val.price} INR</div>
                                </div>
                            )
                        }
                    }) : "No data"
                }
            </div>
        </div>
    )
}

export default Products