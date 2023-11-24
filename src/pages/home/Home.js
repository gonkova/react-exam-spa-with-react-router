import React from 'react';
import WithMainLayout from '../../layout/WithMainLayout';

function Home() {
    return (
        <>
            <h1>Hello from home</h1>
        </>
    );
}

export default WithMainLayout(Home);