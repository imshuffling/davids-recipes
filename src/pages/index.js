import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class IndexPage extends Component {
  render() {
    const recipesList = this.props.data.allNodeRecipe.edges
    console.log(recipesList)

    return (
      <Layout>
        <section>
          <h1>Recipes</h1>
          <div className="recipeList">
            {recipesList.map((recipe, i) => (
              <div key={i}>
                <h3>{recipe.node.title}</h3>
                <span>Prep time: {recipe.node.field_preparation_time}mins</span>
                <span>Cooking time: {recipe.node.field_cooking_time}mins</span>
                <p
                  dangerouslySetInnerHTML={{
                    __html: recipe.node.field_summary.value,
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allNodeRecipe {
      edges {
        node {
          title
          field_preparation_time
          field_cooking_time
          field_summary {
            value
          }
        }
      }
    }
  }
`

export default IndexPage
