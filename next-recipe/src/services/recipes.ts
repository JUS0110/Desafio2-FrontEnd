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

export async function getRecipe(id: number) {

  const response = await fetch(
    `https://dummyjson.com/recipes/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar receita.");
  }

  return response.json();
}