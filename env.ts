import { z } from "zod";

const envVariables = z.object({
  MONGO_URI: z.string()
})

envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}