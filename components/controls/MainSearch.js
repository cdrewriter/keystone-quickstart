import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import './MainSearch.scss';

const MainSearch = ({ onSubmit }) => {
  const [term, setTerm] = useState('');
  const onKeyPress = useCallback(
    e => {
      if (e.key === 'Enter' && e.charCode === 13) {
        onSubmit && onSubmit();
      }
    },
    [onSubmit]
  );

  return (
    <InputGroup className="main-search">
      <FormControl
        type="text"
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Search"
        onKeyPress={onKeyPress}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={onSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

MainSearch.propTypes = {
  onSubmit: PropTypes.func,
};

export default MainSearch;
