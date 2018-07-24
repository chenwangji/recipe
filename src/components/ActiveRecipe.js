import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'nprogress/nprogress.css'// Progress 进度条样式
import Nprogress from 'nprogress'

const API_KEY = '45f3059178419304da047efabd1b8641'

class ActiveRecipe extends Component {
  state = {
    recipe: null
  }

  componentWillMount() {
    this._getActiveRecipe()
  }

  async _getActiveRecipe() {
    const { recipe } = this.props.location.state
    const reqURL = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipe}&count=1`

    Nprogress.start()
    const res = await fetch(reqURL, {
      mode: 'cors'
    })
    const { recipes } = await res.json()
    Nprogress.done()
    this.setState({ recipe: recipes[0] })
  }

  render() {
    const { recipe } = this.state
    return (
      <div className="container">
        {
          recipe && 
          <div className="active-recipe">
            <img src={recipe.image_url} alt={recipe.title} className="active-recipe__img"/>
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher:
              <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to='/'>Go Home</Link>
            </button>
          </div>
        }
      </div>
    )
  }
}

export default ActiveRecipe