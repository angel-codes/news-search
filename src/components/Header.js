/** @jsx jsx **/
import { jsx } from '@emotion/core';

import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';

// Images
import background from '../images/bg.jpg';

// Custom Hook
import useSelect from '../hooks/useSelect';

// utils
import { OPTIONS } from '../utils';

// Styled Components
const Container = styled.header(() => [
    `background: url(${background});`,
    tw`bg-cover bg-center bg-no-repeat`,
    tw`h-56 md:h-64`
]);
const Content = tw.div`h-full container mx-auto flex flex-col justify-center items-center`;
const Title = tw.h1`text-4xl font-bold text-white leading-tight`;
const Button = styled.button(() => [
    `width: 20%;`,
    tw`bg-green-500 hover:bg-green-600 text-white font-bold tracking-wide rounded rounded-l-none`,
    tw`transition-all ease-in duration-300`
]);

const Header = ({ setCategory }) => {

    // Custom Hook
    const [ category, SelectCategory ] = useSelect('general', OPTIONS);
    
    // When user submit the form
    const handleSubmit = e => {
        e.preventDefault();

        setCategory(category); // Send category to the App.js component
    }

    return (
        <Container>
            <Content>
                <Title>News Search</Title>
                <form 
                    onSubmit={handleSubmit}
                    tw="w-full flex mt-5"
                >
                    <SelectCategory/>
                    <Button
                        type="submit"
                    >Search</Button>
                </form>
            </Content>
        </Container>
    );
}

Header.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default Header;