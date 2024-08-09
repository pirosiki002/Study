import "./Profile.css";

const Profile = ({ name = "John Doe", age = "???", country = "Japan" }) => {
  // const { name, age, country } = props;
  return (
    <>
      <div className="profile">
        <h3 className="name">Name:{name}</h3>
        <h3 className="age">Age:{age}</h3>
        <h3 className="country">From:{country}</h3>
      </div>
    </>
  );
};

export default Profile;
