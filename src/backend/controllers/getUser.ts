import { z } from "zod";

const getUserArgSchema = z.object({
  id: z.string().refine((data) => /^[0-9]*$/.test(data)),
});

type GetUserArgType = z.infer<typeof getUserArgSchema>;

export default async function getUser(arg: GetUserArgType) {
  if (!getUserArgSchema.safeParse(arg).success) {
    throw new Error("Invalid ID");
  }

//   const usr = user.find((d) => d.id === arg.id);
//   if (!usr) {
//     return { data: usr, msg: "No User Found" };
//   }
  return { data: "", msg: "" };
}