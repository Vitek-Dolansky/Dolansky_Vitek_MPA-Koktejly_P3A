import React, {type FC, useState, useEffect} from "react"
import { type DrinkListItem } from "../types/DrinkListItem"

type DrinkListProps = {
    query: string
    onSelect: (id: string) => void
}

const DrinkList: FC<DrinkListProps> = ({query, onSelect}) => {
    const [result, setResult] = useState<string>()
    const [drinks, setDrinks] = useState<DrinkListItem[]>([]);
    useEffect(() => {
        if (!query) {
            setDrinks([])
            return
        }
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => {
            setResult(JSON.stringify(data, null, 2));
            setDrinks(data.drinks ?? []);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
        .finally(() => console.log('Fetch attempt finished.'));
    }, [query])

    return (
        <div>
            <h1>Drink List</h1>
            <ul>
                {drinks.map((drink) => (
                    <li key={drink.idDrink} onClick={() => onSelect(drink.idDrink)}>
                        {drink.strDrink}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DrinkList;