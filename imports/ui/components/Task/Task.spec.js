import React from 'react';
import { shallow } from 'enzyme';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import Task from './Task.jsx';

describe('Task', () => {
  it('should render', () => {
    const task = { _id: 1, text: 'This is task 1' };
    const item = shallow(<Task task={task} />);
    // chai.assert(item.hasClass('list-item'));
    // chai.assert(!item.hasClass('checked'));
    // chai.assert.equal(item.find('.editing').length, 0);
    // chai.assert.equal(item.find('input[type="text"]').prop('defaultValue'), 'testing');
  });
});