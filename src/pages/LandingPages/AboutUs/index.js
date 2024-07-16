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
import Card from "@mui/material/Card";

// Eventflow.app React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

// Eventflow.app React examples
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";

// About Us page sections
import Information from "../AboutUs/sections/Information.js";
import Team from "../AboutUs/sections/Team.js";
import Featuring from "../AboutUs/sections/Featuring.js";
import Newsletter from "../AboutUs/sections/Newsletter.js";

// Routes
import routes from "../../../routes.js";
import footerRoutes from "../../../footer.routes.js";

// Images
import bgImage from "../../../assets/images/bg1.jpg";

import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../../../firebase.ts';


function AboutUs() {
  const [venues, setEntries] = useState([]);
  const [ search, setSearch ] = useState("");

  const bg = "https://server54.web-hosting.com:2083/cpsess8127163539/viewer/home%2fkryspknt%2feventflow.app%2fimages/bg1.jpg";


  async function getVendors(){
    //  const q = query(collection(firestore, "Vendors"), where("vendor_type", "==", "Designer"));
      const q = query(collection(firestore, "Saint Louis"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const entries = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(doc.id, "all => ", doc.data());
    console.log('my entries ', entries);
    setEntries(entries);
  });
  }

  useEffect(() => {
    getVendors();

  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Your Specialist in Event Planning
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            Discover EventFlow, your ultimate platform for orchestrating unforgettable weddings 
            and milestone birthday celebrations. Available everywhere, our 
            app connects you effortlessly with exceptional vendors and manages every detail with precision.
            </MKTypography>
           
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="https://www.facebook.com/profile.php?id=61559047094216" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="https://www.instagram.com/eventflow.app/" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="https://www.tiktok.com/@eventflow.app" mr={3}>
                <i className="fab fa-tiktok" />
              </MKTypography>
            
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Featuring />
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
