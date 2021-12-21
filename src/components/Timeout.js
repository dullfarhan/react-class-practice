import {useEffect,useState} from 'react'


export default function Timeout() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <h1>
      I've rendered {count} times!
      <button type="button" onClick={() => setCount(count+1)}>
        Red
      </button>
    </h1>
  );
}
