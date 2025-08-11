import { Meme, MemeSchema, MemesResponse, MemesResponseSchema } from '@/app/types/meme'

// Mock data cho development
const MOCK_MEMES: Meme[] = [
  {
    id: '1',
    title: 'Classic Doge',
    description: 'The original Doge meme that started it all',
    imageUrl: '/images/doge.webp',
    thumbnailUrl: '/images/doge-thumb.webp',
    category: 'classic',
    tags: ['doge', 'classic', 'cryptocurrency'],
    createdAt: '2013-12-01',
    likes: 15420,
    views: 892340,
  },
  {
    id: '2',
    title: 'Pepe the Frog',
    description: 'Iconic Pepe meme',
    imageUrl: '/images/pepe.webp',
    thumbnailUrl: '/images/pepe-thumb.webp',
    category: 'classic',
    tags: ['pepe', 'frog', 'classic'],
    createdAt: '2005-01-01',
    likes: 23890,
    views: 1234567,
  },
  {
    id: '3',
    title: 'Distracted Boyfriend',
    description: 'The famous distracted boyfriend meme',
    imageUrl: '/images/distracted-boyfriend.webp',
    thumbnailUrl: '/images/distracted-boyfriend-thumb.webp',
    category: 'reaction',
    tags: ['reaction', 'boyfriend', 'choice'],
    createdAt: '2017-01-02',
    likes: 45123,
    views: 2345678,
  },
  {
    id: '4',
    title: 'Drake Pointing',
    description: 'Drake pointing and rejecting meme format',
    imageUrl: '/images/drake.webp',
    thumbnailUrl: '/images/drake-thumb.webp',
    category: 'reaction',
    tags: ['drake', 'pointing', 'choice'],
    createdAt: '2015-05-15',
    likes: 67890,
    views: 3456789,
  },
  {
    id: '5',
    title: 'Woman Yelling at Cat',
    description: 'Woman yelling at confused cat meme',
    imageUrl: '/images/woman-cat.webp',
    thumbnailUrl: '/images/woman-cat-thumb.webp',
    category: 'reaction',
    tags: ['cat', 'woman', 'argument'],
    createdAt: '2019-05-01',
    likes: 89012,
    views: 4567890,
  },
  {
    id: '6',
    title: 'This is Fine Dog',
    description: 'Dog sitting in burning room saying this is fine',
    imageUrl: '/images/this-is-fine.webp',
    thumbnailUrl: '/images/this-is-fine-thumb.webp',
    category: 'reaction',
    tags: ['dog', 'fire', 'fine'],
    createdAt: '2013-01-09',
    likes: 78901,
    views: 5678901,
  },
]

// Custom error classes
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public code?: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

// API functions
export const fetchMemes = async (
  page: number = 1,
  limit: number = 20
): Promise<MemesResponse> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // For now, return mock data
    // In production, this would be: const response = await fetch(`/api/memes?page=${page}&limit=${limit}`)
    
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedMemes = MOCK_MEMES.slice(startIndex, endIndex)

    const responseData = {
      memes: paginatedMemes,
      total: MOCK_MEMES.length,
      page,
      limit,
    }

    // Validate response data
    const validatedResponse = MemesResponseSchema.parse(responseData)
    return validatedResponse
  } catch (error) {
    if (error instanceof Error) {
      throw new ApiError(`Failed to fetch memes: ${error.message}`)
    }
    throw new ApiError('Unknown error occurred while fetching memes')
  }
}

export const fetchMemeById = async (id: string): Promise<Meme> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))

    const meme = MOCK_MEMES.find(m => m.id === id)
    
    if (!meme) {
      throw new ApiError(`Meme with id ${id} not found`, 404, 'MEME_NOT_FOUND')
    }

    // Validate meme data
    const validatedMeme = MemeSchema.parse(meme)
    return validatedMeme
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    if (error instanceof Error) {
      throw new ApiError(`Failed to fetch meme: ${error.message}`)
    }
    throw new ApiError('Unknown error occurred while fetching meme')
  }
}

export const searchMemes = async (
  query: string,
  category?: string,
  page: number = 1,
  limit: number = 20
): Promise<MemesResponse> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 400))

    let filteredMemes = MOCK_MEMES

    // Filter by search query
    if (query) {
      const lowercaseQuery = query.toLowerCase()
      filteredMemes = filteredMemes.filter(
        meme =>
          meme.title.toLowerCase().includes(lowercaseQuery) ||
          meme.description?.toLowerCase().includes(lowercaseQuery) ||
          meme.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      )
    }

    // Filter by category
    if (category) {
      filteredMemes = filteredMemes.filter(meme => meme.category === category)
    }

    // Paginate
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedMemes = filteredMemes.slice(startIndex, endIndex)

    const responseData = {
      memes: paginatedMemes,
      total: filteredMemes.length,
      page,
      limit,
    }

    return MemesResponseSchema.parse(responseData)
  } catch (error) {
    if (error instanceof Error) {
      throw new ApiError(`Failed to search memes: ${error.message}`)
    }
    throw new ApiError('Unknown error occurred while searching memes')
  }
}
