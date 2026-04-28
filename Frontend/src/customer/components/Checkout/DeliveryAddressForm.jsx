import { Box, Button, Grid2, TextField } from "@mui/material";
import React from "react";
import AdressCard from "../AdressCard/AdressCard";

const DeliveryAddressForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
         
        const data = new FormData(e.currentTarget);

        const address = {  
                firstName: data.get("firstName"),  
                lastName: data.get("lastName"),  
                streetAddress: data.get("address"),  
                city: data.get("city"),  
                state: data.get("state"),  
                zipCode: data.get("zip"),  
                mobile: data.get("phoneNumber")  
            }

        console.log("address",address )
    }
  return (
    <div>
      <Grid2 container spacing={4}>
        <Grid2
          size={{ xs: 12, lg: 5 }}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer text-left">
            <AdressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Giao hàng đến đây
            </Button>
          </div>
        </Grid2>

        <Grid2 size={{ xs: 12, lg: 7 }}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid2 container spacing={3}>
                <Grid2 size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="Tên"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Họ"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid2>
                
                <Grid2 size={{ xs: 12}} >
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Địa chỉ"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="Thành phố"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="Tỉnh/Thành phố/Khu vực"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Mã bưu điện"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 6 }}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Số điện thoại"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <Button
              sx={{ py:2, mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
              type="submit"
            >
              Giao hàng đến đây
            </Button>
                </Grid2>
              </Grid2>
            </form>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default DeliveryAddressForm;
