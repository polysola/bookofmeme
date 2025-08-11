import { z } from 'zod'

// Schema validation cho Meme data
export const MemeSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  imageUrl: z.string().url(),
  thumbnailUrl: z.string().url().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  createdAt: z.string().or(z.date()),
  likes: z.number().default(0),
  views: z.number().default(0),
})

export type Meme = z.infer<typeof MemeSchema>

// Schema cho response từ API
export const MemesResponseSchema = z.object({
  memes: z.array(MemeSchema),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
})

export type MemesResponse = z.infer<typeof MemesResponseSchema>

// Props cho các components
export interface MemeCardProps {
  meme: Meme
  priority?: boolean
  className?: string
}

export interface MemeGridProps {
  memes: Meme[]
  isLoading?: boolean
  error?: string | null
}
