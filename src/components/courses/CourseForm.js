import React, {PropTypes} from 'react';
import TextInput from './../common/TextInput';
import SelectInput from './../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading,  errors}) => {
    "use strict";
    return (
      <form>
          <h1>Add Meeting Minute</h1>
          <TextInput
              name="title"
              label="Title"
              value={course.title}
              onChange={onChange}
          />

          <SelectInput
              name="authorId"
              label="Author"
              value={course.authorId}
              defualtOption="Select Author"
              options={allAuthors}
              onChange={onChange}
          />

          <TextInput
              name="category"
              label="Project"
              value={course.category}
              onChange={onChange}
          />

          <div className="form-group">
              <label htmlFor="comment">Summary</label>
              <textarea className="form-control"
                        rows="5"
                        name="length"
                        value={course.length}
                        onChange={onChange}>
              </textarea>
          </div>

          <input
              type="submit"
              disabled={loading}
              value={loading ? "saving..." : "Save"}
              onClick={onSave}
              className="btn btn-primary"
              />
      </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.func.bool,
    errors: PropTypes.object
};

export default CourseForm;