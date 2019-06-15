import React from 'react';
import {Link} from 'react-router-dom';

export default class Marketing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
    }


    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle"
                         src="https://symvolik.ru/images/chisla/1.png"
                         alt="Еденица" width="140" height="140"/>
                    <h2>Один номер</h2>
                    <p>Узнай информацию о номере мобильного телефона.</p>
                    <p><Link className="btn btn-secondary" to={"/first"} role="button">Перейти &raquo;</Link></p>
                </div>

                <div className="col-lg-4">
                    <img className="rounded-circle"
                         src="https://zametkinapolyah.ru/wp-content/uploads/2016/07/want31088-1zcV2Q1441993263.png"
                         alt="Множество" width="140" height="140"/>
                    <h2>Список номеров</h2>
                    <p>Узнай информацию о списке мобильных номеров.</p>
                    <p><Link className="btn btn-secondary" to={"/more"} role="button">Перейти &raquo;</Link></p>
                </div>

                <div className="col-lg-4">
                    <img className="rounded-circle"
                         src="data:image/png;base64,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"
                         alt="Файл" width="140" height="140"/>
                    <h2>Номера из файла</h2>
                    <p>Эта функция пока не реализована</p>
                    <p><Link className="btn btn-secondary" to={"/home"} role="button">Даже не пытайся &raquo;</Link></p>
                </div>
            </div>
        )
    }
}
