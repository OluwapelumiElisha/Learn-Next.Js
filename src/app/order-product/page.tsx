"use client"
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () =>{
        console.log("Placing Your Order");
        // router.push('/about')
        router.replace('/')
        // router.back()
        // router.forward( )
    }
    return <>
    <h1 className="text-2xl m-4">Order Product</h1>
    <button onClick={handleClick} className="bg-green-600 m-4 rounded-md p-2">Place a order</button>
    </>
}