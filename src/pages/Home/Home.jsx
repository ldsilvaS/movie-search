import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { Container } from "./style";
import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);
    
    const getTopMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json()

        console.log(data.results)
        setTopMovies(data.results);
    }

    useEffect(() => {

        const topMoviesUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopMovies(topMoviesUrl);


    }, [])


    return(
        <Container>
            {topMovies.length > 0 && topMovies.map((movie) => <MoviesCard key={movie.id} movie={movie}/>)}
            
        </Container>
    )
}

export default Home;