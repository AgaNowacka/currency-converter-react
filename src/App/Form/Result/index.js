import "./style.css"

export const Result = ({ result }) => (
    <p className="form__result">
        {result !== undefined && (
            <React.Fragment>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </React.Fragment>
        )}
    </p>
);