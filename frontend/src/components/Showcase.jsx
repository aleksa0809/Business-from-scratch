import { useState, useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import Cards from './Cards'

export default function (props) {

    let {url, mock, resetBasket} = props
    let title = 'There are items of '
    let hasError = /error/.test(url)
    if(/toplist/.test(url)) title += 'top list'
    else {
        const [segment, size]  = url.split('/').splice(-2)
        title += `${segment} segment ${size} size`
    }

    const [products,  setProducts]  = useState([])
    const [headline,  setHeadline]  = useState('')

    const handleError = useErrorHandler()

    const callAPI = () => fetch(hasError && 'nowhere.json' || mock && 'products.json' || url)
        .then(res => res.json())
        .then(arr => {
            setProducts(arr)
            setHeadline(arr.length ? title : 'There are no items')
        })
        //.catch(err => handleError(err))

    useEffect(() => {
        (async function() {
            try {
                await callAPI()
            }
            catch(err){
                handleError(err)
            }
        })()
    })

    return (
        <div className="showcase">
            <h1>{headline}</h1>
            <Cards products={products} resetBasket={resetBasket}/> 
        </div> 
    )
}
