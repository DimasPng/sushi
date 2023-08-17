import styles from './ExplanationSection.module.css'
const ExplanationSection = () => {
  return (
    <div className={styles.explanation}>
		    <div className={`${styles['explanation__text-block']} container`}>
				    <h1 className={styles['explanation__text-block__title']}>Delicious Food, Delivered to you</h1>
				    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate delectus deserunt laborum maiores odio perferendis praesentium qui quos, recusandae tempore.</p>
				    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate delectus deserunt laborum maiores odio perferendis praesentium qui quos, recusandae tempore.</p>
		    </div>
    </div>
  )
}

export default ExplanationSection
