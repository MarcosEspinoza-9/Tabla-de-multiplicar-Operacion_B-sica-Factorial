import { useRef, useState } from 'react';

export default function () {
  const [resultado, setResultado] = useState(null);
  const inputRef = useRef();

  function factorial(n) {
    if (!n) return;
    let ans = 1;
    for (let i = 1; i <= n; i++) {
      ans = ans * i;
    }
    return ans;
  }
  function handleClic() {
    let numero = inputRef.current.value;
    setResultado(factorial(numero));
  }
  return (
    <div>
      <h1>Factorial</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input ref={inputRef} />
        <button onClick={handleClic}>Calcular</button>
        <p>{resultado}</p>
      </div>
    </div>
  );
}
