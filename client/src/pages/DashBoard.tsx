import PageWrapper from "../components/admin/PageWrapper";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import HdOutlinedIcon from "@mui/icons-material/HdOutlined";

import InformationDisplay from "../components/admin/InformationDisplay";
import Box from "@mui/material/Box";
import ChartPie from "../components/admin/Pichart";
import ChartLine from "../components/admin/ChartLine";

function DashBoardPage() {
  return (
    <PageWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <InformationDisplay
          Icon={<PeopleAltOutlinedIcon />}
          userCount={556}
          incrementRate={12}
        />
        <InformationDisplay
          Icon={<HdOutlinedIcon />}
          userCount={556}
          incrementRate={12}
        />
        <InformationDisplay
          Icon={<MovieCreationOutlinedIcon />}
          userCount={556}
          incrementRate={12}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: 7,
          justifyContent: "space-between",
        }}
      >
        <ChartPie />
        <ChartLine />
      </Box>
    </PageWrapper>
  );
}

export default DashBoardPage;
