async function requestCategoriesMegamenu() {
    console.log('CONECTANDO AO ENDPOINT API/CATEGORY-MEGA-MENU...');
    const response = await fetch(
        "https://devscripta.com.br/wp-json/wp/v2/category-mega-menu",
        {
            mode: "cors",
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }
    );

    const body = await response.json();
    console.log('CONEXÃO REALIZADA COM SUCESSO! -> ENDPOINT API/CATEGORY-MEGA-MENU');
    return body;
    
}

async function requestSubCategoriesMegamenu(idTaxonomy) {
    console.log('CONECTANDO AO ENDPOINT API/mega-menu?category-mega-menu/IDTAXONOMY...');
    const response = fetch(
        `https://devscripta.com.br/wp-json/wp/v2/mega-menu?category-mega-menu=${idTaxonomy}`,
        {
            mode: "cors",
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }
    );

    const body = await response
    console.log('CONEXÃO REALIZADA COM SUCESSO! -> ENDPOINT API/mega-menu?category-mega-menu/IDTAXONOMY');
    return body.json();
}

