const assert = require('assert')
const operations = require('./operations.js')

it('should filter incorrect formatting', () => {
  assert.equal(operations.filterPost("random post title [filter info (other info)", "x"), true);
})

it('should filter when tag is outside of brackets', () => {
  assert.equal(operations.filterPost("x [foo] (bar)", "x"), true);
})

it('should not filter when x is inside brackets', () => {
  assert.equal(operations.filterPost("[xfoo]", "x"), false);
})