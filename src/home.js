import React, { Component } from "react";
import Page from "./Page/page";
import apiKey from "./apiKey.js";
import "./home.css";

class Home extends Component {
  state = {
    home: true,
    page: false,
    query: "",
    definitions: {
      one: ""
    },
    synonyms: {
      one: ""
    },
    partOfSpeech: {
      speech: ""
    },
    examples: {
      one: ""
    }
  };

  wordSearch = () => {
    let lower = this.state.query.toLowerCase();
    fetch(`https://wordsapiv1.p.mashape.com/words/${lower}`, {
      headers: {
        "X-RapidAPI-Key": apiKey
      }
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          definitions: {
            one: data.results[0].definition
          },
          synonyms: {
            one: data.results[0].synonyms[0]
          },
          partOfSpeech: { speech: data.results[0].partOfSpeech },
          examples: {
            one: data.results[0].examples[0]
          }
        })
      )
      .catch(err => console.log(err));
  };

  handleInput = e => {
    e.preventDefault();
    this.setState(
      {
        query: this.search.value,
        home: false,
        page: true
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          this.wordSearch();
        }
      }
    );
  };

  newWord = () => {
    this.setState({ home: true, query: "" });
  };

  render() {
    if (this.state.home) {
      return (
        <div>
          <div className="container">
            <h1 id="home-h1">Wordie</h1>
            <form onSubmit={this.handleInput}>
              <input
                type="text"
                placeholder="Word to search..."
                ref={input => (this.search = input)}
              />
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <Page
          query={this.state.query}
          definitions={this.state.definitions}
          synonyms={this.state.synonyms}
          partOfSpeech={this.state.partOfSpeech}
          examples={this.state.examples}
          wordSearch={this.wordSearch}
          newWord={this.newWord}
        />
      );
    }
  }
}

export default Home;
