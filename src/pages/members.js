import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import AllMembers from "../components/allMembers"

const Logo = styled.img`
  max-height: 300px;
`

const Members = () => (
  <Layout>
    <SEO title="STEM Alumni Community Members" />
    <Link to="/">
      <Logo src="./STEMAlumniLogoFinal.png" />
    </Link>
    <h1>Members</h1>
    <AllMembers />
    <p><Link to="/">Back</Link></p>
  </Layout>
)

export default Members
