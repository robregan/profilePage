import React from 'react'
import Profile from './Profile'
import styles from './ProfileList.module.css'
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'
const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div className={styles['profile-container']}>
          <Profile
            image={profile1}
            name={'Adora Nwodo'}
            job={'Cloud Engineer'}
            company={'Microsoft'}
            link={'https://twitter.com/AdoraNwodo'}
          />
          <Profile
            image={profile2}
            name={'Frank Reynolds'}
            job={'DevOps Engineer'}
            company={'Github'}
            link={'#'}
          />
          <Profile
            image={profile3}
            name={'Lisa Tinuke'}
            job={'Web Developer'}
            company={'Google'}
            link={'#'}
          />
        </div>
      </div>
    </section>
  )
}

export default ProfileList
