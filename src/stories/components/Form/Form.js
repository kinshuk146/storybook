import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const useStyles = styled((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
    },
  },
}));

const BusinessTypeOptions = [
  { value: 'Interior Design Firm', label: 'Interior Design Firm' },
  { value: 'Retail Store', label: 'Retail Store' },
  { value: 'Hospitality Industry', label: 'Hospitality Industry (Hotel, Resort, Restaurant, etc.)' },
  { value: 'E-commerce Retailer', label: 'E-commerce Retailer' },
  { value: 'Contractor/Builder', label: 'Contractor/Builder' },
  { value: 'Wholesaler/Distributor', label: 'Wholesaler/Distributor' },
  { value: 'Other', label: 'Other (specify)' },
];

const MuiForm = (props) => {
    const { variant,required,labels} = props
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <Grid container spacing={3} xs={6} style={{marginLeft:'auto',marginRight:'auto',marginTop:'2rem'}} >
        <Grid item xs={6} >
          <TextField
            required={required}
            label={labels.First}
            variant={variant}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} >
          <TextField
            required={required}w
            id="lastName"
            label="Last Name"
            variant={variant}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required={required}
            id="businessName"
            label="Business Name"
            variant={variant}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="gstNo"
            label="GST No."
            variant={variant}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            id="businessType"
            label="Business Type"
            variant={variant}
            fullWidth
            defaultValue=""
          >
            {BusinessTypeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required={required}
            id="streetAddress"
            label="Street Address"
            variant={variant}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required={required}
            id="city"
            label="City"
            variant={variant}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required={required}
            id="stateProvince"
            label="State/Province"
            variant={variant}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required={required}
            id="zipCode"
            label="Zip/Postal Code"
            variant={variant}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required={required}
            id="country"
            label="Country"
            variant={variant}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required={required}
            id="email"
            label="Email Address"
            variant={variant}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} >
          <TextField
            required={required}
            id="phoneNumber"
            label="Phone Number"
            variant={variant}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} >
          <TextField
            id="website"
            label="Website (if applicable)"
            variant={variant}
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default MuiForm;
