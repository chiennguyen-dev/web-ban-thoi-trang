import { Button, Grid2, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <div>
      <Grid2
        className="bg-black text-white  mt-20 "
        container
        spacing={38}
        justifyContent="center"
        sx={{ bgcolor: "black", color: "white", py: 3 ,textAlign: "center", minHeight: "20vh"}}
      >
        <Grid2  columns={{ xs: 12, sm: 6, md: 3 }}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Công ty{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Giới thiệu{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Báo chí{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Việc làm{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Đối tác{" "}
            </Button>
          </div>
        </Grid2>
        <Grid2    columns={{ xs: 12, sm: 6, md: 3 }}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Giải pháp{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Tiếp thị{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Phân tích{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Thương mại{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Thông tin chi tiết{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Hỗ trợ{" "}
            </Button>
          </div>
        </Grid2>
        <Grid2   columns={{ xs: 12, sm: 6, md: 3 }}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Tài liệu{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Hướng dẫn{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Trạng thái API{" "}
            </Button>
          </div>
        </Grid2>
        <Grid2    columns={{ xs: 12, sm: 6, md: 3 }}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Pháp lý{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Khiếu nại{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Quyền riêng tư{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6"   style={{ marginBottom: '16px' }}>
              {" "}
              Điều khoản{" "}
            </Button>
          </div>
        </Grid2>
        <Grid2 className="px-0"   columns={{ xs: 12}} sx={{ mt:-25 }}>
        
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 Công ty của tôi. Mọi quyền được bảo lưu.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Được tạo bằng tình yêu bởi Tôi.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Các biểu tượng được tạo bởi{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{" "}
            từ{" "}
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Footer;
