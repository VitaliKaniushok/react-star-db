import React from 'react';
import ErrorBoundry from '../error-boundry';

const Row =({ leftContent, rightContent }) => {

    return (

        <div className="row">
            <ErrorBoundry>
                <div className="col-lg-6 mb-3">
                    {leftContent}
                </div>
            </ErrorBoundry>

            <ErrorBoundry>
                <div className="col-lg-6">
                    {rightContent}
                </div>
            </ErrorBoundry>
        </div>
    );
};

export default Row;