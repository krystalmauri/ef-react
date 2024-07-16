/**
=========================================================
* Eventflow.app React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useRef, useState } from "react";
import FormControl from '@mui/material/FormControl';


// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';


// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Eventflow.app React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKInput from "../../../components/MKInput";
import MKButton from "../../../components/MKButton";
import { styled } from '@mui/material/styles';


// Eventflow.app React example components
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../../../examples/Footers/SimpleFooter";

// Eventflow.app React page layout routes
import routes from "../../../routes";

// Images
import bgImage from "../../../assets/images/bg1.jpg";
import { InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";
import { SelectChangeEvent } from '@mui/material/Select';
import { city_names } from "../../../ef-constants";


function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);

  const [email, setEmail] = useState('');
  const [tags, setTags] = useState('');
  const [vendorType, setType] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [count, setCount] = useState(0);

  const [addOnsText, setAddOnsText] = useState('');
  const [addOns, setAddOns] = useState([]);
  const [majorCity, setMajorCity] = useState('');
  const [number, setNumber] = useState('');
  const [hours, setHours] = useState('');
  const [cleanedPicture, setCleanedPicture] = useState('');
  const [pictureUrl, setPictureUrl] = useState('assets/placeholder.png');


  const [status, setStatus] = useState({ loading: false, err: false });
  const [file, setFile] = useState('http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image');


  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


  const uploadImage = (event) => {
    console.log("hello image");
    const fileUploadInput = document.querySelector('.file-uploader');
    /// Validations ///
    console.log('value ', fileUploadInput.value);
    if (!fileUploadInput.value) {
    return;
    }
    // using index [0] to take the first file from the array
    const image = fileUploadInput.files[0];
    // check if the file selected is not an image file
    if (!image.type.includes('image')) {
    console.log('Only images are allowed!');
    }
    // check if size (in bytes) exceeds 10 MB
    if (image.size > 10_000_000) {
    return alert('Maximum upload size is 10MB!');
    }
    /// Display the image on the screen ///
    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onload = (fileReaderEvent) => {
    const profilePicture = document.querySelector('.profile-picture');
    //profilePicture.style.backgroundImage = `url(${fileReaderEvent.target.result})`;
    //setPictureUrl(profilePicture.style.backgroundImage);
    console.log('display ' , fileReaderEvent.target.result);

    }

    // upload image to the server or the cloud
    
    }

  const handleChange = (event) => {
    setType(event.target.value);
  };

  function handleImageChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}


  function displaySelectedImage(event, elementId) {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            selectedImage.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}

  const businessTypeDropdown = [
    'Catering', 'DJs and Promoters','Event Decorator', 'Equipment Rental', 'Experience', 'Event Planner', 'Photography and Videography', 'Security', 'Transportation', 'Venue'
];

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Vendor Registration
                </MKTypography>
               
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth onChange={(event) => setEmail(event.detail.value)}/>
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="text" label="Vendor Name" fullWidth onChange={(event) => setName(event.detail.value)} />
                  </MKBox>
                  

<MKBox mb={2}>
<VisuallyHiddenInput type="file" />
<input type="file" onChange={handleImageChange} />
            <img src={file} />
</MKBox>

                  <MKBox mb={2}>
                    <MKInput type="text" label="Vendor Description" fullWidth onChange={(event) => setDescription(event.detail.value)} />
                  </MKBox> 
                  <MKBox mb={2}>
                    <MKInput type="text" label="Vendor Address" fullWidth onChange={(event) => setAddress(event.detail.value)} />
                  </MKBox>
                
                  <MKBox mb={2}>

                   {// <MKInput type="text" label="Business Type" fullWidth onChange={(event) => setName(event.detail.value)} /> 
                   }
                    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Business Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="vendor-type"
    value={vendorType}
    label="Vendor Type"
    onChange={handleChange}

  >
    {businessTypeDropdown.map((businessType) => (
              <MenuItem  key={businessType} value={businessType}>
                {businessType}
              </MenuItem >
            ))}
  </Select>
</FormControl>
                  </MKBox>
                  
                  <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={city_names}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Nearest Major City" />}
    />
                  
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth>
                      sign up
                    </MKButton>
                  </MKBox>
         
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
