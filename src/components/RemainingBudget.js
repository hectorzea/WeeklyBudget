import React, {Fragment} from 'react';
import {checkSpend} from "../Helpers";

const RemainingBudget = ({remaining, budget}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Budget: ${budget}
            </div>
            <div className={checkSpend(budget, remaining)}>
                Remaining: ${remaining}
            </div>
        </Fragment>
    );
};

export default RemainingBudget;
