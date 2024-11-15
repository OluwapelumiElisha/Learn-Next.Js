function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)
}

export default function ProductsDestailsLayout({ children}:{
    children : React.ReactNode
}) {
    getRandomInt(2)
    const random  = getRandomInt(2)
    // console.log(random, 'jjjjj');
    
    if (random === 1) {
        throw new Error('Error Loading Product')
    }
    return(
        <>
        {children}
        <h2>Features Products</h2>
        </>
    )
}