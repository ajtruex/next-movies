import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie?.id}`} className="w-full flex flex-col">
      <div className="card shadow-xl">
        <figure>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            width={380}
            height={380}
            alt=""
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{movie?.title}</h2>
          <p>{movie?.overview}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
