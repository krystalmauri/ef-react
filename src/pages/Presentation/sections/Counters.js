/*
=========================================================
* Eventflow.app React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Eventflow.app React components
import MKBox from "../../../components/MKBox";

// Eventflow.app React examples
import DefaultCounterCard from "../../../examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <h1>How It Works</h1>
      
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={70}
              suffix="+"
              title="Discover and Connect"
              description="Tap into our curated network of vendors for weddings and milestone 
              birthdays. Choose your ideal venue, caterer, and more with ease."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={15}
              suffix="+"
              title="Plan and Organize"
              description="Use our innovative tools to schedule, budget, and oversee your event, 
              ensuring a delightful planning experience from anywhere, anytime."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              
              title="Celebrate and Share"
              description="Experience the magic of your dream event and share the joy with everyone who matters"
            />
          </Grid>
         
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
