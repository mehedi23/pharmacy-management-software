import React from 'react';
import {
    SpaceDashboard,
    AddBusiness,
    InventoryOutlined,
    GradingOutlined,
    PriceChangeOutlined
} from '@mui/icons-material';

export const SIDE_NAVIGATION = [
    {
        path : '/',
        name : 'Dashboard',
        icon : <SpaceDashboard/>,
    },
    {
        path : '/company-list',
        name : 'Company List',
        icon : <AddBusiness/>,
    },
    {
        path : '/stock-list',
        name : 'Stock',
        icon : <InventoryOutlined/>,
    },
    {
        name : 'Order',
        icon : <GradingOutlined/>,
        children : [
            {
                path : '/order/add',
                name : 'Add Order',
                icon : '',
            },
            {
                path : '/order/list',
                name : 'Order List',
                icon : '',
            }
        ]
    },
    {
        name : 'Billing',
        icon : <PriceChangeOutlined/>,
        children : [
            {
                path : '/billing/create',
                name : 'Create',
                icon : '',
            },
            {
                path : '/billing/history',
                name : 'Billing History',
                icon : '',
            }
        ]
    },
]