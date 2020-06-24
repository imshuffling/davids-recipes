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
          {recipesList.map((recipe, i) => 
            <div key={i}>
              <h3>{recipe.node.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: recipe.node.field_summary.value }} />
            </div>
          )}
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
          field_summary {
            value
          }
        }
      }
    }
  }
`

export default IndexPage