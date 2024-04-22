import { HeaderContainer, Navigator, Title } from "./style";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";


const Header = () => {

    const [search, setSearch] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search);

        if(!search) return     // Colocar depois uma modal.

        navigate(`/search?q=${search}`);   // Navega até a página escolhida.
        setSearch("");
    }



    return(
        <HeaderContainer>
            <Title>
                <Link to="/">MovieSearch</Link>
                <FaSearch />
            </Title>
            <Navigator>
                <form onSubmit={handleSubmit}>
                    <input  
                        type="text"
                        placeholder="Busque um filme"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" ><FaSearch /></button>
                </form>
            </Navigator>
        </HeaderContainer>
    )
}

export default Header;