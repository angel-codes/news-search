/** @jsx jsx **/
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

// Styled Components
const Container = tw.main`container mx-auto py-10 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10`;
const CardContainer = tw.div`w-full rounded overflow-hidden shadow-lg`;
const Link = tw.a`inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`;

const NewsContainer = ({ news }) => {
    return (
        <Container>
            { news.map((item, index) => (
                <CardContainer key={index}>
                    <img tw="w-full" src={item.urlToImage} alt={item.title} />
                    <div tw="px-6 py-4">
                        <p tw="text-gray-700 text-base">
                            { `${item.description.slice(0, 100)}...` }
                        </p>
                        
                    </div>
                    <div tw="px-6 pt-4 pb-2">
                        <Link href={item.url} >Link to the News</Link>
                    </div>
                </CardContainer>
            )) }
        </Container>
    );
}

NewsContainer.propTypes = {
    news: PropTypes.array.isRequired
}

export default NewsContainer;