# @bemoje/arr-quick-sort-numeric

Efficient in-place recursive sorting algorithm of numeric values. Avg. Runtime: O(n log n) | Worst: O(n^2)

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-quick-sort-numeric" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-quick-sort-numeric" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-quick-sort-numeric" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-quick-sort-numeric.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-quick-sort-numeric" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-quick-sort-numeric.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-quick-sort-numeric" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-quick-sort-numeric" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-quick-sort-numeric/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-quick-sort-numeric" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-quick-sort-numeric
npm install --save @bemoje/arr-quick-sort-numeric
npm install --save-dev @bemoje/arr-quick-sort-numeric
```

## Usage

```javascript
import arrQuickSortNumeric from '@bemoje/arr-quick-sort-numeric'

arrQuickSortNumeric([5, 2, 3, 1, 4])
//=> [1, 2, 3, 4, 5]

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrQuickSortNumeric

Efficient in-place recursive sorting algorithm of numeric values. Avg. Runtime: O(n log n) | Worst: O(n^2)

##### Parameters

-   `arr` **[Array][3]&lt;[number][4]>** The numeric array to sort

##### Returns
**[Array][3]** 

[1]: #arrquicksortnumeric

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number