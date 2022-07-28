import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [seat, setSeat] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSeat(event.target.value);
  };

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        성인 1명,일반석
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 4 }}>인원, 좌석, 등급을 설정해주세요</Typography>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">좌석</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={seat}
              label="좌석"
              onChange={handleChange}
            >
              <MenuItem value="Economy">Economy</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="First class">First class</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Popover>
    </div>
  );
}
