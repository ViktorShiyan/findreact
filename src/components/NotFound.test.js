import TestRenderer from 'react-test-renderer';
import React from 'react';
import NF from './NotFound';

it('Test hello', () => {
    const testRenderer = TestRenderer.create(<NF />);
    const testJSON = testRenderer.toJSON();
    expect(testJSON.type).toBe('div');
});