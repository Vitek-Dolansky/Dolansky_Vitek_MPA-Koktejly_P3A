import react, { useState, type FC, useEffect } from 'react';


type SearchBarProps = {
    onSearch: (query: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const [text, setText] = useState<string>('');

    const handleSubmit = (e: react.FormEvent) => {
        e.preventDefault();
        onSearch(text);
    };

    return (
    <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Search</button>
    </form>
)
}