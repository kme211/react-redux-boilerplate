// @flow
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Container from "../common/Container";
import type { Taco } from "../../types";

class TacoPage extends Component {
  render() {
    const {
      name,
      ingredients
    }: { name: string, ingredients: string[] } = this.props.taco;
    return (
      <Container>
        <h1>{name}</h1>
        <h2>Ingredients:</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </Container>
    );
  }
}

TacoPage.propTypes = {
  id: PropTypes.string.isRequired,
  taco: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const id: string = ownProps.match.params.id;
  const taco: Taco = state.tacos.find(taco => taco.id === id);
  return { taco };
}

export default withRouter(connect(mapStateToProps)(TacoPage));
