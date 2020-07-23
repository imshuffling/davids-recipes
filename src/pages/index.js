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
          <div className="recipeList">
            {recipesList.map((recipe, i) => (
              <div key={i}>
                <h2>{recipe.node.title}</h2>
                <span className="date">{recipe.node.created}</span>
                <span>Prep time: {recipe.node.field_preparation_time}mins</span>
                <span>Cooking time: {recipe.node.field_cooking_time}mins</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: recipe.node.field_summary.processed,
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
    allNodeRecipe(sort: { order: DESC, fields: created }) {
      edges {
        node {
          title
          created(formatString: "DD MMMM YYYY")
          field_preparation_time
          field_cooking_time
          field_summary {
            processed
          }
        }
      }
    }
  }
`

export default IndexPage
