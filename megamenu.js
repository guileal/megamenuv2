function controlMegamenuUI() {
    //BASIC CONTROLS: OPEN, CLOSE, QUIT, HOVER ETC
    const megaMenu = document.querySelector("#megamenu-wrapper");
    const openMegamenu = document.querySelectorAll(".open-megamenu"); //VARIAVEL QUE VAI CAPTURAR TODOS OS PONTOS DE ABERTURA DO MEGAMENU
    const closeMegamenu = document.querySelectorAll(".close-button");
    // const rectIcon = openMegamenu.querySelectorAll("rect");
    

    //OPENING MEGAMENU HANDLER
    // openMegamenu.addEventListener("click", function () {
    //     megaMenu.classList.toggle(`CLASSE ATIVA PARA O MEGAMENU`);
    //     rect.forEach((rect) => {
    //         rect.classList.toggle(`CLASSE ATIVA PARA OS RECTS`); //?? NÃO LEMBRO DISSO
    //     });
    // });

    //CLOSING MEGAMENU HANDLER
    // closeMegamenu.forEach((closeMegaMenu) => {
    //     if(closeMegaMenu.classList.contains('back-button')){
    //         return; //ele nao roda a função de fechar se o botao tiver a classe de voltar
    //     }
    //     closeMegaMenu.addEventListener("click", closeMegaMenu, false);
    // });
    // function closeMegaMenu() {
    //     megaMenu.classList.remove(`CLASSE ATIVA PARA O MEGAMENU`);
    // }

    //CONTROL BACKGROUND ON HOVER
    const megamenuNav = megaMenu.querySelector("#megamenu-nav");
    const menuItems = megamenuNav.querySelectorAll(".category");

    menuItems.forEach((menuItems) => {
        hoverElement(menuItems);
    });
    
    
    // OPEN SUBMENU HANDLER
    for(var i = 0; i < menuItems.length; i++){
        menuItems[i].addEventListener("click", openSubmenu, false)
    }


    
    
    //DEFAULT CONTROL -> valores padrões iniciais que rodam independente dos hadlers
    setDefaultBackground();
}

//revisar após adição das classes enable,disable, active e etc
function openSubmenu(event) {
    event.preventDefault();
    if (!event.target.matches(".category")) {
        return;
    }
    let clickedItem = event.target;
    const categoriesWrapper = document.querySelector("#categories");
    const menuItems = categoriesWrapper.querySelectorAll(".category");
    const subMenus = categoriesWrapper.querySelectorAll(".submenu-wrapper");

    if (clickedItem.querySelector(".submenu-wrapper")) {
        let submenuToActive = clickedItem.querySelector(".submenu-wrapper");
        let liToActive = submenuToActive.parentNode;
        if (submenuToActive.classList.contains(`CLASSE ATIVA PARA O SUBMENU`)) {
            menuItems.forEach((item) => {
                item.classList.remove(`CLASS DISABLE FOR LI`);
                item.classList.add(`CLASS ENABLE FOR LI`);
            });
            subMenus.forEach((item) => {
                item.classList.remove(`CLASSE ATIVA PARA O SUBMENU`);
            });
        } else {
            //zerando por padrao todos os itens
            menuItems.forEach((item) => {
                item.classList.remove(`CLASS ENABLE FOR LI`);
                item.classList.add(`CLASS DISABLE FOR LI`);
            });
            subMenus.forEach((item) => {
                item.classList.remove(`CLASSE ATIVA PARA O SUBMENU`);
            });

            liToActive.classList.remove(`CLASS DISABLE FOR LI`);
            liToActive.classList.add(`CLASS ENABLE FOR LI`);
            submenuToActive.classList.add(`CLASSE ATIVA PARA O SUBMENU`);

        }
    }
}


function hoverElement(element) {
    element.onmouseover = element.onmouseout = hoverListItems;

    function hoverListItems(event) {
        //handler function hover
        if (event.type == "mouseover") {
            changeBackgroundHover(event.currentTarget);
        }
        if (event.type == "mouseout") {
            if (element.tagName == "LI") {
                if (element.querySelector("submenu-wrapper")) {
                    let flag = element.querySelector("submenu-wrapper");
                    if (flag.classList.contains(`CLASSE ATIVA PARA O SUBMENU`)) {
                        return
                    } else {
                        setDefaultBackground();
                    }
                } else {
                    setDefaultBackground();
                }
            }
        }
    }
}

function changeBackgroundHover(nodeItem) {
    if (!nodeItem.matches(".category")) {
        return;
    }
    const imagesBackground = document.querySelectorAll(".image-wrapper");
    const currentHover = nodeItem;
    console.log(`ELEMENTO -> ${currentHover.querySelector("a").text.replace(/ /g, "-")}`);
    if(currentHover.querySelector("a")){
        const changedImage = document.querySelector(
            `#${currentHover.querySelector("a").text.replace(/ /g, "-")}`
        );
        if (changedImage){
            imagesBackground.forEach((imagesBackground) => {
                if (
                    imagesBackground.getAttribute("id") !=
                    changedImage.getAttribute("id")
                ) {
                    imagesBackground.style.opacity = "0";
                } else {
                    imagesBackground.style.opacity = "1";
                }
            });
        }
    }

}

function setDefaultBackground() {
    const imagesBackground = document.querySelectorAll(".image-wrapper");
    const defaultBackgroundImage = document.querySelector("#default");
    imagesBackground.forEach((imagesBackground) => {
        imagesBackground.style.opacity = "0";
    });
    defaultBackgroundImage.style.opacity = "1";
}