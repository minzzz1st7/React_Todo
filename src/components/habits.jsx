import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleReset = () => {
    console.log("onResetAll이 클릭도ㅙㅆ다!!!");
    this.props.onResetAll();
  };

  render() {
    return (
      <>
        <ul>
          {this.props.habits.map((habit) => (
            // 연두색 habit이라는 prop 이름에 주황색 habit의 데이터를 전달해주는 것
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
