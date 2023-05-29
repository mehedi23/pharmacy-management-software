import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard';
import {CompanyRoutes} from './pages/Companies/RouteCompany';
import {StockRoutes} from './pages/Stocks/RouteStocks';
import {OrderRoutes} from './pages/Orders/RouteOrder';
import {BillingRoutes} from './pages/Billing/RouteBilling';

export const ALL_PAGE_ROUTE = [
    {
        path: "/",
        element: <Dashboard />,
    },
    ...CompanyRoutes,
    ...StockRoutes,
    {
        path: "/order",
        children: [...OrderRoutes] 
    },
    {
        path: "/billing",
        children: [...BillingRoutes] 
    },
];