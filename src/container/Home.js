import React from 'react'
import { Grid, Paper, Avatar, Typography } from '@material-ui/core'
import  Logo  from '.././Fred_man-512.png'
import WelcomeCard from '../components/Cards/card'


const Home = ()=>{
    return(
        <React.Fragment>
        <Grid 
        container spacing={0} direction="column" 
        alignItems="center" justify="center"
        className="grid-color"
        >
                    <Grid  item xs={3} className="grid-xs" >
                       <Avatar
                       alt="avatar" 
                       src={Logo}
                       style={{width:"30vh", height:"30vh"}}
                       ></Avatar>
                    </Grid>
                    <Grid item xs={3} className="grid-xs-banner">
                        <Typography variant='h4'>Full Stack Developer</Typography>
                        <hr></hr>
                         <Paper style={{opacity: .7}}>
                             <Typography variant="h6">Javascript|React|Redux|Node|Express</Typography>
                         </Paper>
                         <br></br>
                    </Grid>
                    <Grid item xs={3} className="grid-xs">
                          <WelcomeCard />
                          <br></br>
                    </Grid>
        </Grid>
             
        </React.Fragment>
    )
}

export default Home