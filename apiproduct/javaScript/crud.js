import {generateCard} from "./print.js"

const baseURL = 'https://e-commerce-api-academlo.herokuapp.com/api/products';
let editingID = null; 

function getproductos(){
  axios.get("https://e-commerce-api-academlo.herokuapp.com/api/products")
    .then(function(respuesta){
      const products = respuesta.data
      generateCard(products)
    })
    .catch(function(error){
      console.log(error)
    })
}

function createProducts(){
  const input1 = document.getElementById("name")
  const input2= document.getElementById("price")
  const input3= document.getElementById("image")
  const newProduct={
    name:input1.value,
    price:input2.value,
    image:input3.value
  }
  axios.post('https://e-commerce-api-academlo.herokuapp.com/api/products', newProduct)
  .then(function (respuesta){
      const products = respuesta.data
      generateCard(products)
      getproductos()
  })
  .catch(function(error){
    console.log(error)})
}

function editProduct(id){
  axios.get(`${baseURL}/${id}`)
  .then(function (respuesta){
      editingID = id;
      const product =  respuesta.data;
      document.getElementById('name').value = product.name;
      document.getElementById('price').value = product.price;
      document.getElementById('image').value = product.image;
  })
  .catch(function (error) {
      alert('No se pudo cargar la tarea');
  })
}

function updateProduct() {
  const productUpdated = {
      name: document.getElementById('name').value,
      price: document.getElementById('price').value,
      image: document.getElementById('image').value
  }

  axios.put(`${baseURL}/${editingID}`, productUpdated)
      .then(function (respuesta) {
          alert('Se editó la tarea correctamente');
          getproductos();
      })
      .catch(function (error) {
          alert('No se pudo editar la tarea');
      })
}
function deleteProduct(id){
  const confirmation = confirm('¿Esta seguro de eliminar el producto?');
  if(!confirmation){
      return
  }
  axios.delete(`${baseURL}/${id}`)
      .then(function () {
          alert('La tarea se eliminó correctamente');
          getproductos();
      })
      .catch(function (error) {
          alert('No se pudo eliminar la tarea');
      })
}

export {getproductos, createProducts,editProduct,updateProduct,deleteProduct}