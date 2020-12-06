import React from "react";
import { mount, shallow } from "enzyme";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

// shows the difference between shallow and mount

it("contains 3 NavLinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

it("contains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find('a').length;

  expect(numAnchors).toEqual(3);
});

// Summary
// Shallow: Fast and lightweight. Test one component in isolation
// Mount: More realistic. Render component and children.

