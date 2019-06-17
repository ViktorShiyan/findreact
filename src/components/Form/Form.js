import React from 'react';
import request from 'request';
import formater from '../../tools/numberFormater';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
    }


    requestToApi = () => {
        let url = "https://viktorshiyan.ru/find?number=" + this.state.text;

        request({
            url: url,
            json: true,
        }, (error, response, body) => {
            if ((!error && response.statusCode === 200) || (!error && response.statusCode === 304)) {
                //console.log(body);// Print the json response
                this.setState({code: body.code});
                this.setState({company: body.company});
                this.setState({region: body.region});
            }
        })
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.requestToApi();
    };

    handleChange = (e) => {
        this.setState({text: e.target.value});
    };

    render() {
        return (
            <main className="container pb-3">
                <div className={"jumbotron"}>
                    <p className={"display-4"}>Информация о номере</p>
                    <div className={"alert alert-primary"}>
                        <p>Введите номер без семерки.</p>
                    </div>
                    <form className={"form-inline"} onSubmit={this.handleSubmit}>
                        <div className="form-group mb-2">
                            <input type="text" readOnly className="form-control-plaintext" id="staticEmail2"
                                   value="Формат ввода 9871235566"/>
                        </div>
                        <div className={"form-group mx-sm-3 mb-2"}>
                            <input placeholder={"Enter number"} className={"form-control form-control-lg"}
                                   onChange={this.handleChange} value={this.state.text}/>
                        </div>
                        <input className={"btn btn-primary mb-2"} type='submit' value='Отправить'/>
                    </form>
                    <p>{formater(this.state.text)}</p>
                    <p>{this.state.company}</p>
                    <p>{this.state.region}</p>
                </div>
            </main>
        )
    }
}
