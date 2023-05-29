import React from 'react'
import Sidenav from 'app/component/Drawer/Sidenav';
import AddOrder from './AddOrder';
import OrderList from './OrderList';

export const OrderRoutes = [
    {
        path: "add",
        element: <AddOrder/>
    },
    {
        path: "list",
        element: <OrderList/>
    },
];