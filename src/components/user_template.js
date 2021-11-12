import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {
  // console.log(props);
  return (
    <div>
      Template
    </div>
  );
};

UserTemplate.propTypes = { // Check the correct information of props. Compare with state value and fire error if you can use number
  // name: PropTypes.string,
  // name: PropTypes.oneOf(['Francis', 'Steve']), // If you can pass this two name in state then you are not get any error.
  name: PropTypes.oneOfType([ // You can add multiple conditions
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(['Francis', 'Steve'])
  ]),
  lastname: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.array,
  spanish: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object,
  // mother: PropTypes.string.isRequired // Check required field
  mother: function(props,propName, componentName) {  // Add error message if the data is not correct
    console.log(props);
    if(props[propName] !== 'Jane') {
      return new Error(`The name ${props[propName]} is incorrect. Should be Jane.`)
    }
  }
}

export default UserTemplate;
