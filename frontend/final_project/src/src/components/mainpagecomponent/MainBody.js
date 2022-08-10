import { Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box, Container } from "@mui/system";
import React from "react";

const MainBody = () => {
  return (
    <>
      <Box
        sx={{
          maxwidth: 1096,
          height: 560,
          border: 1,
          backgroundColor: "#bbdefb",
        }}
      >
        <Container flud sx={{ marginTop: 5, border: 1, height: 300 }}>
          <Grid container spacing={2}>
            <Grid>
              <p>카드1</p>
            </Grid>
            <Grid>
              <p>카드2</p>
            </Grid>
            <Grid>
              <p>카드3</p>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MainBody;
