import React=require("react");
//import { Container, Grid, Typography} from '@material-ui/core'
import { Typography } from '@mui/material'

type GreetProps = {
  name: string
  messageCount: number
}

export default function Profile(props: GreetProps) {
  //const items = ["new York", "san francisco", "los angeles", "tokyo"]
  return (
    <div>
      <h2> Welcome {props.name}! You have {props.messageCount} new messages </h2>
    </div>
          //<Typography variant='h1'> h1 heading</Typography>

    /*
    <Container>
      <Grid container>
        <Grid item xs={12} s={12} md={4} lg={3}>abc </Grid>
        <Grid item xs> xyz</Grid>
      </Grid>
    </Container>
    
    <div>
    <h1>List</h1>
    <ul className="list-group">
      {items.map((item)=> (
      <li key={item}>{item}</li>
      ))}
    </ul>
    </div>
    */
  
  )
}