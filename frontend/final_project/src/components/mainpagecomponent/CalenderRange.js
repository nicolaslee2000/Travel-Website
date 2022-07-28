import React, { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CalenderComp = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  //ESC누르면 꺼짐
  const hideOnEscape = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      setOpen(false);
    }
  };
  //바깥쪽 누르면 닫힘
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current);
    // console.log(e.target);

    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  // //날짜 변경시 데이터 상태 저장

  // const handelSelect = (date) => {
  //   // console.log(date);
  //   //console.log(format(date, "MM/dd/yyyy"));
  //   setCalendar(format(date, "MM/dd/yyyy"));
  // };

  return (
    <div className="calendarWrap">
      <input
        value={`
        ${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
          range[0].endDate,
          "MM/dd/yyyy"
        )}`}
        readOnly
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default CalenderComp;
