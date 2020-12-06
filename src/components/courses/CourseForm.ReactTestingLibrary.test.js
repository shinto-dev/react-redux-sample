import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderCourseForm();

  console.log(wrapper.debug());
  wrapper.getByText("Add Course");
});

it("labels save buttons as 'Save' when not saving", () => {
  let { getByText } = renderCourseForm();

  getByText("Save");
});

it("labels save buttons as 'Saving...' when saving", () => {
  let { getByText, debug } = renderCourseForm({ saving: true });
  debug();

  getByText("Saving...");
});

// React testing library: You should focus on what the end user sees.
