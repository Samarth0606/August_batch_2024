import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Help from './components/Help.jsx'
import Offers from './components/Offers.jsx'
import Signin from './components/Signin.jsx'
import Cart from './components/Cart.jsx'
import Body from './components/Body.jsx'
import Error from './components/Error.jsx'
import RestaurantDetails from './components/RestaurantDetails.jsx'
import Clock from './components/Clock.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error /> ,
    children:[
      {
        path:'/',
        element: <Body />
      },
      {
        path:'/offers',
        element: <Offers />
      },
      {
        path:'/help',
        element: <Help />
      },
      {
        path:'/cart',
        element: <Cart />
      },
      {
        path:'/signin',
        element: <Signin />
      },
      {
        path:'/restaurant/:id',
        element: <RestaurantDetails />
      },
      {
        path:'/clock',
        element: <Clock />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)
