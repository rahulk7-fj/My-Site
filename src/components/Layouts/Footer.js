import React from 'react'
import  { Paper, Tabs, Tab} from '@material-ui/core'
import { Instagram, Facebook, LinkedIn } from '@material-ui/icons'

const Footer = ()=>{
     return(
      <Paper square>
          <Tabs
            variant="standard"
            indicatorColor="secondary"
            textColor="primary"
            aria-label="Social Network Tabs"
            centered
          >
            <Tab icon={<Instagram style={{color: '#3f729b'}}/>} aria-label="Instagram" href="https://www.instagram.com/k7rahul/"/>
            <Tab icon={<Facebook  style={{color: '#3b5998'}}/>} aria-label="Facebook" href="https://www.facebook.com/profile.php?id=100041003657268"/>
            <Tab icon={<LinkedIn  style={{color: '#0e76a8'}}/>} aria-label="LinkedIn" href="https://www.linkedin.com/in/rahul-k-587180a1/" />
          </Tabs>
      </Paper>
     )
}
export default Footer