import React,{ Fragment, useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css'; 
import Navbar from './components/Navbar';
import MyCard from './components/Mycard';
import { getMatches } from "./api/Api";
import { Grid, Typography } from "@material-ui/core";

function App() {
  const [matches, setMatches]=useState([]);

  useEffect(()=>{
    getMatches()
    .then((data)=> {setMatches(data.matches)
      console.log(data.matches)})
    .catch((error)=> alert("could not load data"));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Typography variant="h6" style={{marginTop:20}}>Welcome to my Live Score App</Typography>
      
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
        {
        matches.map((match)=>(
          
          <Fragment> 
            { match.type=="Twenty20" ? (<MyCard key={match.unique_id} match={match} /> ):
            (
              ""
            )
            }
          </Fragment>
        ))
      }
        </Grid>
      </Grid>
      
      </div>
  );
}

export default App;
