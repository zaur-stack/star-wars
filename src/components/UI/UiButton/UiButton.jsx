import PropTypes from 'prop-types';
import styles from './UiButton.module.css';
import '../index.css'
import cn from 'classnames';

const UiButton = ({text, onClick, disabled, theme = 'dark', classes }) => {
  return (
    <>
      <button onClick={onClick} disabled={disabled}
       className={cn(styles.button, styles[theme])}>{text}</button>
    </>
  );
}

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  classes: PropTypes.string,
}

export default UiButton;