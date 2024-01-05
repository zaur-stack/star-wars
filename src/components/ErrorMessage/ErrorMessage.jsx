import UiVideo from '../UI/UiVideo/UiVideo';
import styles from './ErrorMessage.module.css';
import video from './video/han-solo.mp4'

const ErrorMessage = () => {
  return (
    <div>
      <p className={styles.text}>
        The dark side of the force has won <br />
        We cannot display data <br />
        Come back when we fix everything
      </p>
      <UiVideo playbackRate={.5} src={video} classes={styles.video} />
    </div>
  );
}

export default ErrorMessage;