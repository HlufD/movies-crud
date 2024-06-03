import { addChannel } from "../app/features/channel/channelSclice";

export const normalizePath = (path: string) => path.replace(/\/+$/, "");
export const urlToPageMap = new Map([
  ["/admin", "Dashboard"],
  ["/admin/channels", "Channel"],
  ["/admin/programs", "Program"],
]);

export const urlTOActionMap = new Map([["/admin/channels", addChannel]]);
