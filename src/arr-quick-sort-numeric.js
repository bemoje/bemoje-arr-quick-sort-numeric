import arrPartitionIndex from '@bemoje/arr-partition-index'
import assertArgs from '@bemoje/assert-args'
import assertType from '@bemoje/assert-type'

/**
 * Efficient in-place recursive sorting algorithm of numeric values. Avg. Runtime: O(n log n) | Worst: O(n^2)
 * @param {Array<number>} arr - The numeric array to sort
 * @returns {Array}
 */
export default function arrQuickSortNumeric(arr) {
	assertArgs(arr)
	assertType(Array, arr)

	function recurse(array, lo = 0, hi = array.length - 1) {
		if (lo < hi) {
			const partitionIndex = arrPartitionIndex(array, lo, hi)
			recurse(array, lo, partitionIndex - 1)
			recurse(array, partitionIndex + 1, hi)
		}

		return array
	}

	return recurse(arr)
}
