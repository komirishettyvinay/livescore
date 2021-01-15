import { Button, Grid, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import vs from "../img/vs.png";
import React from "react";

const MyCard=({match})=>{
    
    const getMatchCart=()=>{
        return (
            <Card style={{marginTop: 20 }}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h5">{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{width:285}} src={vs} alt=""/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{match["team-2"]}</Typography>                       
                        </Grid>
                    </Grid>               
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                        <Button variant="contained" color="primary">
                            Show Details
                        </Button>

                        <Button style={{marginLeft:5}} variant="contained" color="secondary">
                            {new Date().toString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    }
    return (
        getMatchCart()
    );
};

export default MyCard;