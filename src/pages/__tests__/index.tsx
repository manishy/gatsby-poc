import React from "react";
import renderer from "react-test-renderer";
import { PureIndexPage as Index } from "../index";
beforeEach(() => {
  // do some common stuff here
});

const data = {
  allContentfulBook: {
    edges: [
      { node: { slug: "some_slug", name: "some_book", author: "some_author" } },
    ],
  },
};

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
