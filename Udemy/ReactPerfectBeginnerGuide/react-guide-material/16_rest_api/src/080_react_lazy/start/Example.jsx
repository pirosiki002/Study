import { useState, lazy, Suspense, startTransition } from 'react';
// import ComponentA from './components/ComponentA';

const LazyComponentA = lazy(() => import('./components/ComponentA'));
const LazyComponentB = lazy(() => import('./components/ComponentB'));
const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      {/* <button onClick={() => setCompA(prev => !prev)}>ComponentA</button> */}
      <button
        onClick={() => {
          startTransition(() => {
            setCompA(prev => !prev);
          });
        }}
      >
        ComponentA
      </button>
      <Suspense fallback={<div>loading now...</div>}>
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </Suspense>
    </>
  );
};

export default Example;
