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
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";


// Eventflow.app React examples
import RotatingCard from "../../../examples/Cards/RotatingCard";
import RotatingCardFront from "../../../examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../../../examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "../../../assets/images/rotating-card-bg-front.jpeg";
import bgBack from "../../../assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Plan Your Dream Event With
                    <br/>
                    Eventflow
                  </>
                }
                description="Are you ready to create an unforgettable event? Whether you're organizing a wedding, milestone birthday, 
                or any special occasion, EventFlow is your ultimate event planning solution. Our app connects you with top-rated wedding 
                venues, experienced event planners, and trusted caterers. Use our detailed wedding checklists, birthday party planners, and 
                intuitive tools to ensure every detail is perfect."
              />
              <RotatingCardBack
                image={bgBack}
                title="Sign Up Today"
                description="Sign up today to start planning your dream event with EventFlow! Join our community and gain access 
                to expert event planning resources, exclusive vendor deals, and comprehensive planning guides. Transform your wedding or 
                birthday celebration into a seamless and enjoyable experience."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "join now",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
           <MKTypography>
           Welcome to EventFlow, where every significant life event — especially weddings and milestone birthdays — is transformed into memorable celebrations. Founded with the mission to simplify the complex event planning process, EventFlow connects you with the finest vendors to match your vision and budget, ensuring your event is nothing short of spectacular.
With EventFlow, planning becomes a part of the celebration itself. From picturesque wedding venues to vibrant birthday parties, our user-friendly app supports you every step of the way. Designed for both Android and iOS platforms, EventFlow is accessible to every planner on the go.
Our dedicated team, passionate about making your special days unforgettable, upholds values of sustainability, community engagement, and innovation. Follow our journey on TikTok, Instagram, and Facebook for inspiration and updates as we prepare for our exciting launch this summer. Join us at EventFlow, where your milestones are celebrated with elegance and joy!
           </MKTypography>
       
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
