import React from 'react'
import { createProductWithDate } from '../../api/AirtableApis';

const BuyNowButton = ({ SHARE_URL, color = "" }) => {
    const colorMsg = `in ${color} color`;
    const message = `${SHARE_URL}\nI want to buy this product ${color && colorMsg}`;
    return (
        <a
            href={`https://wa.me/916290433603/?text=${encodeURIComponent(message)}`}
            onClick={() => createProductWithDate()}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer py-2 px-4 border-2 border-primary-border rounded-lg flex items-center justify-center w-1/2 hover:bg-primary-text hover:text-black"
        >
            Buy Now
        </a>
    )
}

export default BuyNowButton