import React from 'react';
import house from '../house.png'

function Home() {
    return (
        <div className='Homepage'>
            <h1>Buildings</h1>
            <img src={house} />
            <div className='Intro'>
                One of the greatest aspects of this great city we call home is that as Sofia grew it was influenced by many styles, architects and builders. This means that nearly every style of home is represented in the metro area from classic historical architecture to modern building styles. If you like the sculptured lines of historic mansions of the modern clean look of glass and open space, this part of the country has everything you have always wanted.
            </div>
        </div>
    );
}

export default Home;