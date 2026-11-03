import React, {type FC, useState, useEffect} from "react"
import { type DrinkListItem } from "../types/DrinkListitem"

type DrinkListProps = {}

const DrinkList: FC<DrinkListProps> = () => {
    const [result, setResult] = useState<string>()
    const [drinks, setDrinks] = useState<DrinkListItem[]>([]);
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(response => response.json())
        .then(data => {
            setResult(JSON.stringify(data, null, 2));
            setDrinks(data.drinks.map((drink: DrinkListItem) => drink));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
        .finally(() => console.log('Fetch attempt finished.'));
    }, [])

    return (
        <div>
            <h1>Drink List</h1>
            <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink.strDrink}</li>
                ))}
            </ul>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    )
}

export default DrinkList;