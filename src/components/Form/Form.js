import React from 'react';
import request from 'request';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: this.props.text};
    }



    r = () => {
        let url = "http://viktorshiyan.ru:3000/find?number=" + this.state.text;

        request({
            url: url,
            json: true,
        },(error, response, body) => {
            if ((!error && response.statusCode === 200) || (!error && response.statusCode === 304)) {
                console.log(body) ;// Print the json response
                this.setState({code : body.code});
                this.setState({company : body.company});
                this.setState({region : body.region});
            }
        })
    };



    handleSubmit = (e) => {
        e.preventDefault();
        this.r();
    };

    handleChange = (e) => {
        this.setState({text: e.target.value});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Введите номер без семерки.</p>
                    <p>Пример: 9840001234</p>
                    <input onChange={this.handleChange} value={this.state.text}/>
                    <input type='submit' value='Отправить'/>
                </form>
                <p>{this.state.text}</p>
                <p>{this.state.company}</p>
                <p>{this.state.region}</p>
            </div>
        )
    }
}