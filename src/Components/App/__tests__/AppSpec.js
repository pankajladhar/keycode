import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './../index';

describe('App', () => {
  it('renders correctly when no key is pressed', () => {
    let tree = renderer.create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('componentDidMount should be called', () => {
    const methodNameFake = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(methodNameFake).toHaveBeenCalledTimes(1);
  })

  it('setKeyCode should set state properly', () => {
    let component = renderer.create(<App />);
    const instance = component.getInstance()
    instance.setKeyCode({
      keyCode: "keyCode",
      key: "key",
      which: "which",
      code: "code"
    })

    expect(instance.state.keyCode).toEqual("keyCode")
    expect(instance.state.key).toEqual("key")
    expect(instance.state.which).toEqual("which")
    expect(instance.state.code).toEqual("code")
  })

  it('renders correctly when key is pressed', () => {
    let component = renderer.create(<App />);
    const instance = component.getInstance()
    instance.setKeyCode({
      keyCode: "keyCode",
      key: "key",
      which: "which",
      code: "code"
    })

    expect(component.toJSON()).toMatchSnapshot();
  });
})

