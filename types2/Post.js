import PropTypes from 'prop-types';
import { filePropTypes } from './File';
import { userPropTypes } from './User';
import { categoryPropTypes } from './Category';
import { queryMetaPropTypes } from './QueryMeta';

export const postPropTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape(filePropTypes),
  author: PropTypes.shape(userPropTypes),
  postCategories: PropTypes.arrayOf(categoryPropTypes),
  _postCategoriesMeta: PropTypes.shape(queryMetaPropTypes),
  status: PropTypes.oneOf(['draft', 'published']),
  publishedDate: PropTypes.string,
  content: PropTypes.string,
};
