import React, {type FC, useState, useEffect} from "react"

type DrinkListProps = {}

const DrinkList: FC<DrinkListProps> = () => {
    const [result, setResult] = useState<string>()
    const [drinks, setDrinks] = useState<string[]>([]);
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(response => response.json())
        .then(data => {
            setResult(JSON.stringify(data, null, 2));
            setDrinks(data.drinks.map((drink: { strDrink: string }) => drink.strDrink));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
        .finally(() => console.log('Fetch attempt finished.'));
    }, [])

    return (
        <div>
            <h1>Drink List</h1>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    )
}

export default DrinkList;