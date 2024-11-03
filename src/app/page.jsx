import Link from "next/link";

export default function home () {
    return (
        <div>
            <h1 className="text-red-700">You Are Welcome Here !!!</h1>
            <Link className="m-4" href="/blog">Blog</Link>
            <Link className="m-4" href="/product">Products</Link>
        </div>
    )
}