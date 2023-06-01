import React from 'react'
import Table1 from 'app/component/table/Table1';

const data = [
    { id: 1, name: 'Napa', stock: 16 , company_name: 'Square', price : 233 },
    { id: 2, name: 'Ge safi ', stock: 81 , company_name: 'Incepta', price : 23 },
    { id: 3, name: 'HJK', stock: 42 , company_name: 'Beximco', price : 12 },
    { id: 4, name: 'Flexi', stock: 12 , company_name: 'Renata', price : 154 },
    { id: 5, name: 'Tylace ', stock: 14 , company_name: 'Opsonin', price : 66 },
    { id: 6, name: 'Virux', stock: 66 , company_name: 'Aristopharma', price : 3 },
    { id: 7, name: 'Virux Tablet', stock: 21 , company_name: 'Aristopharma', price : 5.34 },
    { id: 8, name: 'Virux HC ', stock: 23 , company_name: 'Aristopharma', price : 88 },
    { id: 9, name: 'Fona', stock: 32 , company_name: 'Beximco', price : 12 },
    { id: 10, name: 'Almex', stock: 12 , company_name: 'Beximco', price : 5 },
    { id: 11, name: 'Antiva', stock: 12 , company_name: 'Square', price : 44 },
    { id: 12, name: 'Almex', stock: 23 , company_name: 'Renata', price : 34 },
    { id: 13, name: 'Geston', stock: 32 , company_name: 'Renata', price : 32 },
    { id: 14, name: 'Entacyd', stock: 33 , company_name: 'Square', price : 14 },
    { id: 15, name: 'Apsol', stock: 23, company_name: 'Renata', price : 31 },
    // ... more data
];



const StoksList = () => {
    const columns = [
        { name: 'Name', selector: 'name', sortable: true, },
        { name: 'Stocks', selector: 'stock', sortable: true, },
        { name: 'Price (BDT)', selector: 'price' },
        { name: 'Company name', selector: 'company_name' }
    ];
    return (
        <>
            <Table1
                data={data}
                columns={columns}
                filter_key='name'
                selectable={false}
                tittle="Stocks"
            />
        </>
    )
}

export default StoksList