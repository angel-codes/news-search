import React, { Fragment, useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import NewsContainer from './components/NewsContainer';

function App() {

    // Local State
    const [ category, setCategory ] = useState('');
    const [ news, setNews ] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const URL = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;

            // Fetch the data
            const response = await fetch(URL);
            const data = await response.json();
            
            // Save in the state
            setNews(data.articles);

        };
        getNews();
    }, [category]);

    return (
        <Fragment>
            <Header
                setCategory={setCategory}
            />
            <NewsContainer
                news={news}
            />
        </Fragment>
    );
}

export default App;
