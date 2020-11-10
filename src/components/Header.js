import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Kemployee Kirectory</h1>
        <h3>Employee Directory</h3>
        <p>
          You may click on the name icon to filter by name alphabetically.
        </p>
        <p>
          You may also use the search box to narrow your results.
        </p>
      </div>
    );
  }
}