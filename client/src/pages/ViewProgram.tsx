import { useParams } from "react-router-dom";
import PageWrapper from "../components/admin/PageWrapper";

function ViewProgram() {
  const { id } = useParams<{ id: string }>();
  return <PageWrapper>{id}</PageWrapper>;
}

export default ViewProgram;
