import React from "react";
import { Link } from "gatsby";

const BookSummary = ({ bookDetails }) => {
  return (
    <Link to={`/book/${bookDetails.slug}`}>
      <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
        <h3>{bookDetails.name}</h3>
        <p>{bookDetails.author}</p>
      </div>
    </Link>
  );
};

export default BookSummary;
