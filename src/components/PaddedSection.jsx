import { Box } from "@mui/material";

export default function PaddedSection({ sectionName, useAltBackground, children }) {
  return (
    <Box id={sectionName}
      sx={{
        bgcolor: useAltBackground ? 'background.secondary' : 'background.primary',
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: 'center',
      }}
    >
      {children}
    </Box>
  );
};