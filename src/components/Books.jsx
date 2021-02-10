import React from "react"
import { Link } from "gatsby"

const Books = ({ books }) => (
    <div>
        {books.map(edge => {
            console.log(edge, 'edgeedge');
            const book = edge.node
            console.log(book.author, 'book.authorbook.author');

            return (
                <Link to={`/book/${book.slug}`} key={book.slug}>
                    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
                        <h3>{book.name}</h3>
                        <p>{book.author}</p>
                    </div>
                </Link>
            )
        })}
    </div>
)

export default Books
