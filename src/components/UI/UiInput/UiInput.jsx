import PropTypes from 'prop-types';
import cn from 'classnames'
import styles from './UiInput.module.css';
import icon from './img/cancel.svg'

const UiInput = ({
  value,
  handleInputChange,
  placeholder,
  classes,
}) => {
  return (
      <div className={cn(styles.wrapper__input, classes)}>
        <input 
              type="text"
              value={value}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={placeholder}
              className={styles.input}
        />
        <img className={cn(styles.clear, !value && styles.clear__disabled)} onClick={() => value && handleInputChange('')} src={icon} alt="Clear" />
      </div>
  );
}

UiInput.propTypes = {
  text: PropTypes.string
}

export default UiInput;