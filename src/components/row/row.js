import React from 'react';

const Row =({ leftContenet, rightContent }) => {

    return (

        <div className="row">
            <div className="col-lg-6 mb-3">
                {leftContenet}
            </div>

            <div className="col-lg-6">
                {rightContent}
            </div>
        </div>
    );
};

export default Row;