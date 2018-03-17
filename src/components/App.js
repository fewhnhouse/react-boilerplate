import React, {Component} from 'react';
import styled from 'styled-components';
import logo from '../images/react-logo.png';

const Paragraph = styled.p `
color: blue;
font-size: 15px;
`

export default class App extends Component {
    render() {
        return (
            <div>
                <Paragraph>React Boilerplate running.</Paragraph>
                <img src={logo}/>
            </div>
        );
    }
}