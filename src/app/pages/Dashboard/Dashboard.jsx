import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LineChart from './LineChart';
import DemoTable from '../../component/table/DemoTable';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    position : 'relative'
}));

const H1 = styled('h1')({
    color : 'var(--primary)',
    textAlign : 'center',
    fontSize : 34
})

const P1 = styled('p')({
    color : 'var(--secondary)',
    textAlign : 'center',
    fontSize : 18
})

const Dashboard = () => {

    const CardBox = ({
        color,
        value,
        name
    }) => (
        <Grid item xs={6} md={3}>
            <Item sx={{background : color || '#fff '}}>
                <H1> {value} </H1>
                <P1> {name} </P1>
            </Item>
        </Grid>
    )

    return (
        <>
            <Box sx={{ flexGrow: 1, marginBottom : 2 }}>
                <Grid container spacing={2}>
                    <CardBox
                        color="#AED6F1"
                        value={10}
                        name="Product"
                    />
                    <CardBox
                        color="#48C9B0"
                        value={10}
                        name="Stock"
                    />
                    <CardBox
                        color="#D2B4DE"
                        value={10}
                        name="Companies"
                    />
                     <CardBox
                        color="#E59866"
                        value={10}
                        name="Order"
                    />
                </Grid>
            </Box>

            <Paper sx={{padding: 2, marginBottom : 2}}>
                <LineChart/>
            </Paper>

            <Grid item md={8}>
                <DemoTable/>
            </Grid>
        </>
    )
}

export default Dashboard