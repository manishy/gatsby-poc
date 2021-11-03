import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Books from "../components/Books";

export const PureIndexPage = ({ data }) => (
  <div>
    <div>
      <div>{<Books books={data.allContentfulBook.edges} />}</div>
    </div>
  </div>
);

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

  return <PureIndexPage data={data} />;
};

export default IndexPage;
