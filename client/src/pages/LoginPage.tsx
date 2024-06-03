import React, { useEffect } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { LoginSchema, logInSchema } from "../validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Person, Lock } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import {
  loginUser,
  selectUserLoading,
  selectUserError,
  selectUser,
} from "../app/features/user/userSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state: RootState) => ({
    user: selectUser(state),
    loading: selectUserLoading(state),
    error: selectUserError(state),
  }));

  const theme = useTheme();
  const below763px = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(logInSchema),
  });

  useEffect(() => {
    if (user) {
      navigate("/admin");
    }
  }, [user, navigate]);

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: below763px ? "column" : "row",
        width: 740,
        height: 500,
        margin: "5% auto",
      }}
    >
      <Box
        sx={{
          width: "50%",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: 300, height: 230 }}>
          <img src="balckleaf.png" alt="" className="login-logo-image" />
        </Box>
        <Typography
          variant="h2"
          component="h4"
          color={"white"}
          sx={{
            fontWeight: 500,
          }}
        >
          T-Movies
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <Stack>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Username"
                  type="text"
                  variant="outlined"
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Stack>
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              textTransform: "capitalize",
              backgroundColor: "black",
              marginTop: 3,
            }}
          >
            {loading ? <CircularProgress /> : "Login"}
          </Button>
          {error && <p>{error}</p>}
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;
