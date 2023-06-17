import React from 'react'
import Table1 from 'app/component/table/Table1';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const data = [
    { id: 1, name: 'Beacon', total_products: 16 },
    { id: 2, name: 'Beximco ', total_products: 8 },
    { id: 3, name: 'Essential Drugs', total_products: 4 },
    { id: 4, name: 'Genvio', total_products: 14 },
    { id: 5, name: 'Healthcare', total_products: 12 },
];



const CompanyList = () => {
    const columns = [
        { name: 'ID', selector: 'id' },
        { name: 'Name', selector: 'name', sortable: true, },
        { name: 'Total Product', selector: 'total_products', sortable: true, }
    ];

    const handleChange = ({ selectedRows }) => {
        console.log('Selected Rows: ', selectedRows);
    };


    return (
        <>
            <Paper style={{
                marginBottom : 20,
                padding : 20,
            }}>
                <h2> Add New Company </h2>
                <div
                    style={{
                        display : 'flex',
                        gap : 10,
                        marginTop : 30
                    }}
                >
                    <TextField 
                        label="Company Name"
                        variant="outlined" 
                    />

                    <Button variant="outlined" startIcon={<AddIcon />}>
                        Save
                    </Button>
                </div>
            </Paper>

            <Table1
                data={data}
                columns={columns}
                filter_key='name'
                crud={true}
                tittle="Company List"

                onSelectedRowsChange={handleChange}
                selectableRows={true}
                paginationResetDefaultPage={false}
                pagination
            />
        </>
    )
}

export default CompanyList