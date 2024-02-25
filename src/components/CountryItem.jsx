import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img
        src={`https://flagsapi.com/${country.countryCode}/flat/64.png`}
        alt={country.country}
      />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
