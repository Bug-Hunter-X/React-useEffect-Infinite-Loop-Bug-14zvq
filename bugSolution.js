```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Runs only once on mount
    console.log('Component mounted');
  }, []);

  return <div>Count: {count}</div>;
}
```