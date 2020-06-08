import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled from "styled-components"

const Logo = styled.img`
  max-height: 300px;
`

const Statement = styled.div`
  width: 80%;
  margin: 0 auto;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Ward Melville STEM Alumni Group" />
    <Logo src="./STEMAlumniLogo17.png" />
    <Link to="/members">
      <p>Members</p>
    </Link>
    <h1>Mission</h1>
    <Statement>
      <p>
        The Ward Melville STEM Alumni Group was created to ease the transition
        to college and to life beyond. Please reach out to any of us, we would love to chat with you.
      </p>
    </Statement>
  </Layout>
)

export default IndexPage
