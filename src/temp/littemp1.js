
function App() {

    const Name="Mohsen"
    let list = [
      {
        id:"1",
        name:"mohsen",
        family:"khezri"
      },
      {
        id:"2",
        name:"mohsen2",
        family:"khezri"
      },
      {
        id:"3",
        name:"Person3",
        family:"Family"
      },
      {
        id:"4",
        name:"mohsen3",
        family:"khezri"
      }
    ]
    const userFilter =  list.filter(list => list.family != "khezri")
  

  
    return (
      <div className="App">
        <header className="App-header">
         Mohsen Xizri
        </header>
        <body>
          <p>{Name}</p>
          <p>list length: {list.length}</p>
  
          {list.map((list, index) =>
            (
              <p key={index}>{list.name}</p>
            )
          )}
          <p>Filter:</p>
          {userFilter.map(user =>
            (
              <p key={user.id}>{user.name}</p>
            )
          )}
          {console.log(userFilter)}
        </body>
      </div>
    );
  }
  
  export default App;
  