import React from 'react'
import{ AppBar, Toolbar, Typography, Tabs, Tab} from '@material-ui/core'

const Header = ()=>{
    return(
        <AppBar className="header-color" position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" flex>Rahul Kombathula</Typography>
          <Tabs
            variant="standard"
            indicatorColor="secondary"
            textColor="primary"
            aria-label="Social Network Tabs"
            centered
          >
            <Tab />
            <Tab />
            <Tab />
          </Tabs>
        </Toolbar>
      </AppBar>
    )
   
}

export default Header