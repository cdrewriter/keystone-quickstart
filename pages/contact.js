import React, { useContext, useReducer } from 'react';
import { GraphQLContext } from 'graphql-react';

import { Container, Alert } from 'react-bootstrap';
import PageLayout from '../templates/PageLayout';

import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';

import Section from '../components/sections/Section';
import ContactForm from '../components/forms/ContactForm';

const alertsReducer = (state, action) => {
  switch (action) {
    case 'success':
      return {
        variant: 'success',
        show: true,
      };
    case 'error':
      return {
        variant: 'danger',
        show: true,
      };
    default:
      return { variant: '', show: false };
  }
};

const ContactPage = () => {
  const graphql = useContext(GraphQLContext);
  const [state, dispatch] = useReducer(alertsReducer, { variant: 'success', show: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('contactName'),
      email: formData.get('contactEmail'),
      description: formData.get('contactDescription'),
    };

    // Then call the query
    const { cacheKey, cacheValuePromise } = graphql.operate({
      fetchOptionsOverride(options) {
        options.url = `${process.browser ? '' : 'http://localhost:3000'}/admin/api`;
      },
      operation: {
        query: /* GraphQL */ `
          mutation AddContact($payload: ContactCreateInput) {
            createContact(data: $payload) {
              id
            }
          }
        `,
        variables: {
          payload,
        },
      },
    });

    cacheValuePromise
      .then(() => {
        if (
          graphql.cache[cacheKey].data &&
          graphql.cache[cacheKey].data.createContact &&
          graphql.cache[cacheKey].data.createContact.id
        ) {
          // Create successed
          e.resetForm();
          dispatch('success');
        } else {
          dispatch('error');
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch('error');
      });
  };
  return (
    <PageLayout id="contact-page">
      <Container className="mt-4 mb-4">
        <Breadcrumbs
          pageTitle="Contact"
          pagePath="/contact"
          parts={[
            {
              title: 'Homepage',
              href: '/',
            },
          ]}
        />
      </Container>
      <Section>
        <Container>
          <h1>Contact now</h1>
          {state.show && (
            <Alert variant={state.variant}>
              {state.variant === 'success'
                ? 'Your contact information has been sent'
                : 'There are something wrong. Please try again.'}
            </Alert>
          )}
          <ContactForm onSubmit={handleSubmit} />
        </Container>
      </Section>
    </PageLayout>
  );
};

export default ContactPage;
