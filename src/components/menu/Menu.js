import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu({items}) {
    const [isShown, setIsShown] = useState(false);
    return (
        <nav >
            <button className='d-hide' onClick={() => {
                setIsShown(!isShown);
            }}>
                <i className='fa fa-bars'></i>
            </button>
            <ul className={!isShown && 'm-hide'}>
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link}>{item.label}</Link>
                    </li>
               ))}
            </ul>
        </nav>
    );
}