import React, { Component } from 'react';

function Loading() {
    return (
        <div className="loading">
            <div>
                <i className="fab fa-empire fa-spin"/> Loading
            </div>
        </div>
    );
}

export {
    Loading as default,
    Loading
};
