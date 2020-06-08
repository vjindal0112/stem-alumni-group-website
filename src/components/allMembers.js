import React from "react"
import styled from "styled-components"

const NameLink = styled.a`
  color: #328d7c;
  &:hover {
    text-decoration: none;
  }
  &:visited {
    color: #328d7c;
  }
`

const NamesContainer = styled.div`
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  @media (min-width: 768px) {
    margin-left: 100px;
    margin-right: 100px;
  }
`

const listOfNames = [
  ["Varun Jindal", "University of Michigan", "https://varunjindal.com"],
  [
    "Kevin Xu",
    "University of Pennsylvania",
    "https://www.linkedin.com/in/kevin-xu-561531183/",
  ],
  [
    "Albert Tian",
    "UC Berkeley",
    "https://www.linkedin.com/in/albert-tian-9a894b196/",
  ],
  [
    "Alice Yang",
    "California Institute of Technology",
    "https://www.linkedin.com/in/alice-yang-7b83b4142/",
  ],
  [
    "Andrew Zhang",
    "Columbia University",
    "https://www.linkedin.com/in/andrewdzhang/",
  ],
  [
    "Arianna Parkhideh",
    "Washington University",
    "https://www.facebook.com/tulipsareverypretty",
  ],
  [
    "Kathleen Esfahany",
    "Massachusetts Institute of Technology",
    "https://www.knesfahany.com/",
  ],
  [
    "Emily Huang",
    "Massachusetts Institute of Technology",
    "https://www.linkedin.com/in/emily-huang-9b42a3157/",
  ],
  [
    "Jocelyn Su",
    "Carnegie Mellon University",
    "https://www.linkedin.com/in/jocelyn-su-059603186/",
  ],
  [
    "Julie Helenek",
    "Cornell University",
    "https://www.linkedin.com/in/julie-helenek-29178b1a7/",
  ],
]

const AllMembers = () => {
  return (
    <NamesContainer>
      <table>
        <thead></thead>
        <tbody>
          {listOfNames.map(name => (
            <tr>
              <td>
                <NameLink href={name[2]} target="_blank">
                  {name[0]}
                </NameLink>
              </td>

              <td>{name[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </NamesContainer>
  )
}

export default AllMembers
