import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const TacoListItem = ({ name, id }) => (
  <li><Link to={"/taco/" + id}>{name}</Link></li>
);

TacoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default TacoListItem;
