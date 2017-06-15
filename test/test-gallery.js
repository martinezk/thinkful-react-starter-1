import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Gallery from '../js/components/gallery';

describe('Gallery component', function () {
  it('Renders the series of images', function () {
    const url = "http://www.example.com/image.png";
    const description = "Example description";

    const renderer = TestUtils.createRenderer();
    renderer.render(<Gallery images={[{url: url, description: description}]} />);
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('gallery');
    
    result.props.children.should.have.lengthOf(1);
    
  });
});