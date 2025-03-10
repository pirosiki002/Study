import { cookies } from 'next/headers';
import { create } from './actions';
import ClientPage from './page.client';

export default async function Page() {
  const cookieStore = cookies();
  // only get in server side
  const themeCookie = cookieStore.get('theme');
  const nameCookie = cookieStore.get('name');

  // you can't use cookie set here!!
  // cookieStore.set('name', 'piropiro');

  const theme = themeCookie ? themeCookie.value : undefined;
  const name = nameCookie ? nameCookie.value : undefined;

  return <ClientPage theme={theme} name={name} />;
}
