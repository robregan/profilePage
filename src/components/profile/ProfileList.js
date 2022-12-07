import React from 'react'
import Profile from './Profile'
import styles from './ProfileList.module.css'
import { profiles } from '../../profile-data'

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div className={styles['profile-container']}>
          {profiles.map((profile, index) => {
            const { img, name, job, company, link } = profile
            return (
              <Profile
                key={index}
                image={img}
                name={name}
                job={job}
                company={company}
                link={link}
              />
            )
          })}
          {/* <Profile
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
          /> */}
        </div>
      </div>
    </section>
  )
}

export default ProfileList
