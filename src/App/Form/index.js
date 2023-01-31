import { useState } from "react";
import { Result } from "./Result";
import { useRatesData } from "./useRatesData";
import {
    StyledForm,
    Header,
    LabelText,
    Field,
    Button,
    Info,
    Loading,
    Failure,
} from "./styled";


export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (

        <StyledForm onSubmit={onSubmit}>
            <Header>Przelicznik walut</Header>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Poczekaj chwilę... <br />Ładuję kursy walut z Europejskiego Banku Centralnego.
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Ups... Coś poszło nie tak.
                        </Failure>
                    ) : (
                        <>
                            <p>
                                <label>
                                    <LabelText>Kwota w PLN*:</LabelText>
                                    <Field
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        type="number"
                                        placeholder="Wpisz kwotę w PLN"
                                        step="0.01"
                                        required
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <LabelText>Waluta:</LabelText>
                                    <Field
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.rates).map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </Field>
                                </label>
                            </p>
                            <p>
                                <Button>Przelicz!</Button>
                            </p>
                            <Info>Kursy walut pobierane są z Europejskiego Banku Centralnego.</Info>
                            <Result result={result} />
                        </>
                    )
                )}
        </StyledForm >
    );
};