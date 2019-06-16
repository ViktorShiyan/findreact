import TestRenderer from 'react-test-renderer';
import React from 'react';
import Form from './Form';

it('Test form', () => {
    const testRenderer = TestRenderer.create(<Form/>);
    const testJSON = testRenderer.toJSON();
    expect(testJSON.type).toBe('main');
});
