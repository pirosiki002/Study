import Profile from "./components/Profile";
import Container from "./components/Container";
import { Children } from "react";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      {/* <Container title="Childrenとは？" /> */}
      <Container
        title="Childrenとは？"
        children={[
          <Profile key={profile[0].name} {...profile[0]} />,
          <Profile key={profile[1].name} {...profile[1]} />,
        ]}
        first={<Profile {...profile[0]} />}
        second={<Profile {...profile[1]} />}
      />
      {/* <Profile {...profile[0]} />
        <Profile {...profile[1]} /> */}
      {/* </Container> */}
    </div>
  );
};

export default Example;
