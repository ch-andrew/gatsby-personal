import React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/about.module.css'

export default function About() {
  return (
    <Layout>
      <section>
        <div className={styles.container}>
          <h1>ABOUT ME</h1>
          <h2>design + build</h2>
          <p>I’m an aspiring web developer with experience as an IT specialist in handling multiple projects. I have a passion for turning UI/UX design into functional applications. I’m always finding opportunity to learn in the latest web application technology.</p>
        </div>

        <div className={styles.container}>
          <h2>Experiences</h2>
          <div className={styles.gridContainer}>
            <div className={styles.gridLeft}>
              <p><span>Kooperatif</span> - IT Specialist</p>
            </div>
            <div className={styles.gridRight}>
              <p>December 2019 - March 2020</p>
            </div>
          </div>
          <ul>
            <li>Managing and solving IT related needs for the company</li>
            <li>Designing company profile’s website and Koop app</li>
            <li>Managing relations with third parties</li>
          </ul>
        </div>

        <div className={styles.container}>
          <h2>Education</h2>
          <div className={styles.gridContainer}>
            <div className={styles.gridLeft}>
              <p><span>Purwadhika</span> - Web & Mobile Development</p>
            </div>
            <div className={styles.gridRight}>
              <p>2019 - 2019</p>
            </div>
          </div>
          <ul>
            <li>Passed all exams for each syllabus</li>
            <li>Created a final project for Purwadhika qualification of graduation</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
