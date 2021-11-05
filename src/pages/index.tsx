import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./index.scss";
import Book from "../components/Book";

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
    return <Book bookDetails={edge.node} key={`book_${index}`} />;
  });
  return <div className="layout">{books}</div>;
};

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBook {
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
