
function generateCard(products){
  let html = ""
  for(let i = 0; i<products.length; i++ ){
    html += `<div class="col-md-6 col-lg-4 mt-2">
                <div class="card">
                <img src="${products[i].image}">
                  <div class="card-body">
                    <p class="card-text">${products[i].name}</p>
                      <button class="btn btn-danger" onclick="deleteProduct(${products[i].id})">
                       <i class="fas fa-trash-alt"></i>
                      </button>
                      <button class="btn btn-primary" onclick="editProduct(${products[i].id})">
                      <i class="fas fa-pen"></i>
                       </button>
                        <p class="d-inline-block fs-3 ms-4">${products[i].price}</p>
                  </div>
                  </div>
                 </div>`
  }
  const container = document.getElementById("container-productos")
  container.innerHTML = html
}

export {generateCard}
