import React from 'react';
import _ from 'lodash';
import formater from '../../tools/numberFormater';
import rp from "request-promise";

export default class FormMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {code: []};
    }


    requestToApi = () => {

        var options = {
            uri: "https://viktorshiyan.ru/findmore?number=" + this.state.text,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        rp(options)
            .then((body) => {
                this.setState({code: body.array});
            })
            .catch((err) => {
                this.setState({code: {"array": [{"number": "Error", "code": "", "company": err.statusCode, "region": ""}]}});
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
                    <p className={"display-4"}>Информация о списке номеров</p>
                    <div className={"alert alert-primary"}>
                        <p>Для правильной работы приложения номера нужно вводить без семерки (в формате 9879991234).
                            Что бы получить информацию о нескольких номерах разделяйте номера символом ";"
                            (пример 9879991234;9879991235;9879991236)</p>
                    </div>
                    <form className={"form"} onSubmit={this.handleSubmit}>
                        <div className={"form-group mx-sm-3 mb-2"}>
                            <textarea className={"form-control form-control-lg"}
                                      onChange={this.handleChange} rows={6} value={this.state.text}/>
                        </div>
                        <input className={"btn btn-primary mb-2"} type='submit' value='Отправить'/>
                    </form>
                    <table className={"table"}>
                        <thead className="thead-dark">
                        <tr>
                            <th>Номер</th>
                            <th>Компания</th>
                            <th>Регион</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.code.length !== 0 ? this.state.code.reduce((acc, cur) => {
                            if (cur) {
                                return [...acc, cur];
                            } else {
                                let err = "ошибка номера";
                                return [...acc, {number: err, company: err, region: err}];
                            }
                        }, []).map((cur) => {
                            return <tr key={_.uniqueId('row_')}>
                                <td>{formater(cur.number)}</td>
                                <td>{cur.company}</td>
                                <td>{cur.region}</td>
                            </tr>
                        }) : ''}
                        </tbody>
                    </table>
                </div>
            </main>
        )
    }
}
