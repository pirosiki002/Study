import "./Profile.css";

const Profile = (props) => {
  const { name, age, country } = props;
  return (
    <>
      <div className="profile">
        <div className="name">Name:{name}</div>
        <div className="age">Age:{age}</div>
        <div className="country">From:{country}</div>
      </div>
    </>
  );
};

export default Profile;
