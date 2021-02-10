import * as React from "react";
import { graphql, useStaticQuery } from "gatsby"
import Books from "../components/books"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBook{
        edges {
          node {
            name
            author
            slug
        }
      }
    }
  }
  `)

  return (
    <div>
      <div>
        {<Books books={data.allContentfulBook.edges} />}
      </div>
    </div>
  )
}

export default IndexPage
