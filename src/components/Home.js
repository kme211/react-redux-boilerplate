import React, { Component } from "react";
import styled from "styled-components";
import Container from "./common/Container";

const Table = styled.table`
  border-spacing: 0.5rem;
`;

const Row = styled.tr`
  &:nth-child(odd) {
    background-color: #ccc;
  }
`;

const TableHead = styled.thead`
  font-weight: bolder;
`;

const Tech = styled.td`
  padding: 0.5rem;
  width: 200px;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: tomato;
`;

const Desc = styled.td`
  padding: 0.5rem;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <h1>Home</h1>
        <p>
          This is a frontend app boilerplate that utilizes the following technologies:
        </p>
        <Table>
          <TableHead>
            <tr>
              <Tech>Technology</Tech>
              <Desc>Description</Desc>
            </tr>
          </TableHead>
          <tbody>
            <Row>
              <Tech>
                <Anchor
                  href="https://github.com/facebook/react"
                  target="_blank"
                >
                  React
                </Anchor>
              </Tech>
              <Desc>Javascript UI library</Desc>
            </Row>
            <Row>
              <Tech>
                <Anchor href="https://github.com/reactjs/redux" target="_blank">
                  Redux
                </Anchor>
              </Tech>
              <Desc>Predictable state container for JavaScript apps</Desc>
            </Row>
            <Row>
              <Tech>
                <Anchor
                  href="https://github.com/ReactTraining/react-router"
                  target="_blank"
                >
                  React Router
                </Anchor>
              </Tech>
              <Desc>Declarative routing for React</Desc>
            </Row>
            <Row>
              <Tech>
                <Anchor
                  href="https://github.com/styled-components/styled-components"
                  target="_blank"
                >
                  Styled Components
                </Anchor>
              </Tech>
              <Desc>
                Utilizes tagged template literals to style your components
              </Desc>
            </Row>
            <Row>
              <Tech>
                <Anchor href="https://webpack.js.org/" target="_blank">
                  Webpack
                </Anchor>
              </Tech>
              <Desc>Module bundler</Desc>
            </Row>

          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Home;
