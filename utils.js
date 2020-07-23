const _utils = {};

_utils.getPageInfoFromQuery = (query = {}) => {
  const page = query.page || 1;
  const limit = query.limit || 5;
  const slug = query.slug || '';

  return { page, limit, slug };
};

export default _utils;
