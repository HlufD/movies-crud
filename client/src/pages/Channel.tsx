import { Box } from "@mui/material";
import PageWrapper from "../components/admin/PageWrapper";
import DataGrid from "../components/admin/DataTable";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchChannels } from "../app/features/channel/channelSclice";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
  },
];

function ChannelPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { channels } = useSelector((state: RootState) => state.channels);
  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  return (
    <PageWrapper>
      <Box sx={{ marginTop: 4 }}>
        <DataGrid rows={channels} columns={columns} path="channels" />
      </Box>
    </PageWrapper>
  );
}

export default ChannelPage;
