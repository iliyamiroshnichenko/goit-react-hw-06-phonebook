import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
