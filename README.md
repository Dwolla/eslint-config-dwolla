# Shared ESLint Rules

## Usage

Extend the rulesets contained in this config to stay in sync with our conventions. Override any conflicting rules in 
your local config, but consider contributing them back to this config if we should align to that rule, too. 

### Base
In your base `.eslintrc`, extend the `es6.js` ruleset:

```
extends: '@dwolla-internal/dwolla/rules/es6'
```

### Extension
Since ESLint traverses the file system looking for `.eslintrc` files in each directory, you can add additional config 
files where you use a specific convention beyond the base.

### React

```
extends: '@dwolla-internal/dwolla/rules/react'
```

### Tests

#### Base

```
extends: '@dwolla-internal/dwolla/rules/tests/base'

#### Mocha

```
extends: '@dwolla-internal/dwolla/rules/tests/mocha'

#### React

Some overrides to be a little less strict when testing React components

```
extends: '@dwolla-internal/dwolla/rules/tests/mocha'
```
