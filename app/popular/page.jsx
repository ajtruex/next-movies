import MovieCard from "@/components/MovieCard"
import React from "react"

async function getPopularMovies(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=aebb1ec70575ef6ccfab6d37e09f205d&language=en-US&page=${page}`
  )
  return res.json()
}

const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1

  const popularMovies = await getPopularMovies(page)

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">Popular Movies</h1>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {popularMovies.results.map((movie) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default page
