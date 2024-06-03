import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Channel } from "../../../types/types";
import { getErrorMessage } from "../../../services/axios";

import {
  fetchChannelsApi,
  addChannelApi,
  editChannelApi,
  deleteChannelApi,
} from "../../../api/channelApi";
import { RootState } from "../../store";

interface ChannelsState {
  channels: Channel[];
  loading: boolean;
  error: string | null;
}

const initialState: ChannelsState = {
  channels: [],
  loading: false,
  error: null,
};

export const fetchChannels = createAsyncThunk<
  Channel[],
  void,
  { rejectValue: string }
>("channels/fetchChannels", async (_, { rejectWithValue }) => {
  try {
    return await fetchChannelsApi();
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

export const addChannel = createAsyncThunk<
  Channel,
  Channel,
  { rejectValue: string }
>("channels/addChannel", async (newChannel, { rejectWithValue }) => {
  try {
    return await addChannelApi(newChannel);
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

export const editChannel = createAsyncThunk<
  Channel,
  Channel,
  { rejectValue: string }
>("channels/editChannel", async (updatedChannel, { rejectWithValue }) => {
  try {
    return await editChannelApi(updatedChannel);
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

export const deleteChannel = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("channels/deleteChannel", async (channelId, { rejectWithValue }) => {
  try {
    await deleteChannelApi(channelId);
    return channelId;
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannels.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchChannels.fulfilled,
        (state, action: PayloadAction<Channel[]>) => {
          state.loading = false;
          state.channels = action.payload;
        }
      )
      .addCase(fetchChannels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch channels";
      })
      .addCase(addChannel.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        addChannel.fulfilled,
        (state, action: PayloadAction<Channel>) => {
          state.loading = false;
          state.channels.push(action.payload);
        }
      )
      .addCase(addChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add channel";
      })
      .addCase(editChannel.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        editChannel.fulfilled,
        (state, action: PayloadAction<Channel>) => {
          state.loading = false;
          const index = state.channels.findIndex(
            (channel) => channel.id === action.payload.id
          );
          if (index !== -1) {
            state.channels[index] = action.payload;
          }
        }
      )
      .addCase(editChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to edit channel";
      })
      .addCase(deleteChannel.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        deleteChannel.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.channels = state.channels.filter(
            (channel) => channel.id !== action.payload
          );
        }
      )
      .addCase(deleteChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete channel";
      });
  },
});

export const { setLoading, setError } = channelsSlice.actions;

export default channelsSlice.reducer;

export const selectChannels = (state: RootState) => state.channels.channels;
export const selectChannelLoading = (state: RootState) =>
  state.channels.loading;
export const selectChannelError = (state: RootState) => state.channels.error;
