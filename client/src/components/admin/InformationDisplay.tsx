import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

interface InformationDisplayProps {
  userCount: number;
  Icon: React.ReactNode;
  incrementRate: number;
}

function InformationDisplay({
  userCount,
  Icon,
  incrementRate,
}: InformationDisplayProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: 3,
        justifyContent: "space-evenly",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>System users</h4>
          {Icon}
        </Box>
        <Box marginTop={3}>
          <Typography>{userCount}</Typography>
          <Typography marginTop={1}>
            +{incrementRate}% from last month.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default InformationDisplay;
