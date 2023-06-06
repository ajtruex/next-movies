import MovieCard from "@/components/MovieCard"
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"
import Ratings from "@/components/Ratings"

async function getMovieDetails(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=aebb1ec70575ef6ccfab6d37e09f205d&language=en-US`
  )
  return res.json()
}

async function getRatings(title) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=98cae6de&t=${title}`)
  return res.json()
}

const page = async ({ params }) => {
  const { id } = params
  const movie = await getMovieDetails(id)
  const ratings = await getRatings(movie?.title)
  console.log(ratings?.Ratings.map((rating) => rating))

  const durationHours = Math.round(movie?.runtime / 60)
  const durationMinutes = Math.round(movie?.runtime % 60)

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          width={380}
          height={380}
          alt=""
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{movie?.title}</h1>
          <div className="flex gap-4 items-center mt-4">
            <h5 className="text-md font-medium">
              {dayjs(movie?.release_date).format("MMM DD YYYY")}
            </h5>
            <h5> | </h5>
            {movie?.runtime > 0 && (
              <>
                <h5 className="text-md font-medium">{`${durationHours}h ${durationMinutes}m`}</h5>
                <h5> | </h5>
              </>
            )}
            <h5 className="text-md font-medium">
              {movie?.genres?.map((genre) => genre?.name).join(", ")}
            </h5>
          </div>
          <p className="py-6">{movie?.overview}</p>
          <div className="grid grid-cols-2 w-1/2 mx-auto">
            {ratings?.Ratings.map((rating) => (
              <>
                <p key="rating?.Source" className="-mr-2">
                  {rating?.Source}:
                </p>
                <Ratings key={rating?.Source} rating={rating?.Value} />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
    // <main className="mt-5 flex flex-col">
    //   <div className="w-[1000px] max-w-full px-4 mx-auto">
    //     <div className="flex flex-col mt-6">
    //       <div className="flex gap-7">
    //         <div className="flex relative">
    //           <div className="w-[270px] h-[400px] relative">
    //             <Image
    //               src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
    //               width={380}
    //               height={380}
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //         <div className="flex flex-col">
    //           <div className="flex gap-3 items-center">
    //             <h2 className="text-xl font-medium">{movie?.title}</h2>
    //             <span
    //               className={`flex flex-col p-2 text-white rounded-md ${
    //                 movie?.vote_average < 5
    //                   ? `bg-red-700`
    //                   : movie?.vote_average == 5
    //                   ? `bg-orange-700`
    //                   : `bg-green-700`
    //               }`}
    //             >
    //               {movie?.vote_average}
    //             </span>
    //           </div>
    //           <div className="flex gap-4 items-center mt-4">
    //             <h5 className="text-md font-medium">{movie?.release_date}</h5>
    //             <h5> | </h5>
    //             {movie?.runtime > 0 && (
    //               <>
    //                 <h5 className="text-md font-medium">{`${durationHours}h ${durationMinutes}m`}</h5>
    //                 <h5> | </h5>
    //               </>
    //             )}
    //             <h5 className="text-md font-medium">
    //               {movie?.genres?.map((genre) => genre?.name).join(", ")}
    //             </h5>
    //           </div>
    //           <div className="flex flex-col mt-5">
    //             <p className="text-md font-normal">{movie?.overview}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  )
}

export default page
