const { addItem, removeItem, getTotalItems } = require('../cart');

test('adds a new item with a positive quantity', () => {
  let cart = {};
  addItem(cart, 'apple', 5);
  expect(cart['apple']).toBe(5);
});

test('does not add an item with a negative quantity', () => {
  let cart = {};
  addItem(cart, 'apple', -10);
  expect(cart['apple']).toBeUndefined();
});

test('removes an existing item from the cart', () => {
  let cart = { 'apple': 5 };
  removeItem(cart, 'apple');
  expect(cart['apple']).toBeUndefined();
});

test('calculates total items correctly', () => {
  let cart = { 'apple': 2, 'banana': 4 };
  expect(getTotalItems(cart)).toBe(6);
});

test('handles an empty cart for total items', () => {
  let cart = {};
  expect(getTotalItems(cart)).toBe(0);
});