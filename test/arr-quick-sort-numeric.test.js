import arrQuickSortNumeric from '../src/arr-quick-sort-numeric'

describe('arrQuickSortNumeric', () => {
	test('works', () => {
		const arr = [5, 2, 3, 1, 4]
		expect(arrQuickSortNumeric(arr)).toStrictEqual([1, 2, 3, 4, 5])
		expect(arrQuickSortNumeric([])).toStrictEqual([])
	})
})
