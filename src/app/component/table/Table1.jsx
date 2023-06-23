import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/system';
import _ from 'lodash';
import AddIcon from '@mui/icons-material/Add';







const TopSection = styled('div')({
    display : 'flex',
    justifyItems:'center',
    width: '100%',
    justifyContent : 'space-between',
    marginBottom : 20
});


const Table =({
    data, // table body data
    columns, // table colums
    filter_key = 'name', // search filter object key 
    crud=false, // is edit
    tittle='Tittle', // tittle
    addButton=false, // can add
    addDialogVoid= () => {}, // add button funtion
    ...props
}) => {

    const [columnsList, setColumnsList] = useState(columns)
    const [tableData, setTableData] = useState(data)
    

    function filterObjects(searchQuery) {
        const lowercaseQuery = searchQuery.toLowerCase();
        return _.filter(data, (obj) => {
            return _.some(obj, (value) => {
                const lowercaseValue = value.toString().toLowerCase();
                return _.includes(lowercaseValue, lowercaseQuery);
            });
        });
    };

    const filteringTeble = (e) => {
        const result = filterObjects(e);
        setTableData(result);
    };


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
                <h2> 
                    {tittle}

                    {
                        addButton &&
                        <IconButton 
                            aria-label="add" 
                            size="small"
                            onClick={addDialogVoid}
                            sx={{
                                marginLeft: 2
                            }}
                        >
                            <AddIcon />
                        </IconButton>
                    }
                </h2>
                <Autocomplete
                    freeSolo
                    disableClearable
                    options={data.map((option) => option[filter_key])}
                    onChange={(e, value)=>{
                        filteringTeble(value)
                    }}
                    renderInput={(params) => (
                        <TextField
                            onChange={(e)=> filteringTeble(e.target.value)}
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
                data={tableData}
                persistTableHead
                {...props}
            />
        </Paper>
    )
}

export default Table