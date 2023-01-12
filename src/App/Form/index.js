import "./style.css";



<form className="form">
    <h1 className="form__header">Przelicznik walut</h1>
    <p>
        <label><span className="form__labelText">Kwota w PLN*:</span>
            <input type="number" className="form__field" placeholder="Wpisz kwotę w PLN" step="0.01"
                required></label>
    </p>
    <p>
        <label><span className="form__labelText">Waluta:</span>
            <select className="form__field">
                <option></option>
            </select>
        </label>
    </p>
    <p>
        <button className="form__button">Przelicz!</button>
    </p>
    <p className="form__info">Kursy pochodzą ze strony nbp.pl z Tabeli nr 228/A/NBP/2022 z dnia Tabela z dnia
        2022-11-25</p>
    <p className="form__result"></p>
</form>