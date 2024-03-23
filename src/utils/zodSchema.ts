import { z } from "zod";
import validEnglishWord from "./validEnglishWord";

export const SignUpUserSchema = z
  .object({
    firstname: z
      .string()
      .min(1, {
        message: "firstname can't be less than 1 letters",
      })
      .max(50, {
        message: "firstname can't be more than 50 letters",
      })
      .refine((data) => validEnglishWord(data), {
        message: "Only english letters and one space in between is allowed",
      }),
    lastname: z
      .string()
      .min(3, {
        message: "lastname can't be less than 1 letters",
      })
      .max(50, {
        message: "lastname can't be more than 50 letters",
      })
      .refine((data) => validEnglishWord(data), {
        message: "Only english letters and one space in between is allowed",
      }),
    email: z.string().email({
      message: "Invalid email",
    }),
    password: z.string().min(8).max(100),
    confirmPassword: z.string().min(8).max(100),
  })
  .strict()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must be equal",
    path: ["confirmPassword"],
  });

export const LoginUserSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email",
    }),
    password: z.string().min(8).max(300),
  })
  .strict();
