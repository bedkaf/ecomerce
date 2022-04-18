import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import CheckoutCard from "./CheckoutCard";
import dataProducts from "../produc-data";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    padding: "2rem",
  },

  content: {
    display: "block",
    margin: "0px auto",
  },

}));

const CheckoutPage = () => {

  const classes = useStyles();

  function FomrRow() {
    return(
      <>
        {dataProducts.map((item) => (
          <Grid item xs={12} sm={6} lg={4} key={item.id}  >
            <CheckoutCard  product={item} />
          </Grid>
        ))}
      </>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >

        <Grid item xs={12} >
          <Typography align='center' gutterBottom variant="h4" >
            Shopping Cart
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8} md={9} container spacing={3} >
          <FomrRow />
        </Grid>

        <Grid item xs={12} ms={4} md={3} >
          <Typography align="center" gutterBottom variant="h4" >
            Total
          </Typography>
        </Grid>

      </Grid>
    </div>
  )
}

export default CheckoutPage;