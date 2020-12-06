import React from "react";
import renderer from "react-test-renderer";
import CourseForm from "./CourseForm";
import { authors, courses } from "../../../tools/mockData";

it("sets submit button label Saving... when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      onChange={jest.fn()}
      authors={authors}
      onSave={jest.fn()}
      course={courses[0]}
      saving={true}
    />
  );

  expect(tree).toMatchSnapshot();
});

it("sets submit button label Save when saving is false", () => {
  const tree = renderer.create(
    <CourseForm
      onChange={jest.fn()}
      authors={authors}
      onSave={jest.fn()}
      course={courses[0]}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
