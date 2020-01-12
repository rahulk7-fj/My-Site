import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core'
import logo from '../../avatar.png'

class welcomeCard extends React.Component{
    render(){
        return(
            <Card style={{maxWidth:370}}>
                <CardActionArea>
                    <CardMedia style={{height:175}}
                      image={logo}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Welcome!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Hope you're doing great. This is a react, redux application.
                        Stay tuned !! For dataviz services..
                        Thank's for Visiting.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

export default welcomeCard