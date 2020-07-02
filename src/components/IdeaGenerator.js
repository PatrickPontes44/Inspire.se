import React, { Component } from 'react';
import axios from 'axios';
import { FiArrowUpCircle, FiZap } from 'react-icons/fi';

export class IdeaGenerator extends Component {
    state = {
        quote: '',
        quoteAuthor: '',
        urlQuote: 'https://quote-garden.herokuapp.com/api/v2/quotes/random',
        urlAdvice: 'https://api.adviceslip.com/advice'
    }

    handleQuoteRequest = (e)=>{
        e.preventDefault();
        axios.get(this.state.urlQuote)
        .then(res => {
            //this.setState({ quote: res.data.slip.advice}) //Usar esse para pegar um conselho
            this.setState({
                quote: res.data.quote.quoteText,
                quoteAuthor: res.data.quote.quoteAuthor
            })
            //console.log(res.data);
        })
        .catch(err => {
            this.setState({ quote: 'Hmm. Parece que algo deu errado!'})
        })
    }
    render() {
        return (
            <div className="ideas-container">
                <div className="quote-result-container">
                <h2 id="quote" title={this.state.quoteAuthor}>{this.state.quote}</h2>
                <a href="#0"
                 className="button"
                 style={{backgroundColor: '#e74c3c', fontSize: '2em', padding: '10px'}}
                 onClick={this.handleQuoteRequest}>
                    Be Inspired <FiZap />
                </a>   
                </div>

                <a href="#main-container"
                 className="button"
                  style={{backgroundColor: '#1abc9c', position: "absolute", bottom: "30px", right: "30px"}}>
                    Back <FiArrowUpCircle />
                </a>
            </div>
        )
    }
}

export default IdeaGenerator
