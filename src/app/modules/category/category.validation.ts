import { z } from 'zod'

export const categoryValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Category Name is Required' }),
  }),
})
