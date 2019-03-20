import React from "react";
import Section from "./Section";

import "./index.css";

class Accordian extends React.Component {
  static defaultProps = {
    sections: []
  };

  state = {
    visibleSectionIndex: null
  };

  handleSetActiveSecion = sectionIndex => {
    this.setState({ visibleSectionIndex: sectionIndex });
  };

  renderItem(section, idx, visibleSectionIndex) {
    return (
      <li className="Accordion__item" key={idx}>
        <button type="button" onClick={() => this.handleSetActiveSecion(idx)}>
          {section.title}
        </button>
        {visibleSectionIndex === idx && <p>{section.content}</p>}
      </li>
    );
  }

  render() {
    const { visibleSectionIndex } = this.state;
    const { sections } = this.props;

    return (
      <ul className="Accordion">
        {sections.map((section, idx) =>
          this.renderItem(section, idx, visibleSectionIndex)
        )}
      </ul>
    );
  }
}
export default Accordian;
