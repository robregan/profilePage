import React from 'react'
import styles from './Profile.module.css'
import profile1 from '../../assets/profile1.png'
import {
  AiOutlineGithub,
  AiOutlineGooglePlus,
  AiOutlineTwitter,
} from 'react-icons/ai'
const Profile = () => {
  return (
    <div className={styles.profile}>
      <img src={profile1} alt='profile' />
      <div className={styles['profile-content']}>
        <h3>My Profile</h3>
        <div className={styles.text}>
          <p>Name: </p>
          <p>Adora Nwodo</p>
        </div>
        <div className={styles.text}>
          <p>Job: </p>
          <p>Cloud Engineer</p>
        </div>
        <div className={styles.text}>
          <p>Company: </p>
          <p>Microsoft</p>
        </div>

        <div className={styles.icons}>
          <AiOutlineTwitter color='#666' size={20} />
          <AiOutlineGithub color='#666' size={20} />
          <AiOutlineGooglePlus color='#666' size={20} />
        </div>
        <div className={styles.btn}>
          <a href='#' target='_blank'>
            View Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
