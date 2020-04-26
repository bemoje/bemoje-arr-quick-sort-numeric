(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-partition-index'), require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-partition-index', '@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-quick-sort-numeric'] = factory(global.arrPartitionIndex, global.assertArgs, global.assertType));
}(this, (function (arrPartitionIndex, assertArgs, assertType) { 'use strict';

	arrPartitionIndex = arrPartitionIndex && Object.prototype.hasOwnProperty.call(arrPartitionIndex, 'default') ? arrPartitionIndex['default'] : arrPartitionIndex;
	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Efficient in-place recursive sorting algorithm of numeric values. Avg. Runtime: O(n log n) | Worst: O(n^2)
	 * @param {Array<number>} arr - The numeric array to sort
	 * @returns {Array}
	 */
	function arrQuickSortNumeric(arr) {
		assertArgs(arr);
		assertType(Array, arr);

		function recurse(array, lo = 0, hi = array.length - 1) {
			if (lo < hi) {
				const partitionIndex = arrPartitionIndex(array, lo, hi);
				recurse(array, lo, partitionIndex - 1);
				recurse(array, partitionIndex + 1, hi);
			}

			return array
		}

		return recurse(arr)
	}

	return arrQuickSortNumeric;

})));
