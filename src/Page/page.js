import React from "react";
import "./page.css";

class Page extends React.Component {
  render() {
    return (
      <div id="page-container">
        <button onClick={this.props.newWord}>New Word</button>
        <h1>Word: {this.props.query} </h1>

        <div id="search-grid">
          <div id="definitions">
            <h2>Definition</h2>
            <ol>
              <li>{this.props.definitions.one}</li>
            </ol>
          </div>
          <div id="synonyms">
            <h2>Synonym</h2>
            <ol>
              <li>{this.props.synonyms.one}</li>
            </ol>
          </div>
          <div id="antonyms">
            <h2>Part of Speech</h2>
            <ol>
              <li>{this.props.partOfSpeech.speech}</li>
            </ol>
          </div>
          <div id="examples">
            <h2>Example</h2>
            <ol>
              <li>{this.props.examples.one}</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
