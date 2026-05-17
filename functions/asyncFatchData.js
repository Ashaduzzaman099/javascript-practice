async function getData() {

  try {

    const response =
      await fetch("https://jsonplaceholder.typicode.com/users")

    const data = await response.json()

    // Using Map function to print the name of the users
    data.map(user => {
      console.log(user.name);
    })

    // Using ForEach function to print the name of the users
    data.forEach(user => {
      console.log(user.name);
    }) ;

  } catch(error) {
    

    console.log("Error happened")

  }
}

getData()