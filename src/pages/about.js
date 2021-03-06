import React from "react"
import Layout from "../components/layout"
import ilia from "../images/ilia.jpg"
import max from "../images/max.jpg"

const AboutPage = () => (
  <Layout>
    <div>
      <h1>Обо мне</h1>
      <p>
        Меня зовут Дима Хинев живу в городе Кишинев Республика Молдова! <br />
        Люблю:{" "}
        <b>
          <i>кататься на велике, бегать, плавать</i>
        </b>
        <br />
        Вот пара фоток
      </p>

      <img
        src={max}
        alt="max"
        style={{
          width: "20rem",
          marginRight: "1rem",
          borderRadius: "1rem",
        }}
      />
      <img
        src={ilia}
        alt="ilia"
        style={{
          width: "20rem",
          borderRadius: "1rem",
        }}
      />
    </div>
  </Layout>
)

export default AboutPage
