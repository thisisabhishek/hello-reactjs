import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Products = () => {

    const params = useParams()
    const nav = useNavigate()

    const applyFilter = (e) => {
        const filter = e.target.value;
        nav(`/products/${params.category}/${filter}`)
    }

    return (
        <div className='products card'>
            <div style={{float:'right'}}>
                <select onChange={applyFilter}>
                    <option>Price:</option>
                    <option value="high-to-low">High to Low</option>
                    <option value="low-to-high">Low to High</option>
                </select>
            </div>
            Product Filter: {params.category}
        </div>
    )
}

export default Products