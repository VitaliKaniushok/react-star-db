import React from 'react';

const Row =({ leftContent, rightContent }) => {

    return (

        <div className="row">
            <div className="col-lg-6 mb-3">
                {leftContent}
            </div>

            <div className="col-lg-6">
                {rightContent}
            </div>
        </div>
    );
};

export default Row;