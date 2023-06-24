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
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]

const data = [
    { 
        id: 1, 
        product_name: 'Napa', 
        company_name: top100Films[1], 
        baying_price : 233,
        selling_price : 300,
        stock: 16 , 
        manufacture_date : new Date(),
        description : 'this is very good product',
    },
];



const StoksList = () => {
    const [openProductModal, setOpenProductModal] = useState(false);
    const [openDescription, setOpenDescription] = useState(false);
    const [descriptionContent, setDescriptionContent] = useState('');
    const [editableData, setEditableData] = useState(new Object());

    const handleClickOpen = () => {
        setEditableData(new Object())
        setOpenProductModal(true);
    };
  
    const handleClose = () => {
        setOpenProductModal(false);
    };

    const descriptionOpen = (data) => {
        setOpenDescription(true);
        setDescriptionContent(data);
    };
  
    const descriptionClose = () => {
        setOpenDescription(false);
    };

    const editingVoid = (data) => {
        setEditableData(data);
        setOpenProductModal(true);
    }


    const columns = [
        { name: 'Name', selector: 'product_name', sortable: true, },
        { name: 'Stocks', selector: 'stock', sortable: true, },
        { name: 'Baying Price (BDT)', selector: 'baying_price' },
        { name: 'Selling Price (BDT)', selector: 'selling_price' },
        { name: 'Company', selector: row => row.company_name.label },
        {
            cell: (data) => (
                <Tooltip title="Description">
                    <IconButton 
                        onClick={()=>{
                            descriptionOpen(data)
                        }}
                        
                    >
                        <InfoIcon
                            sx={{color : '#8ab8e9'}}
                        />
                    </IconButton>
                </Tooltip>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            cell: (data) => (
                <>
                    <IconButton 
                        aria-label="edit"
                        onClick={() => editingVoid(data)}
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
        }
    ];


    return (
        <>
            <Table1
                data={data}
                columns={columns}
                filter_key='product_name'
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
                open={openProductModal}
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
                            label="Product Name *"
                            variant="outlined"
                            fullWidth
                            value={editableData?.product_name || ''}
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
                            value={editableData?.baying_price || ''}
                        />
                        <TextField 
                            label="Selling price *"
                            variant="outlined"
                            fullWidth
                            type='number'
                            value={editableData?.selling_price || ''}
                        />
                        <TextField 
                            label="Quantity *"
                            variant="outlined"
                            fullWidth
                            type='number'
                            value={editableData?.stock || ''}

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
                        value={editableData?.description || ''}
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


            <Dialog
                open={openDescription}
                TransitionComponent={Transition}
                keepMounted
                onClose={descriptionClose}
                maxWidth="lg"
            >
                <DialogTitle sx={{fontWeight : 'bold'}}> Description </DialogTitle>
                <DialogContent>
                    <div className='product-description-modal'>
                        <label>Manufacture date :</label>
                        <p style={{marginBottom : 20}}>
                        {dayjs(descriptionContent?.manufacture_date).format('DD-MM-YYYY')}
                        </p>

                        <label>Description :</label>
                        <p>
                        { descriptionContent?.description }
                        </p>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={descriptionClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default StoksList


