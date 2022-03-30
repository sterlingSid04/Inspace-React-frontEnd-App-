import styled from 'styled-components' 

const Container = styled.div`
    height:30px;
    background-color: #5585b5;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;

`

const Announcement = () => {
    return (
        <Container>
            Get to know your Satellite Deals!
        </Container>
    )
}

export default Announcement
