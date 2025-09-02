// http://localhost:4020/020_SG/1
import { paths } from '../paths';
export default function Page({ params }) {
  const date = new Date();
  return (
    <h3>
      このページは{params.id}です。{date.toJSON()}
    </h3>
  );
}
// name is static
export async function generateStaticParams() {
  // return [{ id: '1' }];
  return paths;
}
