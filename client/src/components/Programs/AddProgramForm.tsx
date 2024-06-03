import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { ProgramSchema, programSchema } from "../../validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField } from "@mui/material";

function AddProgramForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      title: " ",
      duration: 0,
      description: "",
      videoUrl: "",
      thumbnail: "",
      typeId: "",
      categoryId: "",
      channelId: "",
    },
    resolver: zodResolver(programSchema),
  });
  const onSubmit: SubmitHandler<ProgramSchema> = (data) => {
    // dispatch something
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        width: "700px",
        gap: "15px",
      }}
    >
      <Box>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Title"
              type="text"
              variant="outlined"
              error={!!errors.title}
              helperText={errors.title?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="duration"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Duration"
              type="text"
              variant="outlined"
              error={!!errors.duration}
              helperText={errors.duration?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              type="text"
              variant="outlined"
              error={!!errors.description}
              helperText={errors.description?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="videoUrl"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Video Url"
              type="text"
              variant="outlined"
              error={!!errors.videoUrl}
              helperText={errors.videoUrl?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
      </Box>
      <Box>
        <Controller
          name="thumbnail"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Thumbnail"
              type="text"
              variant="outlined"
              error={!!errors.thumbnail}
              helperText={errors.thumbnail?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="categoryId"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Category Id"
              type="text"
              variant="outlined"
              error={!!errors.categoryId}
              helperText={errors.categoryId?.message}
              fullWidth
              margin="normal"
            />
          )}
        />

        <Controller
          name="channelId"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Channel Id"
              type="text"
              variant="outlined"
              error={!!errors.channelId}
              helperText={errors.channelId?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="typeId"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Type Id"
              type="text"
              variant="outlined"
              error={!!errors.typeId}
              helperText={errors.typeId?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
      </Box>

      {/* {error && <p>{error}</p>} */}
    </form>
  );
}

export default AddProgramForm;
