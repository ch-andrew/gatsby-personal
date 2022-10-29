import React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>CHRISTOPHER ANDREW</h1>
          <h2>Web Developer</h2>
          <p>I like to <span>design</span> and <span>build</span> things on the <span>web</span>. In addition to my love for web technology and design, I am also interested in expanding both knowledge <span>beyond</span> the web environment</p>
        </div>
      </section>
    </Layout>
  )
}
