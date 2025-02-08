import { ClientPage } from './page.client';

const postgres_user = process.env.POSTGRES_USER;
console.log(postgres_user, 'POSTGRES_USER=');

export default function Page() {
  return (
    <>
      <ClientPage />
    </>
  );
}
