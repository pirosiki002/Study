const Example = () => {
  // 練習用
  type User = {
    name: string;
    age: number;
  };

  // const user: UserProfile = { name: 'taro', age: 22 };

  type UserName = string;
  type UserAge = number;
  type UserGender = 'man' | 'woman' | 'others';

  type UserProfile = {
    name: UserName;
    age: UserAge;
    gender: UserGender;
  };

  const user: User = {
    name: 'taro',
    age: 24,
  };

  const userProfile: UserProfile = {
    name: 'jiro',
    age: 100,
    gender: 'man',
  };

  console.log(user, userProfile);
};

export default Example;
