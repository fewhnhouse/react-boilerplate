import React, { Component } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
color: red;
font-size: 15px;
`

export default class App extends Component {
    render() {
        return (
            <Paragraph>React Boilerplate running.</Paragraph>
        );
    }
}