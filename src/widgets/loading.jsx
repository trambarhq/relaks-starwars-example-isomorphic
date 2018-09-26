import React from 'react';

function Loading() {
    return (
        <div className="loading">
            <div>
                <i className="fab fa-empire fa-spin"/> Loading
            </div>
        </div>
    );
}

Loading.displayName = 'Loading';

export {
    Loading as default,
    Loading
};
