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
                         src="https://raw.githubusercontent.com/openintents/filemanager/master/promotion/icons/ic_launcher_filemanager_512.png"
                         alt="Файл" width="140" height="140"/>
                    <h2>Номера из файла</h2>
                    <p>Эта функция пока не реализована</p>
                    <p><Link className="btn btn-secondary" to={"/home"} role="button">Даже не пытайся &raquo;</Link></p>
                </div>
            </div>
        )
    }
}
