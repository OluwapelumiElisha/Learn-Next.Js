export default function Docs ({params}:{
    params : {
        Slug : string[];
    }
})  {
    if (params.Slug?.length === 2) {
        return <h1>
            Viewing docs for feature {params.Slug[0]} and concept {params.Slug[1]}
        </h1>
    } else if (params.Slug?.length === 1) {
        return <h1>
            Viewing docs for feature {params.Slug[0]} 
        </h1>
    }
  return (
    
      <h1>Docs Home Page</h1>
  )
}

// export default Docs
