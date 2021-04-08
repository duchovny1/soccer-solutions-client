import React from 'react'
import styles from './SingleGameInfo.module.css'

const SingleGameInfo = (props) => {
    
      return (
          <div className={styles.headerrow}>
            <div className={styles.teaminforow}>Granada</div>
            <div>22 : 00</div>
            <div className={styles.teaminforow}>Atletico Madrid</div>
          </div>
      )

}

export default SingleGameInfo;