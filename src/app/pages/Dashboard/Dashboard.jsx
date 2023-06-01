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
    color : '#fff',
    textAlign : 'center',
    fontSize : 34
})

const P1 = styled('p')({
    color : '#fff',
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
                        color="#58508d"
                        value={8234}
                        name="Product"
                    />
                    <CardBox
                        color="#bc5090"
                        value={9788}
                        name="Stock"
                    />
                    <CardBox
                        color="#ff6361"
                        value={22}
                        name="Companies"
                    />
                     <CardBox
                        color="#ffa600"
                        value={45}
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