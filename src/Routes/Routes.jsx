import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import Our_Menu from '../Pages/Our_Menu/Our_Menu';



export const route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element:<Home />
            },
            {
                path: '/menu',
                element:<Our_Menu />
            }
        ]
    }
])