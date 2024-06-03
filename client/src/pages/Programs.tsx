import PageWrapper from "../components/admin/PageWrapper";
import DataGrid from "../components/admin/DataTable";
const rows = [
  {
    id: 5,
    title: "The originals",
    duration: 7200000,
    description: "An action-packed thriller with non-stop excitement.",
    videoUrl: "http://example.com/video",
    thumbnail: "http://example.com/thumbnail",
    channelId: 2,
    typeId: 1,
    categoryId: 1,
  },
  {
    id: 3,
    title: "The vampaier Diaries",
    duration: 7200000,
    description: "An action-packed thriller with non-stop excitement.",
    videoUrl: "http://example.com/video",
    thumbnail: "http://example.com/thumbnail",
    channelId: 1,
    typeId: 2,
    categoryId: 1,
  },
  {
    id: 4,
    title: "The Reacher",
    duration: 7200000,
    description: "An action-packed thriller with non-stop excitement.",
    videoUrl: "http://example.com/video",
    thumbnail: "http://example.com/thumbnail",
    channelId: 2,
    typeId: 1,
    categoryId: 1,
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "title", headerName: "Title", width: 150 },
  { field: "duration", headerName: "Duration", width: 90 },
  { field: "typeId", headerName: "Type Id", width: 150 },
  { field: "channelId", headerName: "Channel Id", width: 150 },
  { field: "categoryId", headerName: "Category Id", width: 90 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
  },
];

function ProgramPage() {
  return (
    <PageWrapper>
      <DataGrid rows={rows} columns={columns} path="programs" />
    </PageWrapper>
  );
}

export default ProgramPage;
