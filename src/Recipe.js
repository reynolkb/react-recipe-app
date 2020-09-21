import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    calories = Math.floor(calories);

    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li key={ingredient.text} className={style.directions}>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipe