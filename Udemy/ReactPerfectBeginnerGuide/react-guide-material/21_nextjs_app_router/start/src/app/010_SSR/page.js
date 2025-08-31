import './lib';
import ClientComp from './components/ClientComp';

export default function SSR() {
  return (
    <>
      <div className="page">SSR Page</div>
      <ClientComp />
    </>
  );
}
