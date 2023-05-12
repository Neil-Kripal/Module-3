if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

/* Only the below 3 logs will be displayed
if ("0") console.log('#2 zero is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')


0 is coerced to false, so if (0) is not true, and the console.log message is not printed.

"0" is a non-empty string, which is coerced to true, so if ("0") is true, and the console.log message '#2 zero is true' is printed.

null is coerced to false, so if (null) is not true, and the console.log message is not printed.

-1 is a non-zero number, which is coerced to true, so if (-1) is true, and the console.log message 'negative is true' is printed.

1 is a non-zero number, which is coerced to true, so if (1) is true, and the console.log message 'positive is true' is printed.
 */