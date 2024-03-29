import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Stack, TextField } from "@mui/material";

const CalenderComp = (props) => {
    const { onWay, update } = props;
    // props가져올때 const {} = props; 하고 중괄호에 props이름 써주면 보기에도 편하고 좋습니다.
    // 위에 파라미터가 props가 아니라 뭐 예를들어  CalenderComp = (앙기모띠)) 면  const {} = 앙기모띠; 이렇게 쓰시면됩니다
    //updateEven = ((prev) => ({ ...prev, defart: e }))
    const [fromDate, setfromDate] = useState(format(new Date(), "yyyy-MM-dd"));
    const [toDate, setToData] = useState(format(new Date(), "yyyy-MM-dd"));

    const hadleToChange = (date) => {
        if (!onWay) {
            setToData(format(date, "yyyy-MM-dd"));
        } else {
            setToData(null);
        }
    };

    const handleFromChange = (date) => {
        setfromDate(format(date, "yyyy-MM-dd"));
    };

    //fromDate 업데이트 시 부모컴포넌트에서 준 이벤트를 다시 줌
    useEffect(() => {
        update((prev) => ({ ...prev, departDate: fromDate }));
    }, [fromDate]);

    useEffect(() => {
        update((prev) => ({ ...prev, returnDate: toDate }));
    }, [toDate]);

    useEffect(() => {
        if (onWay) {
            update((prev) => ({ ...prev, returnDate: null }));
        }
    }, [onWay]);

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack direction="row">
                    <DesktopDatePicker
                        label="출발일"
                        inputFormat="yyyy.MM.dd"
                        value={fromDate}
                        type="fromData"
                        onChange={handleFromChange}
                        renderInput={(params) => (
                            <TextField sx={{ minHeight: 50 }} {...params} />
                        )}
                    />
                    <DesktopDatePicker
                        label="도착일"
                        inputFormat="yyyy.MM.dd"
                        value={toDate}
                        onChange={hadleToChange}
                        disabled={onWay}
                        renderInput={(params) => (
                            <TextField sx={{ minHeight: 50 }} {...params} />
                        )}

                        //showDaysOutsideCurrentMonth
                        //minDate={"0"}
                        //lable="disable"을 사용하면 선택을 못하게 가능
                    />
                    {/* <MobileDatePicker
            label="Date mobile"
            inputFormat="yyyy-MM-dd"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          /> */}
                </Stack>
            </LocalizationProvider>
        </>
    );
};

export default CalenderComp;

//지난날 선택 못하게 하는거 우선 보류
//https://stackoverflow.com/questions/70350351/how-to-show-mindate-on-open-with-mui-datepicker
//https://stackoverflow.com/questions/70095364/mui-datepickers-shoulddisabledate-prop-leading-to-error
//https://stackoverflow.com/questions/49491569/disable-specific-days-in-material-ui-calendar-in-react
