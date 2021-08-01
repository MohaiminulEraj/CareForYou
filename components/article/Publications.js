import React from 'react';

const Publications = ({ article }) => {
    return (
        <div className="container-flued">
            <h6>Pending For Approval:</h6>
            <ul className="row list-unstyled">
                <li className="col-lg-3 col-md-4 col-sm-6 mb-5">
                    {/* <div>Article parseInt(key)+1</div> */}
                    <div>Title: {article}</div>
                    <div> Department: </div>
                    <div> Description: </div>
                    <div> Symptoms: </div>
                </li>
            </ul>
        </div>
    )
}

export default Publications
