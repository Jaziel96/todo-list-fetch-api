import React from 'react';

//components
import ListContainer from './listacontenido.jsx';


// STYLES
import '../../styles/home.css';

function App() {

    return (
        <div className='app-container'>
            <h1>TODOS</h1>
            <ListContainer />

        </div>
    );
}

export default App;