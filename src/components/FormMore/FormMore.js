import React from 'react';
import request from 'request';
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
                console.log(body);// Print the json response
                let d = body.array;
                console.log('THIS is Array' + JSON.stringify(d));
                this.setState({code: body.array});
                console.log(this.state.code[0]);
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
                                      onChange={this.handleChange}>{this.state.text}</textarea>
                        </div>
                        <input className={"btn btn-primary mb-2"} type='submit' value='Отправить'/>
                    </form>
                    <p>{this.state.code.length !== 0 ? this.state.code.reduce((acc, cur) => {
                        if (cur) {
                            return [...acc, `Номер:${cur.number} Регион:${cur.region} Компания:${cur.company}`];
                        } else {
                            return [...acc, `Ошибка формата номера. Проверьте правильность номера`];
                        }
                    }, []).map((cur) => {
                        return <p> {cur}</p>
                    }) : 'Ждём запрос'}</p>
                </div>
            </main>
        )
    }
}
