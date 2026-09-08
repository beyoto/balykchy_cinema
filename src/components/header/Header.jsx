import React, { useState } from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';

const menuItems = [
    { label: 'Главная', href: '/' },
    { label: 'Расписание сеансов', href: '/schedule' },
    { label: 'Контакты', href: '/contacts' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const nav = useNavigate()

    return (
        <>
        <header className="site-header">
                <div className="site-header__logo" onClick={() => { nav('/') }}>
                    <h3>
                        ЫСЫК-КӨЛ КИНОТЕАТР
                    </h3>
                </div>

                <button
                    className="site-header__burger"
                    aria-label="Открыть меню"
                    onClick={() => setIsOpen(true)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <div className={`site-drawer ${isOpen ? 'site-drawer--open' : ''}`}>
                    <button
                        className="site-drawer__close"
                        aria-label="Закрыть меню"
                        onClick={() => setIsOpen(false)}
                    >
                        ×
                    </button>
                    <nav className="site-drawer__nav">
                        {menuItems.map((item) => (
                            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {isOpen && (
                    <div
                        className="site-drawer__overlay"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                )}
            </header>
        </>
    );
}