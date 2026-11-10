import { type FC, useState, useEffect } from 'react'
import { type DrinkDetail } from '../types/DrinkDetail'

type DrinkTutorialProps = {
    drinkId: string
}

const DrinkTutorial: FC<DrinkTutorialProps> = ({ drinkId }) => {
    const [detail, setDetail] = useState<DrinkDetail | null>(null)

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
            .then(response => response.json())
            .then(data => setDetail(data.drinks ? data.drinks[0] : null))
            .catch(error => console.error('Error fetching data:', error))
    }, [drinkId])

    if (!detail) return <p>Načítám...</p>

    const ingredients: string[] = []
    for (let i = 1; i <= 15; i++) {
        const name = detail[`strIngredient${i}`]
        const measure = detail[`strMeasure${i}`]
        if (name) ingredients.push(`${measure ?? ''} ${name}`)
    }

    return (
        <div>
            <h2>{detail.strDrink}</h2>
            <img src={detail.strDrinkThumb} alt={detail.strDrink} width={200} />
            <h3>Ingredience</h3>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>Postup</h3>
            <p>{detail.strInstructions}</p>
        </div>
    )
}

export default DrinkTutorial