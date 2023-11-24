import React from 'react';
import Menu from '../menu/Menu';

export default function Header() {
    const items = [
        { label: 'Начало', link: '/' },
        { label: 'За нас', link: '/about' },
        { label: 'Контакти', link: '/contacts' }
    ];

    return (
        <header>
            <Menu items={items} />
        </header>
    );
}