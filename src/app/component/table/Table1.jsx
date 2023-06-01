import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/system';



const TopSection = styled('div')({
    display : 'flex',
    justifyItems:'center',
    width: '100%',
    justifyContent : 'space-between',
    marginBottom : 20
});


const Table =({
    data,
    columns,
    filter_key = 'name',
    crud=false,
    selectable=true,
    tittle='Tittle'
}) => {

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [columnsList, setColumnsList] = useState(columns)
  
    const filteredItems = data.filter((item) =>
        item[filter_key] && item[filter_key].toLowerCase().includes(filterText.toLowerCase())
    );


    useEffect(()=> {
        if(crud){
            setColumnsList([
                ...columns,
                {
                    cell: () => (
                        <>
                            <IconButton 
                                aria-label="edit"
                            >
                                <EditIcon color='success'/>
                            </IconButton>
                            <IconButton 
                                aria-label="delete" 
                                sx={{marginLeft : 2}}
                            >
                                <DeleteIcon color='error' />
                            </IconButton>
                        </>
                    ),
                    ignoreRowClick: true,
                    allowOverflow: true,
                    button: true,
                },
            ])
        }
    },[columns])
  

    return (
        <Paper sx={{padding : '30px 10px'}}>

            <TopSection>
                <h2> {tittle} </h2>
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
                        padding : 0,
                        width : 300,
                    }}
                />
            </TopSection>
            <DataTable
                columns={columnsList}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                selectableRows={selectable}
                persistTableHead
            />
        </Paper>
    )
}

export default Table