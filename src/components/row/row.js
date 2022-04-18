import React from 'react';
import ErrorBoundry from '../error-boundry';
import "./row.css";

const Row =({ leftContent, rightContent }) => {

    return (

        <div className="row flex-wrap-reverse">
            <ErrorBoundry>
                <div className="col-lg-6 mb-3">
                    {leftContent}
                </div>
            </ErrorBoundry>

            <ErrorBoundry>
                <div className="col-lg-6 detail-box">
                    {rightContent}
                </div>
            </ErrorBoundry>
        </div>
    );
};

export default Row;