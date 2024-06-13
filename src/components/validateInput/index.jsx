import styles from "./validate.module.scss";
function Validate(props) {
  const errors = props.errors;
  return (
    errors && (
      <div className={styles.MuiTooltipPopper}>
        <div
          style={
            props.valiSmall && { transform: "translate3d(295px, 29px, 0px)" }
          }
        >
          <div className={styles.validation}>
            {errors}
            <span className={styles.MuiTooltipArrow} />
          </div>
        </div>
      </div>
    )
  );
}
export default Validate;
