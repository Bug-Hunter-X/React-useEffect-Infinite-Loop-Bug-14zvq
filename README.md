# React useEffect Infinite Loop Bug
This repository demonstrates a common bug in React's `useEffect` hook: an infinite loop caused by incorrectly updating state within the effect's callback.

## Bug Description
The `bug.js` file contains a component that attempts to increment a state variable (`count`) within the `useEffect` hook's callback.  Because the effect doesn't have any dependencies, it runs repeatedly, causing `setCount` to be called infinitely, leading to an infinite render loop. 

## Solution
The `bugSolution.js` file shows the correct way to handle this situation using the `count` variable in the dependency array, so it only runs once when the component initially mounts. 
