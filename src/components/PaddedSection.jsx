import { Box } from '@mui/material';
import React from 'react';

export default function PaddedSection({
  sectionName,
  useAltBackground,
  children,
}) {
  return (
    <Box
      id={sectionName}
      sx={{
        bgcolor: useAltBackground
          ? 'background.secondary'
          : 'background.primary',
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: 'center',
        height: '100%',
      }}
    >
      {children}
    </Box>
  );
}
