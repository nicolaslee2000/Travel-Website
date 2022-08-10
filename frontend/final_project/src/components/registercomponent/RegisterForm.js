import { Input, Tab, Tabs } from "@mui/material";
import Button from "@mui/material/Button";
import "./registerForm.css";
import React, { useState } from "react";
import { Container } from "@mui/system";
import { NavLink, useNavigate } from "react-router-dom";

function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div hidden={value !== index} style={{ width: "100%" }}>
            {<div>{children}</div>}
        </div>
    );
}

const RegisterForm = () => {
    const baseURL = "http://localhost:8090";
    const ACCESS_TOKEN = "accessToken";

    const navigate = useNavigate();

    const [value, setValue] = React.useState(0);
    // const [register, setRegister] = useState([]);

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = inputs;

    const handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        setInputs((prev) => {
            return { ...prev, ...nextState };
        });
    };

    function signup(inputs) {
        return request({
            url: baseURL + "/auth/signup",
            method: "POST",
            body: JSON.stringify(inputs),
        });
    } // POST 호출 부분 분리

    const request = (options) => {
        const headers = new Headers({
            "Content-Type": "application/json",
        });

        if (localStorage.getItem(ACCESS_TOKEN)) {
            headers.append(
                "Authorization",
                "Bearer " + localStorage.getItem(ACCESS_TOKEN)
            );
        }

        const defaults = { headers: headers };
        options = Object.assign({}, defaults, options);

        return fetch(options.url, options).then((response) =>
            response.json().then((json) => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
    }; //JWT

    const handleSubmit = async (e) => {
        console.log(inputs);
        e.preventDefault();
        signup(inputs);

        //회원가입 완료되면 registed 창이 뜨게 설정
        navigate("/registed");
    };

    return (
        <>
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit}>
                    <div className="tab-regform">
                        <div className="tab-head">
                            <Tabs value={value}>
                                <Tab label="통합회원 회원가입" />
                            </Tabs>
                        </div>
                        <div className="form">
                            <TabPanel value={value} index={0} className="test">
                                <div className="register active">
                                    <h2>통합회원 회원가입 </h2>
                                    <div className="form-input">
                                        <label>이름 &nbsp; &nbsp; </label>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="이름 입력하세요."
                                            className="name"
                                            required
                                            value={name}
                                            onChange={handleValueChange}
                                        ></Input>
                                    </div>
                                    <div className="form-input">
                                        <label>아이디 &nbsp; &nbsp; </label>
                                        <Input
                                            type="text"
                                            name="email"
                                            placeholder="이메일을 입력하세요."
                                            className="email"
                                            required
                                            value={email}
                                            onChange={handleValueChange}
                                        ></Input>
                                    </div>
                                    <div className="form-input">
                                        <label>비밀번호 &nbsp; </label>
                                        <Input
                                            type="password"
                                            name="password"
                                            placeholder="비밀번호를 입력하세요."
                                            className="password"
                                            required
                                            value={password}
                                            onChange={handleValueChange}
                                        ></Input>
                                    </div>
                                    <div className="form-input">
                                        <br></br>
                                        <Button variant="text" href="/">
                                            이전
                                        </Button>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                        >
                                            확인
                                        </Button>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </form>
            </Container>
        </>
    );
};

export default RegisterForm;
