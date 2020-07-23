import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faEnvelope, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Col, Form, Button } from 'react-bootstrap';
import IconInput from '../controls/IconInput';

const ContactForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    contactName: '',
    contactEmail: '',
    contactDescription: '',
  });

  const onChange = useCallback(e => {
    const field = e.target.name;
    const value = e.target.value;

    setFields({
      ...fields,
      [field]: value,
    });
  });

  const handleSubmit = useCallback(
    e => {
      e.resetForm = () =>
        setFields({
          contactName: '',
          contactEmail: '',
          contactDescription: '',
        });
      onSubmit && onSubmit(e);
    },
    [onSubmit]
  );

  const { contactName, contactEmail, contactDescription } = fields;

  return (
    <Form className="contact-form" onSubmit={handleSubmit}>
      <Form.Row>
        <Col xs={12} md={6} lg={3} className="pt-2 pb-2">
          <Form.Label htmlFor="contactName" srOnly>
            Name
          </Form.Label>
          <IconInput
            icon={faUser}
            placeholder="Input your name"
            type="text"
            name="contactName"
            onChange={onChange}
            value={contactName}
            required
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="pt-2 pb-2">
          <Form.Label htmlFor="contactEmail" srOnly>
            Email
          </Form.Label>
          <IconInput
            name="contactEmail"
            type="email"
            icon={faEnvelope}
            value={contactEmail}
            onChange={onChange}
            placeholder="Input your mail"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="pt-2 pb-2">
          <Form.Label htmlFor="contactDescription" srOnly>
            Phone
          </Form.Label>
          <IconInput
            required
            name="contactDescription"
            value={contactDescription}
            icon={faEdit}
            onChange={onChange}
            placeholder="Input contact content"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center pt-2 pb-2">
          <Button className="rounded-0 w-100" variant="warning" type="submit">
            <FontAwesomeIcon className="mr-2" icon={faPaperPlane} />
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
