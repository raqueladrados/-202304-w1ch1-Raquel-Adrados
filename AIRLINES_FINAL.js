const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
  ];

  const askName = () =>{
    let userName = prompt("Bienvenid@ a su búsqueda de vuelos, por favor, introduzca su nombre para comenzar.")
    if(userName === "" || userName === null || !isNaN(userName)){
        alert("El nombre introducido no es válido, por favor, introduzca sólo letras.")
        askName()
    }else{
        let greeting = "¡Hola!, " +userName+ ". Gracias por elegir AirlinesPRO para su búsqueda."
        alert(greeting)
    }
  }

  const searchFlights = () =>{
    let questionList = prompt("¿Desea ver los vuelos programados para hoy (yes/no)?")
    if(questionList === "yes"){
        showFights()
        showAverage()
        layoversFlights()
        lastFlights()
    }
    return searchFlights;
  }

  const showFights = () =>{
    for(let i = 0; i < flights.length; i++){
        if(flights[i].layover === false){
            let directFlight = "El vuelo desde" +flights[i].from+ " a " +flights[i].to+ ", tiene un precio de" +flights[i].cost+ ", y no tiene escalas en el trayecto."
            alert(directFlight)
        }else{
            let notDirectFlight = "El vuelo desde" +flights[i].from+ "a" +flights[i].to+ ", tiene un precio de" +flights[i].cost+ ", y tiene escalas en el trayecto."
            alert(notDirectFlight)
        }
    }
    return showFights;
  }

  const showAverage = () =>{
    let cost = 0
        cost = cost + flights[i].cost
        let result = cost/flights.length
        alert("El precio medio de los vuelos es" +result+ "euros.")
    return showAverage;
  }

  const layoversFlights = () =>{
    let global = 0
    for(let z = 0; z < flights.length; z++){
      if(flights[z].layover === true){
        global = global + 1
      }else{
        global = global + 0
      }
    }
    alert("Actualmente los vuelos que sufren retraso son:" +global+ ".")
    return layoversFlights;
  }

  const lastFlights = () =>{
    for(let k = 0; k < flights.length; k++){
      if(flights[k].id >= 5){
        let destinationID = flights[k].id
        let destinations = flights[k].to
        alert("Los últimos 5 destinos de hoy son:" +destinationID+ "," +destinations+ ".")
      }
    }
    return lastFlights;
  }

  const askRol = () =>{
    let rolAnswer = prompt("Por favor, introduzca su rol (ADMIN/USER).")
    if(rolAnswer === "ADMIN" || rolAnswer === "Admin" || rolAnswer === "admin"){
      searchFlights();
      addFlights();
      deleteFlight();
    }else if(rolAnswer === "USER" || rolAnswer === "User" || rolAnswer === "user"){
      searchPriceFlights();
    }else{
      askRol();
    }
  }

  const addFlights = ()=>{
    let addFlight = prompt("¿Desea añadir un nuevo vuelo (Sí/No)?")
    if(addFlight === "Sí" || addFlight === "si" || addFlight === "sí" || addFlight === "SI"){
      if(addFlight >= 15){
        alert("Lo sentimos, no hemos podido añadir un nuevo vuelo porque ya se ha llegado al máximo de vuelos permitidos. Por favor, si desea añadir más elimine uno existente.")
        deleteFlight;
      }
      let lastFlight = flights [flights.length - 1]
      let newFlight = {id: lastFlight.id +1}
      flights.push(newFlight)

      newFlight.to = prompt("Por favor, introduzca el destino deseado.")
      if(newFlight.to === null || newFlight.to === ''){
        newFlight.to = prompt("Por favor, introduzca el destino deseado.")
      }
      newFlight.from = prompt("Por favor, introduzca el lugar de partida de su viaje.")
      if(newFlight.from === null || newFlight.from === ''){
        newFlight.from = prompt("Por favor, introduzca el lugar de partida de su viaje")
      }
      newFlight.cost = prompt("Por favor, introduzca cuánto se quiere gastar aproximadamente.")
      if(Number.isNaN(newFlight.cost)){
        newFlight.cost = prompt("Por favor, introduzca cuánto se quiere gastar aproximadamente.")
      }
      newFlight.layover = prompt("¿Desea que su vuelo realice alguna escala (Sí/No)?")
      if(newFlight.layover === "Sí" || lastFlight.layover === "si" || lastFlight.layover === "sí"){
        newFlight.layover === true
      }else{
        newFlight.layover === false
      }

      addFlights();
    }else{
      console.table(flights)
      deleteFlight();
    }
  }

  const deleteFlight = () =>{
    let deleted = prompt("Si desea eliminar algún vuelo introduzca 'Eliminar'.")
    if(deleted === "Eliminar" || deleted === "eliminar"){
      let deleteID = prompt("Por favor, introduzca el ID del vuelo que desee eliminar.")
      for(let i = 0; i < flights.length; i++){
        if(flights[i].id === deleteID){
          let removedFlight = parseFloat(flights.splice(i,1))
          let advice = "Así queda su nueva búsqueda de vuelos" +removedFlight+ "."
          console.table(flights)
        }
      }
    }else{
      let bye = "Gracias por elegirnos, esperamos poder volver a servirle de ayuda en otro momento."
      alert(bye)
    }
  }

  const searchPriceFlights = () =>{
    let introducePrice = prompt("Por favor, introduzca el importe máximo que se quiera gastar.")
    if(Number.isNaN(introducePrice)){
      alert("Por favor, introduzca únicamente números.");
      return searchFlights
    }else{
      let flightPrice = flights.filter(flight => flight.cost <= introducePrice)
      if(flightPrice === 0){
        alert("No tenemos resultados para su búsqueda.")
      }else{
        alert("Hemos obtenido los siguientes vuelos con sus condiciones marcadas:")
        console.table(flightPrice)
      }
    } return nextOperation
  }

  const nextOperation = () =>{
    let anotherFlight = confirm("¿Desea buscar otro vuelo?")
    if(anotherFlight === true){
      askRol();
      nextOperation();
    }
    if(anotherFlight === false){
      alert("Gracias por realizar sus búsquedas con nosotros, esperamos haberle sido de ayuda. ¡Hasta la próxima!")
    }
    return nextOperation
  }

  askName();
  askRol();
  nextOperation();
