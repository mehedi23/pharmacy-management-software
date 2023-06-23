import React, {useState} from 'react'
import Table1 from 'app/component/table/Table1';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Autocomplete from '@mui/material/Autocomplete';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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


const tomorrow = dayjs().add(1, 'day');

const StoksList = () => {
    const columns = [
        { name: 'Name', selector: 'name', sortable: true, },
        { name: 'Stocks', selector: 'stock', sortable: true, },
        { name: 'Price (BDT)', selector: 'price' },
        { name: 'Company name', selector: 'company_name' },
        {
            cell: (e) => (
                <>
                {console.log(e)}
                    Delete
                </>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };



    return (
        <>
            <Table1
                data={data}
                columns={columns}
                filter_key='name'
                crud={true}
                tittle="Products"

                // onSelectedRowsChange={handleChange}
                selectableRows={true}
                paginationResetDefaultPage={false}
                pagination

                addButton={true}
                addDialogVoid={handleClickOpen}
            />




            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                maxWidth="lg"
            >
                <DialogTitle>
                    <h4> Add New Product </h4>
                </DialogTitle>



                <DialogContent style={{paddingTop : 24,}} >
                    <div className='product-dialog-content'>
                        <TextField 
                            label="Produc Name *"
                            variant="outlined"
                            fullWidth
                        />
                        <Autocomplete
                            disablePortal
                            options={top100Films}
                            renderInput={
                                (params) => <TextField 
                                                {...params} 
                                                label="Company name *" 
                                            />
                            }
                        />
                        <TextField 
                            label="Baying price *"
                            variant="outlined"
                            fullWidth
                            type='number'
                        />
                        <TextField 
                            label="Selling price *"
                            variant="outlined"
                            fullWidth
                            type='number'
                        />
                        <TextField 
                            label="Quantity *"
                            variant="outlined"
                            fullWidth
                            type='number'
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={{width: '100%'}}
                                label="Manufacture date *"
                                views={['year', 'month', 'day']}
                            />
                        </LocalizationProvider>
                    </div>
                    <TextField 
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                    />
                </DialogContent>



                <DialogActions
                    sx={{
                        justifyContent : 'space-between',
                        padding: 3
                    }}
                >
                    <Button onClick={handleClose}>Close</Button>
                    <Button variant="contained" onClick={handleClose}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default StoksList


const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]