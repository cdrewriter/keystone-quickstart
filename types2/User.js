import PropTypes from 'prop-types';

import { filePropTypes } from './File';

export const userPropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  organization: PropTypes.string,
  isAdmin: PropTypes.bool,
  avartar: filePropTypes,
};
