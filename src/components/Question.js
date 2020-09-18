import React, {Fragment, useState} from 'react';
import ErrorMessage from "./ErrorMessage";

const Question = ({
                      setBudget,
                      setRemaining,
                      setShowQuestionState
                  }) => {
    //define quantity state
    const [quantity, saveQuantity] = useState(0);
    const [errorHandler, saveErrorHandler] = useState(false);

    //function that read budget
    const defineBudget = (e) => {
        saveQuantity(parseInt(e.target.value, 10));
    };

    //submit the budget
    const addBudget = (e) => {
        e.preventDefault();
        //validate
        if (quantity < 1 || isNaN(quantity)) {
            saveErrorHandler(true);
            return;
        }
        //if validation pass
        saveErrorHandler(false);
        setBudget(quantity);
        setRemaining(quantity);
        setShowQuestionState(false);
    };

    return (
        <Fragment>
            <h2>Add your weekly budget</h2>
            {errorHandler ? <ErrorMessage message="the budget is incorrect"/> : null}
            <form onSubmit={addBudget}>
                <input type="text" onChange={defineBudget} type="number" className="u-full-width"
                       placeholder="add your budget"/>
                <input type="submit" className="button-primary u-full-width" value="Check Budget"/>
            </form>
        </Fragment>
    );
};

export default Question;
