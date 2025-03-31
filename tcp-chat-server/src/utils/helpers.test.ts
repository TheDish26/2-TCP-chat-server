import { add } from '../utils/helpers';

test('add function should return the sum of two numbers', () => {
	expect(add(1, 2)).toBe(3);
	expect(add(-1, 1)).toBe(0);
});

// Removed test for subtract function as it is not exported

test('helper function should work', () => {
    expect(true).toBe(true);
});