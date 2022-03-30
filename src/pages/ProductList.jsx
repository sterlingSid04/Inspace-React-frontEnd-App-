import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

const Container = styled.div `
`;
const Title = styled.h1 `
`;


const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Checkout These Cool Space Items!</Title>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </Container>
        

    )
}

export default ProductList
