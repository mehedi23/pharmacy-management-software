import React from 'react'
import Table1 from 'app/component/table/Table1';

const data = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    // ... more data
];

const columns = [
    { name: 'ID', selector: 'id' },
    { name: 'Name', selector: 'name', sortable: true, },
    { name: 'Age', selector: 'age', sortable: true, },
    {
				
        cell: () => <button >Action</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
];

function CompanyList() {
    return (
        <>
            <Table1
                data={data}
                columns={columns}
                filter_key='name'
            />
        </>
    )
}

export default CompanyList