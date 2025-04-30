import { z } from "zod"

export type SchemaType= z.infer<typeof Schema>
export type SignUpSchemaType= z.infer<typeof SignUpSchema>

export const Schema = z.object({
  username: z
    .string()
    .min(5, "Username must be upper than 5 character"),
  password: z
    .string()
    .min(8, "Password must be upper than 8 character")
})
export const SignUpSchema = z.object({
  username: z
    .string()
    .min(5, "Username must be upper than 5 character"),
  password: z
    .string()
    .min(8, "Password must be upper than 8 character"),
  email: z
    .string()
    .refine(
      (value) => /\S+@\S+\.\S+/.test(value), "Enter truth format of email"
    )
})