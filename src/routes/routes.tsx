import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
//import Item from "../pages/StoreItem";
import Register from "../pages/Register";
import StoreItem from "../pages/StoreItem";
import ItemContextProvider from "../context/ItemContext";

export const routes= createBrowserRouter([
    {
        path:'/', //הפנייה לדף הראשי
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/store',
        element:<ItemContextProvider><Store/></ItemContextProvider>
    },
    {
        path:'/item/:item', // הפניות דינאמיות למוצרים בתוך החנות
        element:<ItemContextProvider><StoreItem id={0} name={" פה אמור להיות דף של מוצר ספציפי"} price={0} imgUrl={""} shortDescription={""} longDescription={""} minimum={0} maximum={0} salePrice={0}/></ItemContextProvider>
    },
    {
        path:'/register',
        element:<Register/>
    }

])