import { getUserProfile } from '@/lib/api';
import UserProfilePresentation from '@/components/UserProfilePresentation';

export default async function UserProfileContainer({
  userId,
}: {
  userId: string;
}) {
  const user = await getUserProfile(userId);

  return <UserProfilePresentation user={user} />;
}
