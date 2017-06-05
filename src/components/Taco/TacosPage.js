// @flow
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Container from "../common/Container";
import TacoList from "./TacoList";
import Icon from "../Icon";
import type { Taco } from "../../types";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    color: white;
    background: tomato;
    padding: 4px;
    display: inline-block;
    border: none;
    font-size: 1em;
    cursor: pointer;
`;

class TacosPage extends Component {
  render() {
    return (
      <Container>
        <Header>
          <h1>Tacos</h1>
          <Button><Icon icon="plus" /> Add</Button>
        </Header>
        <TacoList tacos={this.props.tacos} />
      </Container>
    );
  }
}

TacosPage.propTypes = {
  tacos: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const tacos: Taco[] = state.tacos;
  return { tacos };
}

export default withRouter(connect(mapStateToProps)(TacosPage));
