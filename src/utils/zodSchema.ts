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
      .min(1, {
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
    userId: z
      .string()
      .min(4, {
        message: "userId must be atleast 4 characters",
      })
      .refine(
        (data) => {
          const regex = /^[a-zA-Z0-9_]+$/;
          return regex.test(data);
        },
        {
          message: "Invalid userId format",
        }
      ),
    password: z
      .string()
      .min(8, {
        message: "Password must contain atleast 8 characters",
      })
      .max(100, {
        message: "Password can't be more than 100 characters",
      }),
    confirmPassword: z
      .string()
      .min(8, {
        message: "Confirm password must contain atleast 8 characters",
      })
      .max(100, {
        message: "Confirm password can't be more than 100 characters",
      }),
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
    userId: z
      .string()
      .min(4, {
        message: "userId must be atleast 4 characters",
      })
      .refine(
        (data) => {
          const regex = /^[a-zA-Z0-9_]+$/;
          return regex.test(data);
        },
        {
          message: "Invalid userId format",
        }
      ),
    password: z.string().min(8).max(300),
  })
  .strict()
  .refine((data) => !(data.email.length > 0 && data.userId.length > 0), {
    message: "Enter either email or userId",
    path: ["userId", "email"],
  });
