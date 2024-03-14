import React, { Component } from "react";
import { FacebookProvider, Page } from "react-facebook";

export default class LiveCheckbox extends Component {
  render() {
    return (
      <FacebookProvider appId="872263577698057">
        <Page href="https://www.facebook.com" tabs="timeline" />
      </FacebookProvider>
    );
  }
}
