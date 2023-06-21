window.onload = function() {

    fetch('/api/reservas')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  function editarReserva(reservaId, newData) {
    fetch(`/api/reservas/${reservaId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  function eliminarReserva(reservaId) {
    fetch(`/api/reservas/${reservaId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
     
        console.error(error);
      });
  }
  