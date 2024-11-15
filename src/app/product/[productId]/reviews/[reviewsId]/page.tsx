// import { count } from "console"
"use client"
import { notFound } from "next/navigation"
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)
}
export default function ReviewDetails({ params }: {
    params :{ 
       productId :  string
       reviewsId :  string
    }
}) {
    // getRandomInt(2)
    // const random  = getRandomInt(2)
    // // console.log(random, 'jjjjj');
    
    // if (random === 1) {
    //     throw new Error('Error Loading Review')
    // }

    if (parseInt(params.reviewsId) > 1000) {
        notFound()
    }
    return <h1> Review {params.reviewsId} for Product {params.productId} </h1>
}