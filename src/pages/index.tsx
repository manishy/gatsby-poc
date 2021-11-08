import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./index.scss";
import BookSummary from "../components/BookSummary";

interface IEdge {
  node: {
    slug: string;
    name: string;
    author: string;
  };
}

interface ILayout {
  allContentfulBook: {
    edges: IEdge[];
  };
}

export const Layout = ({ data }: { data: ILayout }) => {
  const booksData = data.allContentfulBook.edges;
  const books = booksData.map((edge: IEdge, index: number) => {
    return <BookSummary bookDetails={edge.node} key={`book_${index}`} />;
  });
  return <div className="layout">{books}</div>;
};

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBook(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            name
            author
            slug
          }
        }
      }
    }
  `);

  return <Layout data={data} />;
};

export default IndexPage;
