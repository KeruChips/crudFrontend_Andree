//Aquí va la URL de la API, no los endpoints específicos
const API_URL = "http://localhost:8080/api/category"

export async function getCategories(){
    const res =  await fetch (`${API_URL}/getDataCategories`);
    return res.json();

}

//POST
export async function createCategory(dataCategory) {
    await fetch(`${API_URL}/newCategory`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataCategory)
    });
}

//PUT
export async function putCategory(dataCategory, idCategory){
    await fetch(`${API_URL}/updateCategory/${idCategory}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataCategory)
    })

}

export async function deleteCategory(id) {
    await fetch (`${API_URL}/deleteCategory/${id}`,{
        method: 'DELETE',  
    })
}