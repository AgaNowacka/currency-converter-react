import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { StyledForm, Header, LabelText, Field, Button, Info } from "./styled";


export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }


    return (

        <StyledForm onSubmit={onSubmit}>
            <Header>Przelicznik walut</Header>
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
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </Field>
                </label>
            </p>
            <p>
                <Button>Przelicz!</Button>
            </p>
            <Info>Kursy pochodzą ze strony nbp.pl z Tabeli nr 228/A/NBP/2022 z dnia Tabela z dnia
                2022-11-25</Info>
            <Result result={result} />
        </StyledForm>
    );
};