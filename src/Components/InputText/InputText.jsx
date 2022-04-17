import styles from './InputText.module.css'

const InputText = ({postUser, inputChangeHandler, value })=>{
    return (
    <div className={styles.inputContainer}>
    <input className={styles.inputBox} value={value} onChange = {inputChangeHandler}></input>
    <button  className={styles.buttonContainer}
    onClick={postUser} >ADD</button>
    </div>
    )
};

export default InputText;
