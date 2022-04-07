import {useEffect, useState} from 'react'
//'path/uid'
function useGetAllProducts(path){
    const [productData, setProductData] = useState(null);
    useEffect(()=>{
        //data fetching
        async function getProducts(){
            const res = await fetch('https://storefront-eddb1-default-rtdb.firebaseio.com/products.json')
            const jsonData = await res.json();
            setProductData(Object.values(jsonData));
        }

        getProducts()

    },[])

    return productData
}

export {useGetAllProducts}