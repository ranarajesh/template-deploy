import React from 'react';

import Combinatorics from 'js-combinatorics';

import {
  Container,
  Input,
  Segment,
  Image,
  Header,
  List,
  Divider,
  Grid,
  Label,
  Button,
  Rail,
} from 'semantic-ui-react';

class TTNames extends React.Component {
  state = {
    ar1: [],
    ar2: [],
    ar3: [],
    ar4: [],
    ar5: [],
    ar6: [],
    result: [],
  };

  componentDidMount() {}

  _handleKeyDown = (e) => {
    const _name = e.target.name;
    let _value = e.target.value;
    _value = _value.slice(0, 1).toUpperCase() + _value.slice(1) + ' ';

    if (e.key === 'Enter') {
      this.setState((prevState) => ({
        [_name]: [...prevState[_name], _value],
      }));
      e.target.value = '';
    }
  };

  generate = () => {
    this.setState({
      result: [],
    });
    const ar1 = this.state.ar1.length ? this.state.ar1 : [''];
    const ar2 = this.state.ar2.length ? this.state.ar2 : [''];
    const ar3 = this.state.ar3.length ? this.state.ar3 : [''];
    const ar4 = this.state.ar4.length ? this.state.ar4 : [''];
    const ar5 = this.state.ar5.length ? this.state.ar5 : [''];
    const ar6 = this.state.ar6.length ? this.state.ar6 : [''];
    this.setState({
      result: Combinatorics.cartesianProduct(
        ar1,
        ar2,
        ar3,
        ar4,
        ar5,
        ar6
      ).toArray(),
    });
  };
  render() {
    const { ar1, ar2, ar3, ar4, ar5, ar6, result } = this.state;
    return (
      <Container>
        <h3 class="ui header">Create TT Names</h3>
        <div class="ui stackable two column grid">
          <div class="column">
            <div class="ui segment">
              <Input
                // label={{ basic: true, content: 'Word1 List' }}
                // labelPosition="Left"
                placeholder="Enter Word1..."
                onKeyDown={this._handleKeyDown}
                name="ar1"
              />
              <div role="list" class="ui list">
                {ar1.map((item, i) => {
                  return (
                    <Label color="teal" horizontal style={{ margin: '10px' }}>
                      {item}
                    </Label>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              <Input
                // label={{ basic: true, content: 'Word2 List' }}
                // labelPosition="Right"
                placeholder="Enter Word2..."
                onKeyDown={this._handleKeyDown}
                name="ar2"
              />
              <div role="list" class="ui list">
                {ar2.map((item, i) => {
                  return (
                    <Label color="teal" horizontal style={{ margin: '10px' }}>
                      {item}
                    </Label>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              <Input
                // label={{ basic: true, content: 'Word3 List' }}
                // labelPosition="Right"
                placeholder="Enter Word3.."
                onKeyDown={this._handleKeyDown}
                name="ar3"
              />
              <div role="list" class="ui list">
                {ar3.map((item, i) => {
                  return (
                    <Label color="teal" horizontal style={{ margin: '10px' }}>
                      {item}
                    </Label>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              <Input
                // label={{ basic: true, content: 'Word4 List' }}
                // labelPosition="Right"
                placeholder="Enter Word4..."
                onKeyDown={this._handleKeyDown}
                name="ar4"
              />
              <div role="list" class="ui list">
                {ar4.map((item, i) => {
                  return (
                    //<div role="listitem" class="item" key={i}>
                    <Label color="teal" horizontal style={{ margin: '10px' }}>
                      {item}
                    </Label>
                    //</div>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              <Input
                // label={{ basic: true, content: 'Word5 List' }}
                // labelPosition="Right"
                placeholder="Enter Word5..."
                onKeyDown={this._handleKeyDown}
                name="ar5"
              />
              <div role="list" class="ui list">
                {ar5.map((item, i) => {
                  return (
                    <Label color="teal" horizontal style={{ margin: '10px' }}>
                      {item}
                    </Label>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              <Input
                // label={{ basic: true, content: 'Word6 List' }}
                // labelPosition="Right"
                placeholder="Enter Word6..."
                onKeyDown={this._handleKeyDown}
                name="ar6"
              />
              <div role="list" class="ui list">
                {ar6.map((item, i) => {
                  return (
                    <Label color="teal" horizontal style={{ margin: '10px' }}>
                      {item}
                    </Label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <br />
        <Button
          class="center"
          primary
          onClick={this.generate}
          style={{ width: '100%' }}
        >
          Generate Names
        </Button>
        <Divider />

        <div role="list" class="ui list">
          {result
            ? result.map((item, i) => {
                return (
                  <div
                    role="listitem"
                    class="item"
                    key={i}
                    style={{ color: '#5a5ac3', fontWeight: 'bold' }}
                  >
                    <div class="ui large label blue">{item}</div>
                  </div>
                );
              })
            : null}
        </div>
      </Container>
    );
  }
}

export default TTNames;
