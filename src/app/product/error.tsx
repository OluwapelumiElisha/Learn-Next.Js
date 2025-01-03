"use client"
export default function ErrorBoundary({error, reset }:{
    error: Error,
    reset: () => void
}) {
    return <div>
        {error.message}
        <button onClick={reset} className="text-white bg-black p-1 ml-5 border-2 rounded-md">Try Again!!!</button>
        </div>
}