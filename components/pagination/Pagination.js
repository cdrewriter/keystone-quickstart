import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { pageInfoPropTypes } from '../../types';

import { Pagination } from 'react-bootstrap';
import './Pagination.scss';

class PaginationInfo extends PureComponent {
  static propTypes = {
    onSelectItem: PropTypes.func,
    pageInfo: PropTypes.shape(pageInfoPropTypes),
    formatHref: PropTypes.func,
  };

  static defaultProps = {
    formatHref: PaginationInfo.defaultFormatHref,
  };

  static defaultFormatHref(pageIdx) {
    return `?page=${pageIdx}`;
  }

  _handleItemClick = (...args) => {
    const { onSelectItem } = this.props;
    onSelectItem && onSelectItem(...args);
  };

  _renderItems(formatHref, current, max) {
    const hasPrev = current > 1;
    const hasNext = current < max;

    const items = [];

    items.push(
      <Pagination.First key="first" href={formatHref(1)} disabled={!hasPrev} onClick={this._handleItemClick} />
    );
    items.push(
      <Pagination.Prev
        key="prev"
        href={hasPrev ? formatHref(current - 1) : formatHref(1)}
        disabled={!hasPrev}
        onClick={this._handleItemClick}
      />
    );

    for (let i = 1; i <= max; ++i) {
      items.push(
        <Pagination.Item key={i} href={formatHref(i)} active={i === current} onClick={this._handleItemClick}>
          {i}
        </Pagination.Item>
      );
    }

    items.push(
      <Pagination.Next
        key="next"
        href={hasNext ? formatHref(current + 1) : null}
        disabled={!hasNext}
        onClick={this._handleItemClick}
      />
    );
    items.push(
      <Pagination.Last key="last" href={formatHref(max)} disabled={!hasNext} onClick={this._handleItemClick} />
    );

    return items;
  }

  render() {
    const { pageInfo, formatHref } = this.props;
    const { page, totalPages, total } = pageInfo;
    const items = this._renderItems(formatHref, page, totalPages);

    return (
      <div className="pagination-info">
        <Pagination className="pagination-info__paging">{items}</Pagination>

        <small className="pagination-info__limit">
          {total} items / {totalPages} pages
        </small>
      </div>
    );
  }
}

export default PaginationInfo;
