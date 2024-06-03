import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  { name: "Live Tv", value: 400 },
  { name: "Movies", value: 300 },
  { name: "Tv Series", value: 300 },
  { name: "Anime", value: 200 },
];

function ChartPie() {
  return (
    <Paper sx={{ padding: 1 }}>
      <Box>
        <Typography>Program on Category</Typography>
      </Box>
      <PieChart width={450} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />

        <Tooltip />
      </PieChart>
    </Paper>
  );
}

export default ChartPie;
