import React, { memo } from 'react'
import ShopIcon from '../../assets/icons/ShopIcon'
import LikeIcon from '../../assets/icons/LikeIcon'
import { ratingTotal } from '../../static/CustemsFuction'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const ProductItem = ({ product }) => {
    const dispatch = useDispatch()
    const aksiya = ((product?.oldPrice - product?.price) * 100) / product?.oldPrice
    const addToLike = (e) => {
        e.preventDefoult()
        dispatch(toggleHeart(product))
        console.log(product)
    }
    const addToCart = (e) => {
        e.preventDefault()
        dispatch(addToCart(product))
        console.log(product)
    }

    return (
        <div className='group w-[295px] border-0 flex flex-col gap-4 bg-white' >
            <figure className='w-[295px] h-[298px] relative rounded-lg bg-[#F0EEED]'>
                <img className='w-full h-full mx-auto object-contain rounded-lg' alt="example" src={product?.urls} />
                <div className='w-full h-full top-0 right-2 absolute hidden group-hover:flex group-hover:top-2
                items-start justify-end gap-4 transition transform hover:-translate-y-[-5px] '>
                    <button onClick={addToLike} className='p-2 rounded-full bg-gray-50'> <ShopIcon /> </button>
                    <button onClick={addToCart} className='p-2 rounded-full bg-gray-50'> <LikeIcon /> </button>
                </div>
            </figure>
            <div className="w-full flex flex-col gap-3">
                <Link to={`/products/${product?.id}`} className='text-[20px] font-semibold'>{product?.title}</Link>
                <p className='flex items-center justify-start gap-4'>{ratingTotal(product?.rating)}
                    <span className='text-sm text-gray-500'>{product?.rating}/{product?.reviews}</span>
                </p>
                <ul className='flex items-center justify-start gap-3 text-black'>
                    <li className='text-[24px] font-medium'>${product?.price}</li>
                    <li className={`text-[24px] font-medium text-[#00000066] ${product?.oldPrice > 0 ? 'block' : 'hidden'}`}>
                        ${product?.oldPrice}
                    </li>
                    <li className={`${product?.oldPrice > 0 ? 'flex w-[58px] mt-1 h-[28px]' : 'hidden'} px-2 items-center justify-center font-semibold
                    bg-[#FF33331A] text-[#FF3333] rounded-3xl`}>
                        {aksiya.brm()}%
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default memo(ProductItem)