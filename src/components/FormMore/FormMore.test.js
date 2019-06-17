import TestRenderer from 'react-test-renderer';
import React from 'react';
import FormMore from './FormMore';

it('Test hello', () => {
    const testRenderer = TestRenderer.create(<FormMore/>);
    const testJSON = testRenderer.toJSON();
    expect(testJSON.type).toBe('main');
});