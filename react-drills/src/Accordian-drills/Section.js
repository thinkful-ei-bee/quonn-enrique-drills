import React from "react";

class Section extends React.Component {
  state = {};

  handleClick = newString => {};

  render() {
    return (
      <div className={"hidden"} isVis={false}>
        {this.props.title}
        {this.props.content}
      </div>
    );
  }
}
export default Section;
