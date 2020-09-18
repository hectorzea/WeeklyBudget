import React from 'react';

const Spend = ({spend}) => {
    return (
        <li className="gastos">
            <p>
                {spend.name}
                <span className="gasto">${spend.quantity}</span>
            </p>
        </li>
    );
};

export default Spend;
