import TestRenderer from 'react-test-renderer';
import React from 'react';
import Hello from './Hello';

it('Test hello', () => {
    const testRenderer = TestRenderer.create(<Hello/>);
    const testJSON = testRenderer.toJSON();
    expect(testJSON.type).toBe('div');
});
