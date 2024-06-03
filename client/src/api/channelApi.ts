import axios from "../services/axios";
import { Channel } from "../types/types";

export const fetchChannelsApi = async (): Promise<Channel[]> => {
  const response = await axios.get("/channels");
  return response.data["channels"];
};

export const addChannelApi = async (newChannel: Channel): Promise<Channel> => {
  const response = await axios.post("/channels/add", newChannel);
  return response.data["channel"];
};

export const editChannelApi = async (
  updatedChannel: Channel
): Promise<Channel> => {
  const response = await axios.put(
    `channels/${updatedChannel.id}`,
    updatedChannel
  );
  return response.data as Channel;
};

export const deleteChannelApi = async (channelId: string): Promise<void> => {
  await axios.delete(`/channels/${channelId}`);
};
