import React, { useState } from "react";
import "./travlerHeader.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from "./ConfirmDialog";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import {
    orderInit,
    travelerInit,
} from "../../reduxes/modules/searchInfoReducer3";
import { useNavigate } from "react-router-dom";
import { border } from "@mui/system";
import TravelerInfo from "../../pages/userDashboard/TravelerInfo/TravelerInfo";
import { Container } from "@mui/material";
import { BASE_URL } from "../../ApiConnect/constants";

const ConfirmButton = () => {
    const flightRedux = useSelector((state) => {
        return state.searchReducer3;
    });

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [conOpen, setConOpen] = useState(false);
    const [travelerData, setTravelerData] = useState({
        id: "",
        fname: "",
        lname: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        countryCode: "",
        phoneNumber: "",
        passportNumber: "",
        nationality: "",
        passportExpiryDate: "",
    });
    const navigate = useNavigate();

    const travlerConfirm = () => {
        //팝업 창 띄우도록
        <ConfirmDialog />;
    };

    const textFiledArr3 = [
        {
            id: "input_id",
            label: "id을 입력하세요",
            value: travelerData.id,
            onChange: (newValue) => {
                setTravelerData((prev) => {
                    return { ...prev, id: newValue.target.value };
                });
            },
        },
        {
            id: "input_fname",
            label: "fname을 입력하세요",
            value: travelerData.fname,
            onChange: (newValue) => {
                setTravelerData((prev) => {
                    return { ...prev, fname: newValue.target.value };
                });
            },
        },
        {
            id: "input_lname",
            label: "lname을 입력하세요",
            value: travelerData.lname,
            onChange: (newValue) => {
                setTravelerData((prev) => {
                    return { ...prev, lname: newValue.target.value };
                });
            },
        },
        {
            id: "input_dateOfBirth",
            label: "dateOfBirth을 입력하세요",
            value: travelerData.dateOfBirth,
            onChange: (newValue) => {
                setTravelerData((prev) => {
                    return { ...prev, dateOfBirth: newValue.target.value };
                });
            },
        },
        {
            id: "input_gender",
            label: "gender을 입력하세요",
            value: travelerData.gender,
            onChange: (newValue) => {
                setTravelerData((prev) => {
                    return { ...prev, gender: newValue.target.value };
                });
            },
        },
        {
            id: "input_email",
            label: "email을 입력하세요",
            value: travelerData.email,
            onChange: (newValue) => {
                setTravelerData((prev) => {
                    return { ...prev, email: newValue.target.value };
                });
            },
        },
        {
            id: "input_countryCode",
            label: "countryCode을 입력하세요",
            value: travelerData.countryCode,
            onChange: (newValue) => {
                setTravelerData((prev) => {
                    return { ...prev, countryCode: newValue.target.value };
                });
            },
        },
        {
            id: "input_phoneNumber",
            label: "phoneNumber을 입력하세요",
            value: travelerData.phoneNumber,
            onChange: (newValue) => {
                setTravelerData((prev) => {
                    return { ...prev, phoneNumber: newValue.target.value };
                });
            },
        },
        {
            id: "input_passportNumber",
            label: "passportNumber을 입력하세요",
            value: travelerData.passportNumber,
            onChange: (newValue) => {
                setTravelerData((prev) => {
                    return { ...prev, passportNumber: newValue.target.value };
                });
            },
        },
        {
            id: "input_nationality",
            label: "nationality을 입력하세요",
            value: travelerData.nationality,
            onChange: (newValue) => {
                setTravelerData((prev) => {
                    return { ...prev, nationality: newValue.target.value };
                });
            },
        },
        {
            id: "input_passportExpiryDate",
            label: "passportExpiryDate을 입력하세요",
            value: travelerData.passportExpiryDate,
            onChange: (newValue) => {
                setTravelerData((prev) => {
                    return {
                        ...prev,
                        passportExpiryDate: newValue.target.value,
                    };
                });
            },
        },
    ];

    //const [emailData, setEmailData] = useState('');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConOrder = () => {
        // setConOpen(true);
        console.log("결제확인정보 : ", flightRedux.flightPrice);
        console.log("여행자정보 : ", flightRedux.traveler);
        // postOrder(flightRedux);
        console.log("이제 다음화면으로 넘겨야함");
        setConOpen(false);
        navigate("/finalConfirm");
    };

    const handleConClose = () => {
        setConOpen(false);
    };

    const handleConfirm = () => {
        // 첫 팝업창에서 확인 눌렀을 때 이벤트
        console.log("travelerData 입니다...", travelerData);
        postTraveler(travelerData);
        setOpen(false);

        // 이거 조건문 걸어야할거같음(다음 팝업창 띄우는거)
        setConOpen(true);
    };

    const postTraveler = async (sendData) => {
        console.log("sendData : ", { data: sendData });
        await axios
            .post(
                BASE_URL + "/flight/traveler",
                JSON.stringify({ data: sendData }),
                {
                    headers: {
                        "Content-Type": `application/json`,
                    },
                }
            )
            .then((response) => {
                console.log("세번째 데이터 입니다.", response.data);
                dispatch(travelerInit(response.data));
                console.log("세번째 데이터 리덕스 저장");
            });
    };

    // const postOrder = async (sendData) => {
    //     console.log("sendData.flightPrice", sendData.flightPrice);
    //     console.log("sendData.traveler", sendData.traveler);
    //     await axios
    //         .post(
    //             "http://localhost:8090/flight/order",
    //             JSON.stringify({
    //                 data: {
    //                     type: "flight-order",
    //                     flightOffers: sendData.flightPrice.flightOffers,
    //                     travelers: [sendData.traveler],
    //                 },
    //             }),
    //             {
    //                 headers: {
    //                     Accept: "application/json",
    //                     "Content-Type": "application/json",
    //                 },
    //             }
    //         )
    //         .then((response) => {
    //             console.log("마지막 데이터", response.data);
    //             dispatch(orderInit(response.data));
    //         });
    // };
    ///////////////////////////////////////////////////////////////////////
    return (
        <div>
            <Box>
                <TravelerInfo isBooking={true} />
            </Box>
            <Container
                sx={{
                    justifyContent: "center",
                    mt: 10,
                    display: "flex",
                }}
            >
                <Button onClick={handleClickOpen} variant="contained">
                    <Typography fontSize={25} fontWeight={"border"}>
                        항공예약
                    </Typography>
                </Button>
            </Container>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>예약자 정보를 입력하세요</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        입력후 확인 버튼을 누르세요
                    </DialogContentText>
                    {textFiledArr3.map((element, idx) => {
                        return (
                            <TextField
                                key={idx}
                                autoFocus
                                margin="dense"
                                id={element.id}
                                label={element.label}
                                value={element.value || ""}
                                onChange={element.onChange}
                                fullWidth
                                variant="standard"
                            />
                        );
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button onClick={handleConfirm}>확인</Button>
                </DialogActions>
            </Dialog>

            {/* 다 받고 보낸후 확인창 뜨나 확인부터 */}
            <Dialog open={conOpen} onClose={handleConClose}>
                <DialogTitle>예약자 정보입니다</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        확인을 누르면 예약이 완료됩니다.
                    </DialogContentText>
                    <DialogContentText>
                        id : {flightRedux.traveler.id || ""}
                    </DialogContentText>
                    <DialogContentText>
                        dateOfBirth : {flightRedux.traveler.dateOfBirth || ""}
                    </DialogContentText>
                    <DialogContentText>
                        firstName :
                        {flightRedux.traveler.name === undefined
                            ? ""
                            : flightRedux.traveler.name.firstName}
                        {/* firstName : {flightRedux.traveler.name.firstName || ''} */}
                    </DialogContentText>
                    <DialogContentText>
                        {/* lastName : {flightRedux.traveler.name.lastName || ''} */}
                    </DialogContentText>
                    <DialogContentText>
                        {/* phonesNumber : {flightRedux.traveler.contact.phones[0].number || ''} */}
                    </DialogContentText>
                    <DialogContentText>
                        documentType :{" "}
                        {/* {flightRedux.traveler.documents[0].documentType || ''} */}
                    </DialogContentText>
                    <DialogContentText>
                        {/* expiryDate : {flightRedux.traveler.documents[0].expiryDate || ''} */}
                    </DialogContentText>
                    <DialogContentText>
                        {/* nationality : {flightRedux.traveler.documents[0].nationality || ''} */}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConClose}>취소</Button>
                    <Button onClick={handleConOrder}>확인</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ConfirmButton;
