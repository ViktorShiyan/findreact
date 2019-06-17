import TestRenderer from 'react-test-renderer';
import React from 'react';
import App from './App';

it('Test App', () => {
    const testRenderer = TestRenderer.create(<App/>);
    const testJSON = testRenderer.toJSON();
    expect(testJSON.type).toBe('div');
});