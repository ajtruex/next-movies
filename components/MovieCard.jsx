import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

const MovieCard = ({ movie }) => {
  return (
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
    // <Card className="w-[380px]">
    //   <CardHeader>
    //     <Image
    //       src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
    //       width={380}
    //       height={380}
    //       alt=""
    //     />

    //     <CardTitle>{movie?.title}</CardTitle>
    //     <CardDescription className="flex flex-wrap w-[380px]">
    //       {movie?.overview}
    //     </CardDescription>
    //   </CardHeader>
    //   <CardContent className="grid gap-4">
    //     <p>{movie?.overview}</p>
    //   </CardContent>
    //   <CardFooter>
    //     <p>Card Footer</p>
    //   </CardFooter>
    // </Card>
  )
}

export default MovieCard
