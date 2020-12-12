import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";

describe("course reducers", () => {
  const initialState = [
    {
      id: 1,
      title: "A",
    },
    {
      id: 2,
      title: "B",
    },
  ];

  it("should add course when passed CREATE_COURSE_SUCCESS", () => {
    const newCourse = {
      id: 3,
      title: "C",
    };

    const action = actions.createCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);
    expect(newState).toHaveLength(3);
    expect(newState[0].title).toEqual("A");
    expect(newState[1].title).toEqual("B");
    expect(newState[2].title).toEqual("C");
  });

  it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
    const course = {
      id: 2,
      title: "C",
    };
    const action = actions.updateCourseSuccess(course);

    const newState = courseReducer(initialState, action);

    expect(newState).toHaveLength(2);
    expect(newState[0].title).toEqual("A");
    expect(newState[1].title).toEqual("C");
  });
});
