import styles from './ExplanationSection.module.css'
const ExplanationSection = () => {
  return (
    <div className={styles.explanation}>
		    <div className={`${styles['explanation__text-block']} container`}>
				    <h1 className={styles['explanation__title']}>Delicious Food, Delivered to you</h1>
				    <p className={styles['explanation__description']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate delectus deserunt laborum maiores odio perferendis praesentium qui quos, recusandae tempore.</p>
				    <p className={styles['explanation__description']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate delectus deserunt laborum maiores odio perferendis praesentium qui quos, recusandae tempore.</p>
		    </div>
    </div>
  )
}

export default ExplanationSection
