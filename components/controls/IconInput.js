import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup, FormControl } from 'react-bootstrap';

const IconInput = ({ icon, ...inputProps }) => {
  return (
    <InputGroup className="icon-input">
      <InputGroup.Prepend>
        <InputGroup.Text>
          <FontAwesomeIcon icon={icon} />
        </InputGroup.Text>
      </InputGroup.Prepend>

      <FormControl {...inputProps} />
    </InputGroup>
  );
};

IconInput.propTypes = {
  icon: PropTypes.any.isRequired,
};

export default IconInput;
