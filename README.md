# basic timer
###LHL - timer challenge

usage is
node timer1.js x y z...

Where x y z is a list (spece separated) of numbers in seconds for the timer.

Example:

```
node timer1.js 1 2 4 8
```

starts timers at 1, 2, 4, and 8 seconds.  
Returns a count of the number of timers running and will notify with system beep and message alert (system beep may or may not work for all platforms).

Passing invalid data such as a negative number or string will have the timer remove those values from the timer list and ignore them.
