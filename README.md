## Difference between var and let
|var|let|
|----|----|
|has no block scope|it has block|
|tolerates redeclaring the variable|It throws error when redeclared|

## coalescing operator
> return value ?? 0

* `|| -> returns the first truthy value.`
* `?? -> returns the first defined value.`

## what are transpilers
> A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.

> A transpiler would analyze our code and rewrite height ?? 100 into (height !== undefined && height !== null) ? height : 100

> eg: babel

## What are polyfills ?
> New language features may include not only syntax constructs and operators, but also built-in functions.

> For example, Math.trunc(n) is a function that “cuts off” the decimal part of a number, e.g Math.trunc(1.23) returns 1.

> In some (very outdated) JavaScript engines, there’s no Math.trunc, so such code will fail.

> eg: core js, polyfill.io