import React from 'react';
import Spend from "./Spend";

const SpendList = ({spends}) => {
    return (
        <div className="gastos-realizados">
            <h2>Spends List</h2>
            {
                spends.map(spend => (
                    <Spend key={spend.id} spend={spend}/>
                ))
            }
        </div>
    );
};

export default SpendList;
