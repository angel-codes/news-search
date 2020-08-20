import React, { Fragment, useState, useEffect } from 'react';

// Components
import Header from './components/Header';

function App() {

    // Local State
    const [ category, setCategory ] = useState('');
    const [ news, setNews ] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            console.log('Get the News')
        };
        getNews();
    }, [category]);

    return (
        <Fragment>
            <Header
                setCategory={setCategory}
            />
        </Fragment>
    );
}

export default App;
