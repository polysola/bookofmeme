'use client'

import { Suspense } from 'react'
import { MemeCard } from '@/app/components/meme-card/meme-card'
import { LoadingSpinner } from '@/app/components/ui/loading-spinner'
import { cn } from '@/app/lib/utils'
import type { MemeGridProps } from '@/app/types/meme'

// Loading skeleton component
const MemeCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="aspect-square bg-gray-200"></div>
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
      <div className="flex space-x-2">
        <div className="h-5 bg-gray-200 rounded-full w-16"></div>
        <div className="h-5 bg-gray-200 rounded-full w-12"></div>
      </div>
    </div>
  </div>
)

// Error state component
const ErrorState = ({ error }: { error: string }) => (
  <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
    <div className="text-red-500 mb-4">
      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Có lỗi xảy ra</h3>
    <p className="text-gray-600 mb-4">{error}</p>
    <button 
      onClick={() => window.location.reload()} 
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Thử lại
    </button>
  </div>
)

// Empty state component
const EmptyState = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
    <div className="text-gray-400 mb-4">
      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Không tìm thấy meme nào</h3>
    <p className="text-gray-600">Hãy thử tìm kiếm với từ khóa khác hoặc quay lại sau.</p>
  </div>
)

const MemeGrid = ({ memes, isLoading = false, error = null }: MemeGridProps) => {
  // Early return cho error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ErrorState error={error} />
        </div>
      </div>
    )
  }

  // Early return cho empty state
  if (!isLoading && (!memes || memes.length === 0)) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <EmptyState />
        </div>
      </div>
    )
  }

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Bộ sưu tập Memes kinh điển
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Khám phá những meme huyền thoại đã định hình văn hóa internet từ những ngày đầu
        </p>
      </div>

      {/* Grid Container */}
      <div className={cn(
        'grid gap-6 transition-all duration-300',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        // Responsive gap
        'gap-4 sm:gap-6'
      )}>
        {/* Loading state */}
        {isLoading && (
          <>
            {Array.from({ length: 12 }).map((_, index) => (
              <MemeCardSkeleton key={`skeleton-${index}`} />
            ))}
          </>
        )}

        {/* Meme cards */}
        {!isLoading && memes && memes.map((meme, index) => (
          <Suspense 
            key={meme.id} 
            fallback={<MemeCardSkeleton />}
          >
            <MemeCard 
              meme={meme} 
              priority={index < 4} // Prioritize first 4 images for LCP
              className="transform hover:-translate-y-1 transition-transform duration-200"
            />
          </Suspense>
        ))}
      </div>

      {/* Load More Button */}
      {!isLoading && memes && memes.length > 0 && (
        <div className="mt-12 text-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium inline-flex items-center space-x-2">
            <span>Xem thêm memes</span>
            {isLoading && <LoadingSpinner size="sm" className="border-white border-t-gray-900" />}
          </button>
        </div>
      )}
    </section>
  )
}

export { MemeGrid }
