import React, { type FC, useState } from 'react';


type SearchBarProps = {
    onSearch: (query: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const [text, setText] = useState<string>('');

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