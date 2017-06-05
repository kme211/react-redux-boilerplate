import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import TacoListItem from "./TacoListItem";

const Wrapper = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const TacoList = ({ tacos }) => {
  return (
    <Wrapper>
      {tacos.map(taco => <TacoListItem key={taco.id} {...taco} />)}
    </Wrapper>
  );
};

TacoList.propTypes = {
  tacos: PropTypes.array.isRequired
};

export default TacoList;
