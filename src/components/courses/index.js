import React from "react";
import {connect} from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
    componentDidMount() {
        const {actions, authors, courses} = this.props;

        courses.length === 0 &&
        actions.loadCourses().catch((error) => {
            alert("loading courses failed" + error);
        });

        authors.length === 0 &&
        actions.loadAuthors().catch((error) => {
            alert("loading authors failed" + error);
        });
    }

    render() {
        return (
            <>
                <h2>Courses</h2>
                <CourseList courses={this.props.courses}/>
            </>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return { // Be specific. request only the data your component needs
        courses: state.authors.length === 0 ? [] : state.courses.map(course => {
            return {
                ...course, authorName: state.authors.find(a => a.id === course.authorId).name
            }
        }),
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
