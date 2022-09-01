// react-router-dom components
import { Link } from "react-router-dom";

import {
  Checkbox,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
} from "@mui/material";
import { useState } from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import axios from "axios";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover(props) {
  const baseURL = "http://localhost:8090";
  /**
   * 아직 작성 안된것, 이메일 인증, props
   */
  // eslint-disable-next-line no-empty-pattern
  const {} = props;
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = inputs;

  const handleValueChange = (e) => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    setInputs((prev) => ({ ...prev, ...nextState }));
  };

  const signupStart = (e) => {
    console.log(inputs);
    e.preventDefault();

    // console.log('111', data);
    axios
      .post(`${baseURL}/auth/signup`, JSON.stringify(inputs), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        alert("가입되었습니다");
      })
      .catch((err) => {
        console.log("err", err);
        alert("아이디와 비밀번호를 다시 확인해 주세요.");
      });
  };

  /**
   * 해당 지역 부터는 이메일 인증 관련
   */
  const [open, setOpen] = useState(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const emailcheck = () => {};
  /**
   * 폼 그 자체
   */
  return (
    <>
      <CoverLayout image={bgImage}>
        <Card>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="success"
            mx={2}
            mt={-3}
            p={3}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              저희와 가입하세요
            </MDTypography>
            <MDTypography display="block" variant="button" color="white" my={1}>
              Enter your email and password to register
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  name="name"
                  label="name"
                  variant="standard"
                  className="name"
                  required
                  value={name}
                  onChange={handleValueChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="email"
                  label="Email"
                  variant="standard"
                  fullWidth
                  name="email"
                  placeholder="이메일을 입력하세요."
                  className="email"
                  required
                  value={email}
                  onChange={handleValueChange}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="password"
                  label="Password"
                  variant="standard"
                  fullWidth
                  name="password"
                  placeholder="비밀번호를 입력하세요."
                  className="password"
                  required
                  value={password}
                  onChange={handleValueChange}
                />
              </MDBox>
              <MDBox display="flex" alignItems="center" ml={-1}>
                <Checkbox />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;I agree the&nbsp;
                </MDTypography>
                <MDTypography
                  component="a"
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  color="info"
                  textGradient
                >
                  이메일 인증 관련
                </MDTypography>
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton onClick={signupStart} variant="gradient" color="info" fullWidth>
                  sign in
                </MDButton>
              </MDBox>
              <MDBox mt={3} mb={1} textAlign="center">
                <MDTypography variant="button" color="text">
                  Already have an account?{" "}
                  <MDTypography
                    component={Link}
                    to="/authentication/sign-in"
                    variant="button"
                    color="info"
                    fontWeight="medium"
                    textGradient
                  >
                    Sign In
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </CoverLayout>
      <Dialog open={open} onClose={handleClose} className="emailCheckDialog">
        <DialogTitle>이메일 인증 부탁드립니다.</DialogTitle>
        <DialogContent>
          <br />
          <DialogContentText>
            <MDButton variant="outlined" onClick={emailcheck}>
              인증 확인 완료
            </MDButton>
            <MDButton variant="outlined" onClick={handleClose}>
              인증 확인 취소
            </MDButton>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Cover;
