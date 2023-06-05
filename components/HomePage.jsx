import React from "react"
import MovieCard from "@/components/MovieCard"

async function getTheatersMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=aebb1ec70575ef6ccfab6d37e09f205d&language=en-US&page=1`
  )
  return res.json()
}

const HomePage = async () => {
  const theatersMovies = await getTheatersMovies()

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="grid grid-cols-4 mt-4 gap-4">
          {theatersMovies.results.map((movie) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default HomePage
