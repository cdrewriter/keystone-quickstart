import PropTypes from 'prop-types';
import { filePropTypes } from './File';
import { userPropTypes } from './User';
import { pricecategoryPropTypes } from './PriceCat';
import { queryMetaPropTypes } from './QueryMeta';

export const pricePropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  art: PropTypes.string,
  slug: PropTypes.string,
  pricevalue: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.shape(filePropTypes),
  author: PropTypes.shape(userPropTypes),
  priceCategories: PropTypes.arrayOf(pricecategoryPropTypes),
  _postCategoriesMeta: PropTypes.shape(queryMetaPropTypes),
  status: PropTypes.oneOf(['draft', 'published']),
  publishedDate: PropTypes.string,
  content: PropTypes.string,
};
