// import ProductCard from 'components/products/ProductCard'
// import { useGetAllProducts } from 'hooks/useGetAllProducts'
// function ViewAllProducts() {
//     const productData = useGetAllProducts()
//     return (
//         <>
//             {productData?  productData.map(product=><ProductCard key={product.uid} product={product}/>) : null}
//         </>
//     )
// }
// export default ViewAllProducts;

export {default as ViewAllProducts} from './ProductCard'