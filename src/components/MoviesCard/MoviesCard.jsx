import { FaStar } from "react-icons/fa";
import { MovieContainer } from "./style";
import { Link } from "react-router-dom";


const imageUrl = import.meta.env.VITE_IMG

const MoviesCard = ({movie, showLink = true}) => {
    return(
        <>
            {!movie.backdrop_path | !movie.poster_path ? "" :
                <MovieContainer>
                    <img className="imageUrl" src={imageUrl + movie.poster_path} alt={movie.title} />
                    <h2 className="title">{movie.title}</h2>
                    <p className="average">
                        <FaStar/> <span className="text_average">{movie.vote_average}</span>
                    </p>
                    {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
                </MovieContainer>
            }  
        </>
    )
}

export default MoviesCard;