import Image from 'next/image'
import { Heart, Eye } from 'lucide-react'
import { cn } from '@/app/lib/utils'
import type { MemeCardProps } from '@/app/types/meme'

const MemeCard = ({ meme, priority = false, className }: MemeCardProps) => {
  // Early return nếu không có meme data
  if (!meme) {
    return (
      <div className="bg-gray-100 rounded-lg aspect-square animate-pulse">
        <div className="w-full h-full bg-gray-200 rounded-lg"></div>
      </div>
    )
  }

  const handleCardClick = () => {
    // TODO: Navigate to meme detail page
    console.log(`Clicked on meme: ${meme.id}`)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCardClick()
    }
  }

  return (
    <div
      className={cn(
        'group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        className
      )}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View meme: ${meme.title}`}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={meme.imageUrl}
          alt={meme.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        {/* Overlay with stats */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
          <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>{meme.likes?.toLocaleString() || 0}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{meme.views?.toLocaleString() || 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {meme.title}
        </h3>
        
        {meme.description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {meme.description}
          </p>
        )}

        {/* Tags */}
        {meme.tags && meme.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {meme.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
            {meme.tags.length > 3 && (
              <span className="inline-block text-gray-500 text-xs px-2 py-1">
                +{meme.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Category */}
        {meme.category && (
          <div className="flex items-center justify-between">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
              {meme.category}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(meme.createdAt).getFullYear()}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export { MemeCard }
