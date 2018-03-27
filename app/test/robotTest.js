'use strict'

import assert from 'assert';
import robot from '../src/robot';

describe('robot', function(){
  it('should return packed items (example use case)',function(){

    let packedItems = robot.process('163841689525773');

    assert.equal(packedItems,'163/8/41/6/8/9/52/5/7/73');

  })
})
