import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulBook(slug: { eq: $slug }) {
      name
      author
    }
  }
`

const Book = props => {
  const book = props.data.contentfulBook
  return (
    <div>
      <h2>{book.name}</h2>
      <span>{book.author}</span>
    </div>
  )
}

export default Book
