import { UserInfo } from './UserInfo'; // Server Components
import { SideMenu } from './side-menu'; // Client Components

/**
 * Client Components(`<SideMenu>`)の子要素として
 * Server Components(`<UserInfo>`)を渡せる
 */
export default function Page() {
  return (
    <div>
      <SideMenu>
        <UserInfo />
      </SideMenu>
      <main>{/* ... */}</main>
    </div>
  );
}
