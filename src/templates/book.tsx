import React from "react";
import { graphql } from "gatsby";
import "./book.scss";

export const query = graphql`
  query($slug: String!) {
    contentfulBook(slug: { eq: $slug }) {
      name
      author
      description {
        description
      }
      image {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`;

const Book = ({ data }) => {
  const book = data.contentfulBook;
  const { name, author, description, image } = book;

  return (
    <div className="book">
      <div className="book__details">
        <h2>{name}</h2>
        <span>{author}</span>
        <p> {description && description.description} </p>
      </div>
      <div>{image && <img src={`https://${image.file.url}`} alt="image not found" />}</div>
    </div>
  );
};

export default Book;
