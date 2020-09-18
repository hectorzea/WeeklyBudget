import React, {useState, useEffect} from 'react';
import Question from "./components/Question";
import Form from "./components/Form";
import SpendList from "./components/SpendList";
import RemainingBudget from "./components/RemainingBudget";


function App() {
    //budget state

    const [budget, setBudget] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [showQuestion, setShowQuestionState] = useState(true);
    const [spends, setSpends] = useState([]);
    const [spend, setSpend] = useState({});
    const [createSpend, setCreateSpend] = useState(false);
    //use Effect for the remaining

    useEffect(() => {
        if (createSpend) {
            //add new spend
            setSpends([
                ...spends, spend
            ]);

            //spend is extracted
            const remainingSpend = remaining - spend.quantity;
            setRemaining(remainingSpend);

            setCreateSpend(false);
        }
    }, [spend, createSpend, spends, remaining]);

    return (
        <div className="container">
            <header>
                <h1> Weekly Budget</h1>
                <div className="contenido-principal contenido">
                    {showQuestion ? (
                        <Question setBudget={setBudget}
                                  setRemaining={setRemaining}
                                  setShowQuestionState={setShowQuestionState}
                        />

                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <Form setSpend={setSpend} setCreateSpend={setCreateSpend}/>
                            </div>
                            <div className="one-half column">
                                <SpendList spends={spends}/>
                                <RemainingBudget remaining={remaining} budget={budget}/>
                            </div>
                        </div>)}


                </div>
            </header>
        </div>
    );
}

export default App;
