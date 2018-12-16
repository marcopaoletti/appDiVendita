import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRender from 'react-test-renderer/shallow';

import { ProductItem } from 'common';

describe('<ProductItem>', () => {
  const onPressMock = jest.fn();

  const props = {
    name: 'Super Prodotto',
    price: 11.45,
    img: 'https://superimmagine.com',
    onPress: onPressMock,
  };

  it('should render without crashing', () => {
    const rendered = renderer.create(<ProductItem {...props} />).toJSON();
    expect(rendered).toBeTruthy();
  });

  const shallowRenderer = new ShallowRender();

  it('should render properly even without a name', () => {
    const newProps = { ...props };
    newProps.name = '';
    expect(shallowRenderer.render(<ProductItem {...newProps} />)).toMatchSnapshot();
  });

  it('clicking on the card should call the proper function', () => {
    const rendered = renderer.create(<ProductItem {...props} />).root;
    rendered.props.onPress();
    expect(onPressMock).toBeCalled();
  });

});
