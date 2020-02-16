import React from 'react';

function List(props) {
  const { route, field, pageName } = props;
  let { urls, items } = props;
  if (urls) {
    // accept single URL and object
    if (typeof(urls) === 'string') {
      urls = [ urls ];
      items = [ items ];
    }
    // deal with holes in the data set
    items = urls.map((url, index) => {
      let item = (items) ? items[index] : null;
      if (!item) {
        item = { url, pending: true };
      }
      return item;
    });
  }
  if (!items) {
    return null;
  }
  if (items.length === 0) {
    return <ul className="empty"><li><span>none</span></li></ul>;
  }
  return <ul>{items.map(renderItem)}</ul>;

  function renderItem(item, i) {
    const id = route.extractID(item.url);
    const url = route.find(pageName, { id });
    const text = (item.pending) ? '...' : item[field];
    const className = (item.pending) ? 'pending' : undefined;
    return (
      <li key={i}>
        <a className={className} href={url}>{text}</a>
      </li>
    );
  }
}

List.defaultProps = {
  field: 'name'
};

export {
  List
};
