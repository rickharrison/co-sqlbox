# co-sqlbox

[sqlbox](https://github.com/raycmorgan/sqlbox) enhancements for generators with co

## Installation

```
$ npm install co-sqlbox
```

## Setup

Simply require co-sqlbox and use the same as [sqlbox](https://github.com/raycmorgan/sqlbox).

## Additions

A number of methods have been added to sqlbox models that will return a thunk. These methods are the following:

- getThunk
- mgetThunk
- saveThunk
- removeThunk
- modifyThunk
- firstThunk
- allThunk
- queryThunk

They function exactly the same as their counterparts except that they return a thunk instead of accepting a standard callback.

## Example

```
var savedUser = yield UserModel.saveThunk({ email: 'foo@bar.com' });
```

## License

MIT