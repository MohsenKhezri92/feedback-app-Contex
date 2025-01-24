function App() {
  const Name = "Mohsen";
  let list = [
    {
      id: "1",
      name: "mohsen",
      family: "khezri",
    },
    {
      id: "2",
      name: "mohsen2",
      family: "khezri",
    },
    {
      id: "3",
      name: "Person3",
      family: "Family",
    },
    {
      id: "4",
      name: "mohsen3",
      family: "khezri",
    },
  ];
  const userFilter = list.filter((list) => list.family != "khezri");

  const loading = false;
  const showList = true;

  if (loading) return <p>Loading...</p>;

  const listBlock = (
    <>
      <h3>List: </h3>
      <ul>
        {list.map((lst, index) => (
          <li key={index}>
            {lst.name} - {lst.family}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="App">
      <header className="App-header">Mohsen Xizri</header>
      <body>
        <p>{Name}</p>
        {showList ? "Yes" : "No"}

        <p>list length: {list.length}</p>

        {showList && listBlock}
        <p>Filter:</p>
        {userFilter.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
        {console.log(userFilter)}
      </body>
    </div>
  );
}

export default App;
