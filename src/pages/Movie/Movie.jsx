import { Container, ImgContainer, MovieContainer, TextContainer } from "./style";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CiCalendarDate, CiFaceSmile, CiBadgeDollar, CiWallet } from "react-icons/ci";

import MoviesCard from "../../components/MoviesCard/MoviesCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY

const imageUrl = import.meta.env.VITE_IMG

const Movie = () => {

    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const response = await fetch(url);
        const data = await response.json()

        console.log(data);
        setMovie(data);

    }

    const convertToDolar = (number) => {
        return number.toLocaleString('en-US', {
            currency: "USD",
        })
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
        

    }, [])

    return(
        <Container>
            {movie &&
                <MovieContainer>
                    <ImgContainer>
                        <img className="imageUrl" src={imageUrl + movie.poster_path} alt={movie.title} />
                    </ImgContainer>
                    <TextContainer>
                        <h1 className="title">{movie.title}</h1>
                        <p className="overview">{movie.overview}</p>
                        <p className="data"><CiCalendarDate /> <span>{movie.release_date}</span></p>
                        <p className="popularity"><CiFaceSmile /> <span>{movie.popularity}</span></p>
                        <p className="budget"><CiWallet  /> <span>{convertToDolar(movie.budget)}</span></p>
                        <p className="revenue"><CiBadgeDollar  /> <span>{convertToDolar(movie.revenue)}</span></p>
                    </TextContainer>
                     
                </MovieContainer>

                    
            }
        </Container>
    )
}

export default Movie;