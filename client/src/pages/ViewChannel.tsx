import React from "react";
import PageWrapper from "../components/admin/PageWrapper";
import { useParams } from "react-router-dom";

function ViewChannel() {
  const { id } = useParams<{ id: string }>();

  return <PageWrapper>{id}</PageWrapper>;
}

export default ViewChannel;
