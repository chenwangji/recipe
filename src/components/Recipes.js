import React from 'react'
import { Link } from 'react-router-dom'

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => (
        <div
          key={recipe.recipe_id}
          className="col-md-4"
          style={{ marginBottom: '2rem' }}
        >
          <div className="recipe__box">
            <div className="recipe__box-img-container">
              <img
                src={recipe.image_url}
                alt={recipe.title}
                className="recipe__box-img"
              />
            </div>
            <div className="recipe__text">
              <h5 className="recipe__title">{recipe.title}</h5>
              <p className="recipe__subtitle">
                Publisher:
                <span>{recipe.publisher}</span>
              </p>
            </div>
            <button className="recipe_buttons" >
              <Link 
                to={{
                  pathname: `/active-recipe/${recipe.recipe_id}`,
                  state: { recipe: recipe.title }
                }}>View recipe
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Recipes
