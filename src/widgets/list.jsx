import { h, Component } from 'preact';

/** @jsx h */

function List(props) {
    let { route, urls, items, field, pageName } = props;
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
    return (
        <ul>
        {
            items.map((item) => {
                let id = route.extractID(item.url);
                let url = route.find(pageName, { id });
                let text = item.pending ? '...' : item[field];
                let linkProps = {
                    href: url,
                    className: (item.pending) ? 'pending' : undefined,
                };
                return <li><a {...linkProps}>{text}</a></li>;
            })
        }
        </ul>
    );
}

List.defaultProps = {
    field: 'name'
};

List.displayName = 'List';

export {
    List as default,
    List
};
