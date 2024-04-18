import { HeaderContainer, Navigator, Title } from "./style";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <HeaderContainer>
            <Title>
                <Link to="/">MovieSearch</Link>
                <FaSearch />
            </Title>
            <Navigator>
                <h1></h1>
                <h1><Link to="/movie/2">Movie</Link></h1>
                <h1><Link to="/search">Search</Link></h1>
                <form>
                    <input  
                        type="text"
                        placeholder="Busque um filme" 
                    />
                    <button type="submit"><FaSearch /></button>
                </form>
            </Navigator>
        </HeaderContainer>
    )
}

export default Header;