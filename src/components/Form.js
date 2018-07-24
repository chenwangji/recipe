import React from 'react'

const Form = props => (
  <form onSubmit={props.onSearchRecipes}>
    <input 
      className="form__input" 
      type="text" 
      name="recipeName" 
      style={{ marginBottom:"2rem" }} 
      value={props.inputText} 
      onChange={props.onInput}/>
    <button className="form__button" type="submit" disabled={props.isFetching}>
      Search
    </button>
  </form>
)

export default Form
