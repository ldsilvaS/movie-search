import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { Container } from "./style";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {

    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])

    const query = searchParams.get("q")  // Não estou utilizando. Mas serve para reber o nome do filme que está na url.

    const getSearchedMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json()


        if(data.results.length === 0){
            console.log("error");
        }else{
            setMovies(data.results);
        }
        
        
    }

    useEffect(() => {

        const SearchedMoviesUrl = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(SearchedMoviesUrl);


    }, [query])    // Sempre que mudar o query, ele executa essa função.

    return(
        <Container>
            {movies.length > 0 && movies.map((movie) => <MoviesCard key={movie.id} movie={movie}/>)}
        </Container>
    )
}

export default Search;