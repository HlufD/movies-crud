import { z } from "zod";

export const logInSchema = z.object({
  username: z
    .string()
    .min(3, { message: "username should be at least 4 characters!" }),
  password: z
    .string()
    .min(5, { message: "password should be at least 5 characters!" }),
});

export type LoginSchema = z.infer<typeof logInSchema>;

// channel
export const channelSchema = z.object({
  name: z.string().min(3, { message: "Name cannot be less than 3 characters" }),
});

export type ChannelSchema = z.infer<typeof channelSchema>;

// Program

export const programSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title cannot be less than 3 characters!" }),
  duration: z.number().positive("Duration cannot be negative value!"),
  description: z
    .string()
    .min(3, { message: "description cannot be less than 3 characters!" }),
  videoUrl: z
    .string()
    .min(5, { message: "videoUrl cannot be less than 3 characters!" }),
  thumbnail: z
    .string()
    .min(5, { message: "thumbnail cannot be less than 3 characters!" }),
  typeId: z.string().min(1, { message: "TypeId cannot be empty!" }),
  categoryId: z.string().min(1, { message: "CategoryId cannot be empty!" }),
  channelId: z.string().min(1, { message: "ChannelId cannot be empty!" }),
});

export type ProgramSchema = z.infer<typeof programSchema>;
