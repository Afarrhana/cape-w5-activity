import React, { Component } from 'react';
import Square from './square'

export default class Board extends React.Component {

    constructor() {
        this.turnX = createRef();
        this.turnX.current = true;
        this.setTurnX = this.setTurnX.bind(this);
        this.getTurnX = this.getTurnX.bind(this);
    }

    setTurnX(val) {
        this.turnX.current = val;
    }

    getTurnX() {
        return this.turnX.current;
    }

    renderSquare(i) {
        return <Square value={i} setterFunc={setTurnX()} getterFunc={getTurnX()} />;
    }


render() {
    const status = 'Next player: X';
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
    );
} }

