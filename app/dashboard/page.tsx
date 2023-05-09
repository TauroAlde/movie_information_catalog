import styles from './page.module.css'

function DashboardPage() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&display=swap" rel="stylesheet"></link>
      <div className={styles.navbar}>
        <h1 className={styles.title}>
          Movie Infromation Catalog
        </h1>
      </div>
    </div>
    )
}

export default DashboardPage;