import { useState } from 'react';
import Button from 'components/Button/Button';

export default function MoviesForm({forSearch, search}) {
    const [input, setInput] = useState('');

    return (
        <form onSubmit={e => {
            e.preventDefault();
            forSearch(input);
          }}>
            <input type="text"
                placeholder={search ?? 'Look for a movie...'}
                onChange={e => setInput(e.target.value)}
            />
            <Button type="submit">
                Search
            </Button>
        </form>
    )
}