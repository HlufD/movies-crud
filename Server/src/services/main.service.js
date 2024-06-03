import { CustomError } from "../middlewares/Errors/customError.js";

export async function creatingService(modelName, body, uniqueKey) {
  const existingRow = await modelName.findUnique({ where: { ...uniqueKey } });
  if (existingRow) {
    throw new CustomError("Document already existed", 403, "Duplicated key");
  }
  const row = await modelName.create({
    data: body,
  });
  return row;
}

export async function getSingleRowService(
  modelName,
  id,
  relationFiltering = {}
) {
  const row = await modelName.findUnique({
    where: {
      id: id,
    },
    ...relationFiltering,
  });

  if (!row) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  return row;
}

export async function retrievingAllFromDb_Service(
  modelName,
  relationFiltering = {}
) {
  const rows = await modelName.findMany({
    ...relationFiltering,
  });
  return rows;
}

export async function updatingRowService(modelName, body, id) {
  const row = await modelName.update({
    where: { id },
    data: body,
  });
  return row;
}

export async function deletingRowService(modelName, id) {
  const row = await modelName.delete({
    where: { id },
  });
  return row;
}
