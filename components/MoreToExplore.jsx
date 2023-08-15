import React from 'react'
import styles from "../styles/Home.module.css";
import CountUp from "../src/aboutcounter/brand.jsx" 

export default function about() {
  return (
    <div>
      <img src="/img/Group 3.png"/>
      <div className={styles.section}>

        <br/>

        <div className={styles.row}>

          <div className={styles.col33}>
            <div className={styles.aboutCards}>
              <h3>
                <CountUp end={50} start={0}/>
              </h3>

              <p>
                brands nationwide
              </p>
              <p className={styles.bottom}>
                as of March 20, 2023
              </p>
            </div>
          </div>

          <div className={styles.col33}>
            <div className={styles.aboutCards}>
              <h3>
                <CountUp end={2000} start={0}/>
              </h3>

              <p>
                users nationwide
              </p>
              <p className={styles.bottom}>
                as of March 20, 2023
              </p>
            </div>
          </div>

          <div className={styles.col33}>
            <div className={styles.aboutCards}>
              <h3>
                <CountUp end={25} start={0}/>
              </h3>
              <p>
                states across the country
              </p>
              <p className={styles.bottom}>
                as of March 20, 2023
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.padding}>
        <h1>
          Why use?
        </h1>

        <p>
        There are several reasons why consumers and audiences might want to use a platform that connects people from different anti-mainstream cultures together.
        </p>

        <div className={styles.contentContainer}>
          <div className={styles.colContainer}>
            <div className={styles.columnTwo}>
                <img src="/img/pexels-leticia-ribeiro-2112651.jpg"/>
            </div>
            <div className={styles.columnOne}>
              <p className={styles.xlFont}>
                First
              </p>
              <p>
                It provides a sense of belonging and community for individuals who may feel isolated or marginalized in mainstream society. 
                Many people who identify with anti-mainstream cultures may feel like they don't fit in with the dominant culture and values of society, and may not have a sense of connection to others who share their interests and values. 
                By providing a space where these individuals can connect with others who share their interests and beliefs, your platform can help to reduce feelings of isolation and build a sense of community among its users.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.colContainer}>
            <div className={styles.columnOne}>
              <p className={styles.xlFont}>
                Second
              </p>
              <p>
                It offers a unique and authentic way of exploring different subcultures and movements. Our platform provides an opportunity for people to interact and learn from different anti-mainstream cultures. 
                It can also be a way for them to find like-minded people and engage in meaningful conversations, which can be hard to find in mainstream society.
              </p>
            </div>
            <div className={styles.columnTwo}>
                <img src="/img/vivek-sharma.jpg"/>
            </div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.colContainer}>
            <div className={styles.columnTwo}>
                <img src="/img/natalie-hua.jpg"/>
            </div>
            <div className={styles.columnOne}>
              <p className={styles.xlFont}>
                Third
              </p>
              <p>
                It amplifies the voices and visibility of anti-mainstream cultures in mainstream society. 
                By connecting a large number of people from different subcultures and movements, your platform can help to give these groups a greater presence and influence in mainstream society. 
                It can also be a platform for them to express their views and ideas, which can be heard and seen by a wider audience.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.colContainer}>
            <div className={styles.columnOne}>
              <p className={styles.xlFont}>
                Fourth
              </p>
              <p>
                It can be a source of inspiration for people looking to start their own projects or movements. 
                Your platform can provide a space for individuals to learn from the experiences of others, to network and to collaborate on projects. 
                This can lead to the emergence of new subcultures or movements and the creation of new opportunities for people.
              </p>
            </div>
            <div className={styles.columnTwo}>
                <img src="/img/dami-adebayo-brands.jpg"/>
            </div>
          </div>
        </div>

        <p>
          In summary, our platform offers a sense of belonging and community, a unique way to explore different subcultures, amplifies the voices of anti-mainstream culture, and offers inspiration and opportunities for its users. 
          These features make it an extremely valuable resource for consumers and audiences who are interested in anti-mainstream cultures and movements.
        </p>

      </div> 

      <div className={styles.section}>
        <p className={styles.p}>
          More To Explore
        </p>

        <br/>

        <div className={styles.row}>

          <div className={styles.col33}>
            <div className={styles.team}>
              <img src="/img/pexels-arianna-jadé-2896823.jpg"/>
              <p>
                BRANDS
              </p>
              
            </div>
          </div>

          <div className={styles.col33}>
            <div className={styles.team}>
              <img src="/img/pexels-athena-2081199.jpg"/>
              <p>
                SHOP
              </p>

            </div>
          </div>

          <div className={styles.col33}>
            <div className={styles.team}>
              <img src="/img/pexels-cottonbro-studio-4937224.jpg"/>
              <p>
                COLLECTIONS
              </p>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}