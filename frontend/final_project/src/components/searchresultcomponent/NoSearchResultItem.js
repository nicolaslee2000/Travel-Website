import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const NoSearchResultItem = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        width: '850px',
        height: '900px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'mistyrose',
      }}
    >
      <CardContent
        sx={{ width: '500px', display: 'flex', justifyContent: 'center' }}
      >
        <Box>
          <Typography variant='h4'>검색결과가 없습니다.</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NoSearchResultItem;
