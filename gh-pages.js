/**
 * This configuration will avoid logging the GH_TOKEN if there is an error.
 */
var ghpages = require('gh-pages')

// console.log(process.env.GH_TOKEN)

ghpages.publish('build', {
  repo: 'git@github.com:chenwangji/recipe.git'
}, (e) => { console.log('done--', e) })