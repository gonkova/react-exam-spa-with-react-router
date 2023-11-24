import React from 'react';
import Header from '../components/header/Header';




export default function WithMainLayout(Component) {
    function layout(props) {
        return (
            <>
               <Header />
                <Component {...props} />
            </>
        );
    }
    return layout;
}