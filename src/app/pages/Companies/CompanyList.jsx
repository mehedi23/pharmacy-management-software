import React, {useState} from 'react'
import Table1 from 'app/component/table/Table1';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const data = [
    { id: 1, name: 'Beacon', total_products: 16 },
    { id: 2, name: 'Beximco ', total_products: 8 },
    { id: 3, name: 'Essential Drugs', total_products: 4 },
    { id: 4, name: 'Genvio', total_products: 14 },
    { id: 5, name: 'Healthcare', total_products: 12 },
];

const columns = [
    { name: 'ID', selector: 'id' },
    { name: 'Name', selector: 'name', sortable: true, },
    { name: 'Total Product', selector: 'total_products', sortable: true, }
];



const CompanyList = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    


    const handleChange = ({ selectedRows }) => {
        console.log('Selected Rows: ', selectedRows);
    };


    return (
        <>
            <Table1
                data={data}
                columns={columns}
                filter_key='name'
                tittle="Company List"

                onSelectedRowsChange={handleChange}
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
                maxWidth="md"
            >
                <DialogTitle>
                    <h4> Add New Company </h4>
                </DialogTitle>

                <DialogContent style={{paddingTop : 24}}>
                    <TextField 
                        label="Company Name"
                        variant="outlined" 
                        sx={{
                            width : 600
                        }}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button variant="contained" onClick={handleClose}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CompanyList