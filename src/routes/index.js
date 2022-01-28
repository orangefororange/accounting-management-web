import Signin from "../pages/Signin";
import Show from "../pages/account/Show";

export const mainRoutes=[
    {
        path:"/signin",
        element:<Signin/>
    }
]


export const adminRoutes=[
    {
        path:"/show",
        element:Show,
        // exact:true
    }

]