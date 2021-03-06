import React from 'react';
import rp from 'request-promise';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
    }


    requestToApi = () => {

        var options = {
            uri: "https://viktorshiyan.ru/find?number=" + this.state.text,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        rp(options)
            .then((body) => {
                this.setState({code: body.code, company: body.company, region: body.region});
            })
            .catch((err) => {
                this.setState({code: '', company: `Error - ${err.statusCode}`, region: ''});
            });
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
                    <p>{this.state.company}</p>
                    <p>{this.state.region}</p>
                </div>
            </main>
        )
    }
}
