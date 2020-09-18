import React, {useState} from 'react';
import ErrorMessage from "./ErrorMessage";
import shortid from 'shortid'

const Form = ({setSpend, setCreateSpend}) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [errorHandler, setErrorHandler] = useState(false);
    const addSpend = (e) => {
        e.preventDefault();
        //validate
        if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
            setErrorHandler(true);
            return;
        }
        setErrorHandler(false);
        //make the payload
        const spend = {
            name,
            quantity,
            id: shortid.generate()
        };
        console.log(spend);
        setSpend(spend);
        setCreateSpend(true);
        setName('');
        setQuantity(0);
        // pass the spend to the principal component

        //reset form
    };
    return (
        <div>
            <form onSubmit={addSpend} action="">
                <h2>Add your spends here</h2>

                {errorHandler ? <ErrorMessage message="add a correct spend"/> : null}

                <div className="campo">
                    <label htmlFor="">name of the spend</label>
                    <input type="text" placeholder="Ex. McDolands" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} className="u-full-width"/>
                </div>
                <div className="campo">
                    <label htmlFor="">quantity</label>
                    <input type="number" value={quantity} onChange={(e) => {
                        setQuantity(parseInt(e.target.value))
                    }} placeholder="122" className="u-full-width"/>
                </div>
                <input type="submit" className="button-primary u-full-width" value="add quantity"/>
            </form>

        </div>
    );
};

export default Form;
