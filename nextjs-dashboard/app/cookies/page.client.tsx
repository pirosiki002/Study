'use client';
import { create } from './actions';
type cookiesProps = {
  theme: string | undefined;
  name: string | undefined;
};

const ClientPage = (props: cookiesProps) => {
  const { theme, name } = props;

  return (
    <div>
      <p>Current Theme: {theme ?? 'Not set'}</p>
      <p>Current Name: {name ?? 'Not set'}</p>
      <button
        onClick={async () => {
          await create({ theme: 'ever green' });
        }}
      >
        Set Dark Theme
      </button>
    </div>
  );
};

export default ClientPage;
