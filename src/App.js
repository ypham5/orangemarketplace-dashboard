import {Routes, Route} from "react-router-dom"

import {LoginPage, DashBoardPage, PageNotFound} from './pages'
import {HomePanel, OrdersPanel, AddProductsPanel, EditProductsPanel, CustomersPanel} from 'components/panels' 
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

export default App;

 
 