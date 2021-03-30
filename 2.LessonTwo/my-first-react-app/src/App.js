const User = {
  name: "John",
  lastName: "Doe",
  age: 45,
  email: "jdoe@email.com",
  isActive: false,
};

function App() {
  return (
    <>
      <h1 id="title">USER INFO</h1>
      <h2>Name: {User.name}</h2>
      <h2>Lastname: {User.lastName}</h2>
      <h2>Age: {User.age}</h2>
      <h2>Email: {User.email}</h2>
      {User.isActive ? <p>How are you, John</p> : <p>How are you, Guest</p>}
      <img
        src="https://www.loftaholics.com/wp-content/uploads/2020/11/photos.jpg"
        alt=""
        width="80%"
      />
    </>
  );
}
export default App;
