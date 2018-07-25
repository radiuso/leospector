import React from 'react';

export default ({ title, children, className, ...rest }) => (
    <div className={ `hero ${className}`}>
        <div className="hero-body has-text-centered">
            <div className="container">
                <h1 className="title">{title}</h1>
                {children}
            </div>
        </div>
    </div>
);
