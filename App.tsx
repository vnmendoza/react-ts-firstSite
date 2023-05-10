import * as React from 'react';
//import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Grid } from '@material-ui/core'
import { Typography } from '@mui/material'
import ListGroup from './components/ListGroup';
import Profile from './components/Profile/Profile'
//import { withStyles } from '@material-ui/core/styles';
//import ListGroup from "./components/ListGroup"

export default function App() {
  return (
    /*
    <Container>
    <Grid container>
      <Grid item xs={12} s={12} md={4} lg={3}>abc </Grid>
      <Grid item xs> xyz</Grid>
    </Grid>
  </Container>
    */
    
   //<Typography variant='h1'> h1 Heading</Typography>
   //<div><ListGroup /></div>
   <div className='App'>
     <Profile name="Victor" messageCount={10} /></div>
  );
}
