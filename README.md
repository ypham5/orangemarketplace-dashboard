
Orange - Dashboard
======================================

The dashboard is completed the product write
functionality and implement the read functionality for the view all products panel.
<!-- toc -->

* [Panels Nested Routes](#Panels)
* [View All Products Panel](#View-All-Products-Panel)
* [Add Product Panel](#Add-Product-Panel)

<!-- tocstop -->
# Panels
These names should match up with the nested route paths that you create in the App.js component.
## View All Panel (default panel)
View All Panel Route Path: all

## Add New Product Panel
Add New Panel Route Path: add

## Edit Products Panel
Edit Panel Route Path: edit

App.js
```javascript
function App() {
 
  return (
       <>
         <Routes>
           <Route path="/"  element={<LoginPage/>}/>
           <Route path="dashboard"  element={<DashBoardPage/>}>
              <Route index element={<HomePanel title="All Products" />}/>
              <Route path="orders" element={<OrdersPanel title="Orders" />}/>
              <Route path="add" element={<AddProductsPanel title="Add Product" />}/>
              <Route path="edit" element={<EditProductsPanel title="Edit Product" />}/>
              <Route path="customers" element={<CustomersPanel title="Customers" />}/>
           </Route>
           <Route path="*"  element={<PageNotFound/>}/>
         </Routes>
       </>
  );
}

```

# View All Products Panel
Getting data passed by the useGetAllProducts hook, when these data becomes available to the component and when the component has data then return the ui product card component.
## useGetAllProducts.js
The useGetAllProducts.js is inside hooks folder. This file is creating the logic for reading
product data from the RealTime Database and the fetching data asynchronously to pass back the data to the view all products panel.
```javascript
   
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
```
## ProductCard.js
This file contains 2 functions: product card ui and view all products.
### product card ui render function
Create product card style and display the data for each product
```javascript
function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, imageUrl, productDescription} = {...product}
  return (
        <ProductCardStyles>
            <CardHeader>
            <Link to="edit" key={product.uid}>
                <IconButton id="edit">
                    <HiPencilAlt/>
                </IconButton>
            </Link>
                <IconButton id="delete" onclick="confirmation()">
                    <HiOutlineTrash/>
                </IconButton>
            </CardHeader>
            <ProductImage>
               <img src={imageUrl} alt="{productName}" width="320" height="200"/>
            </ProductImage>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductDescription>{productDescription}</ProductDescription>
         </ProductCardStyles>
    )
  }
```
## view all products function
Read all the products by maping and looping all data to create all product cards
```javascript
function ViewAllProducts() {
    const productData = useGetAllProducts()
    return (
        <AllProductsPanel>
            {/* {productData?  productData.slice(0, 3).map(product=><ProductCard key={product.uid} product={product}/>) : null} */}
            {productData?  productData.map(product=><ProductCard key={product.uid} product={product}/>) : null}
        </AllProductsPanel>
    )
}
export default ViewAllProducts;
```


# Add Product Panel
## AddProductPanel.js Using widget AddProduct.js to add new product
the function addproduct will useState() to set and handle submit data: product name, price, description, image, loader and number formatter
```javascript
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productDescription, setProductDescription] = useState(defaults.description)
  const [productImage, setProductImage] = useState({previewImage:PlaceHolderImage, file:null})
  const [loading, productLoader] = useAddNewProduct();
  const formatter = useNumberFormat()

```  
## Product Editor
Gathering product entry form and product preview
```javascript
function ProductEditor ({children, productName, productPrice, productDescription, productImage, handleSubmit, handleProductName, handleProductPrice, handleProductDescription, setProductImage, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
           <ProductDataEntryForm 
            handleProductName={handleProductName}
            handleProductPrice={handleProductPrice}
            handleProductDescription={handleProductDescription}
            setProductImage={setProductImage}
            handleSubmit={handleSubmit}
           />
           <ProductPreview 
            productName={productName}
            productPrice={productPrice}
            productDescription={productDescription}
            productImage={productImage}
           />
        </ProductEditorStyles>
  )
}

```

### Product Data Entry Form
Creating styled entry form to promp data
```javascript
function ProductDataEntryForm({ children, handleProductName, handleProductPrice, handleSubmit, handleProductDescription, setProductImage,...props }) {
  return (
    <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
      <ProductImage>
        <Label>Product Image</Label>
        <ProductImageDropBox setProductImage={setProductImage}/>
      </ProductImage>
      <fieldset>
      <ProductName>
        <Label>Product Name</Label>
        <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30}/>
      </ProductName>
      <ProductPrice
      ><Label>Product Price</Label>
        <Input width="200px" onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
      </ProductPrice>
      </fieldset>
      <ProductDescription>
        <Label>Product Description</Label>
        <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} maxLength={250} rows={6}/>
      </ProductDescription>

      <div>
        <SubmitButton width="100%" padding=".75rem 0" margin="1.125rem 0 0 0" type="submit">Add Product</SubmitButton>
      </div>

    </ProductDataEntryFormStyles>
  )
}
```
### Product Image Drop Box
Creating dropZone for input image 
__Import Dependancies__  
Import the required functionality for the Image Drop Box Component.
```javascript
import {useDropzone} from 'react-dropzone'
```
### Product Preview   
Passing data variable to show information about product
```javascript
function ProductPreview ({children, productName, productPrice, productImage, productDescription, ...props})  {
  return (
        <ProductPreviewStyles {...props}>
           <ProductImage>
              <img src={productImage.previewImage} alt="Orange Sneakers Marketplace" width="320" height="200"/>
           </ProductImage>
           <ProductName>{productName}</ProductName>
           <ProductPrice>${productPrice}</ProductPrice>
           <ProductDescription>{productDescription}</ProductDescription>
        </ProductPreviewStyles>
  )
}
```

## Editor FeedBack
After the submit button is clicked, the Editor feedback is used to show the status of uploading and successfully uploaded and there are two button to help navigate to add another prouduct or view all uploaded products. 

```javascript

function EditorFeedBack ({children, status, writeCompleted, ...props})  {
    const navigator = useNavigate()
  return (
        <EditorFeedBackStyles  {...props}>
          { 
           !status
           ?
           <FeedBack>
             <AiOutlineCheckCircle color="11DABC" size="12rem"/>
             <FeedBackMessage>
               Product Uploaded Successfully
             </FeedBackMessage>
           </FeedBack>
            :
            <FeedBack>
             <AiOutlineCloudUpload color="11DABC" size="12rem"/>
             <FeedBackMessage>
               Uploading New Product
             </FeedBackMessage>
           </FeedBack>
          }
           <FeedBackOption>
             <Button
             bc="#F05523"
             color="#f8fafc"
             onClick={() => writeCompleted(false)}
             disabled={status}
             >Add Another Product</Button>
             <Button
             bc="#171717"
             color="#f8fafc"
              onClick={() => navigator('/dashboard')}
             >View All</Button>
           </FeedBackOption>

        </EditorFeedBackStyles>
  )
}
```

