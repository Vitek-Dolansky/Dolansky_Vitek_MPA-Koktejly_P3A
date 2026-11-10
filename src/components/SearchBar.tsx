import React, { type FC, useState, useEffect } from 'react';


type SearchBarProps = {
    onSearch: (query: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
    const timer = setTimeout(() => onSearch(text), 400)
    return () => clearTimeout(timer)
    }, [text, onSearch])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(text);
        
    };

    return (
    <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Search</button>
    </form>
    );
}

export default SearchBar;