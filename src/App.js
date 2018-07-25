import React, { Component } from 'react'
import 'nprogress/nprogress.css'// Progress 进度条样式
import Nprogress from 'nprogress'
import './App.css'

import Form from './components/Form'
import Recipes from './components/Recipes'

const API_KEY = '45f3059178419304da047efabd1b8641'

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">Recipe Search</h1>
  </header>
)

class App extends Component {
  state = {
    inputText: '',
    recipes: [],
    isFetching: false
  }

  componentWillMount() {
    this._loadData()
  }

  componentDidUpdate() {
    this._saveData()
  }
  
  async handleSearchRecipes(e) {
    e.preventDefault()
    const recipeName = e.target.elements.recipeName.value
    this.setState({ inputText: recipeName })
    if (recipeName) {
      this.setState({ isFetching: true })
      await this._fetchData(recipeName)
      this.setState({ isFetching: false })
    }
  }

  handleInput(e) {
    this.setState({ inputText: e.target.value })
  }

  async _fetchData(recipeName) {
    const req_url = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`

    

    Nprogress.start()
    const res = await fetch(req_url, {
      mode: 'cors'
    })
    const { recipes } = await res.json()
    Nprogress.done()
    this.setState({ recipes })
  }

  _saveData(recipes) {
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
    localStorage.setItem('inputText', JSON.stringify(this.state.inputText))
  }

  _loadData() {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || []
    const inputText = JSON.parse(localStorage.getItem('inputText')) || ''
    this.setState({
      recipes,
      inputText
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form 
          isFetching={this.state.isFetching}
          inputText={this.state.inputText} 
          onSearchRecipes={this.handleSearchRecipes.bind(this)} 
          onInput={this.handleInput.bind(this)} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    )
  }
}

export default App

