import MovieCard from "@/components/MovieCard"
import React from "react"

async function getUpcomingMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=aebb1ec70575ef6ccfab6d37e09f205d&language=en-US&page=1`
  )
  return res.json()
}

const upcoming = async () => {
  const upcomingMovies = await getUpcomingMovies()

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">Upcoming Movies</h1>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {upcomingMovies.results.map((movie) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default upcoming
