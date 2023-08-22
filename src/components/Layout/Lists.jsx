import styles from './Lists.module.css'
const Lists = ({children}) => {
		return <div className={`${styles.lists} container`}>{children}</div>
}

export default Lists