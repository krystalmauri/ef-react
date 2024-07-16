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

// Eventflow.app React components
import MKBox from "../../../../components/MKBox";

// Eventflow.app React examples
import DefaultInfoCard from "../../../../examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "../../../../examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Discover and Connect"
                    description="Tap into our curated network of vendors for weddings and milestone birthdays. Choose your ideal venue, caterer, and more with ease."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Plan and Organize"
                    description="Use our innovative tools to schedule, budget, and oversee your event, ensuring a delightful planning experience from anywhere, anytime."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Celebrate and Share"
                    description="Experience the magic of your dream event and share the joy with everyone who matters."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Improved platform"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://eventflow.app/gallery_gen/e6f94fd8f2f013b2c15a02a759b98632_fit.png"
              title="Join the Eventflow Community!"
              description="Are you a top-tier vendor specializing in weddings or milestone birthday celebrations? We want you! EventFlow is launching this summer on Android and iOS, and we’re on the lookout for exceptional venues, caterers, DJs, decorators, and more to feature on our platform.
              Be part of a revolutionary event planning app designed to connect you with clients who value quality and creativity. As an EventFlow partner, you'll gain access to a broader audience and benefit from our extensive marketing efforts, including dedicated shout-outs on our TikTok, Instagram, and Facebook pages.
              Don’t miss this opportunity to elevate your business and reach new heights. Let’s create unforgettable events together!"
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "become a vendor",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
