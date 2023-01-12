import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";


export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }


    return (

        <form className="form" onSubmit={onSubmit}>
            <h1 className="form__header">Przelicznik walut</h1>
            <p>
                <label><span className="form__labelText">Kwota w PLN*:</span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        className="form__field"
                        placeholder="Wpisz kwotę w PLN"
                        step="0.01"
                        required
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">Waluta:</span>
                    <select
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        className="form__field"
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz!</button>
            </p>
            <p className="form__info">Kursy pochodzą ze strony nbp.pl z Tabeli nr 228/A/NBP/2022 z dnia Tabela z dnia
                2022-11-25</p>
            <Result result={result} />
        </form>
    );
};