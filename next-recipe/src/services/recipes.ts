const API_URL = "https://dummyjson.com";


export async function getRecipes(
  page = 1,
  category?: string,
  search?: string
) {

  const limit = 12;
  const skip = (page - 1) * limit;


  let url = "";


  if(search) {

    url = `${API_URL}/recipes/search?q=${search}`;

  }

  else if(category) {

     url = `${API_URL}/recipes/tag/${category}`;


  }

  else {

    url = `${API_URL}/recipes?limit=${limit}&skip=${skip}`;

  }


  const response = await fetch(url, {
    cache: "no-store",
  });


  if(!response.ok){
    throw new Error(
      "Erro ao buscar receitas"
    );
  }


  return response.json();

}