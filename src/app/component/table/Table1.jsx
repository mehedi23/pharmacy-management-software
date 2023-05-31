import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Paper} from '@mui/material';



const Table =({
    data,
    columns,
    filter_key = 'name'
}) => {

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  
    const filteredItems = data.filter((item) =>
        item[filter_key] && item[filter_key].toLowerCase().includes(filterText.toLowerCase())
    );
  

    return (
        <Paper sx={{padding : '30px 10px'}}>
            <div style={{maxWidth : 300, marginLeft: 'auto'}}>
                <Autocomplete
                    freeSolo
                    disableClearable
                    options={data.map((option) => option[filter_key])}
                    onChange={(e, value)=>{
                        setFilterText(value);
                    }}
                    renderInput={(params) => (
                        <TextField
                            onChange={(e)=> setFilterText(e.target.value)}
                            {...params}
                                label="Search input"
                                InputProps={{
                                ...params.InputProps,
                                type: 'search',
                                
                            }}
                        />
                    )}
                    style={{
                        padding : 0
                    }}
                />
            </div>
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                selectableRows
                persistTableHead
            />
        </Paper>
    )
}

export default Table