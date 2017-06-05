import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router";
import { NavLink } from "react-router-dom";
import * as routes from "../routes";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: tomato;
`;

const Wrapper = styled.div`
    font-family: Helvetica, sans-serif;
    font-size: 16px;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: tomato;
    display: block;
    margin: 0.25em;
    padding: 0.5em;
    transition: all 0.4s;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid tomato;
    }
`;

const activeStyle = {
  border: "1px solid tomato",
  background: "tomato",
  color: "white"
};

const Layout = () => {
  return (
    <Wrapper>
      <Title>React/Redux App Boilerplate</Title>
      <Nav>
        <StyledLink exact to="/" activeStyle={activeStyle}>
          Home
        </StyledLink>
        <StyledLink to="/tacos" activeStyle={activeStyle}>Tacos</StyledLink>
      </Nav>
      <Switch>
        <Route exact path="/" component={routes.Home} />
        <Route exact path="/tacos" component={routes.TacosPage} />
        <Route exact path="/taco/:id" component={routes.TacoPage} />
      </Switch>
    </Wrapper>
  );
};

export default Layout;
