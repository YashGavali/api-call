import styles from './NameCard.module.css'

const NameCard = ({name})=>{
    return (
    <div className= {styles.nameCard}>
    {name}
    </div>
    )
};

export default NameCard;
