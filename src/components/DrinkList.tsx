import React, {type FC, useState, useEffect} from "react"

type DrinkListProps = {}

const DrinkList: FC<DrinkListProps> = () => {
    const [data, setData] = useState<string>()
    const [drinks, setDrinks] = useState<string[]>([]);
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    }, [])

    return (
        <div>
            <h1>Drink List</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default DrinkList;