import { FaStar } from "react-icons/fa";
import { MovieContainer } from "./style";
import { Link } from "react-router-dom";


const imageUrl = import.meta.env.VITE_IMG

const MoviesCard = ({movie, showLink = true}) => {
    return(
        <>
            <MovieContainer>
                <img className="imageUrl" src={imageUrl + movie.poster_path} alt={movie.title} />
                <h2 className="title">{movie.title}</h2>
                <p className="avarage">
                    <FaStar/> {movie.vote_average}
                </p>
                {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
            </MovieContainer>
            
        </>
    )
}

export default MoviesCard;