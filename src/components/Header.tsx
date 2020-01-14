import React from 'react';

interface HeaderProps {
    appTitle: string;
}

const Header = ({ appTitle }: HeaderProps) => {
    return (
        <header className="header">
            <span>{appTitle}</span>
        </header>
    );
};

export default Header;
