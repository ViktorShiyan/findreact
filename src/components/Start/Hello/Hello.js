import React from 'react';

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
    }


    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Приветствую друг.</h1>
                <p className="lead">Это простое приложение создано для тебя, что бы ты мог получать информацию
                    о мобильных номерах зарегистрированных в России. Информациия взята из официального источника</p>
                <hr className="my-4"/>
                <p>Я надеюсь это приложение поможет тебе.</p>
            </div>
        )
    }
}
