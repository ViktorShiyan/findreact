import React from 'react';
import request from 'request';
import _ from 'lodash';
import formater from '../../tools/numberFormater';

export default class FormMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {code: []};
    }


    requestToApi = () => {
        let url = "https://viktorshiyan.ru/findmore?number=" + this.state.text;

        request({
            url: url,
            json: true,
        }, (error, response, body) => {
            if ((!error && response.statusCode === 200) || (!error && response.statusCode === 304)) {
                //console.log(body);// Print the json response
                //console.log('THIS is Array' + JSON.stringify(d));
                this.setState({code: body.array});
                //console.log(this.state.code[0]);
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
                        }) : ''}</table>
                </div>
            </main>
        )
    }
}
