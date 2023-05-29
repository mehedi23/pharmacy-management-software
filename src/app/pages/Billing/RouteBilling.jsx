import React from 'react'
import NewBilling from './NewBilling';
import BillingHistory from './BillingHistory';

export const BillingRoutes = [
    {
        path: "create",
        element: <NewBilling/>
    },
    {
        path: "history",
        element: <BillingHistory/>
    },
];