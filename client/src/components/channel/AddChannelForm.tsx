import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { ChannelSchema, channelSchema } from "../../validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addChannel,
  selectChannelError,
  selectChannelLoading,
} from "../../app/features/channel/channelSclice";
import { AppDispatch, RootState } from "../../app/store";

function AddChannelForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => ({
    loading: selectChannelLoading(state),
    error: selectChannelError(state),
  }));

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(channelSchema),
  });

  const onSave: SubmitHandler<ChannelSchema> = async (data) => {
    console.log("Form Submitted", data);
    await dispatch(addChannel(data));
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSave)}>
      <Stack>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Channel Name"
              type="text"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
              margin="normal"
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "black",
            marginTop: 3,
          }}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Channel"}
        </Button>
        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
      </Stack>
    </form>
  );
}

export default AddChannelForm;
