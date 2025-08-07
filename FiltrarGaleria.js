const eventos = [
    {
        eventName: "Sábado de Aleluia 2025",
        fotos: ["galeria-fotos/VigiliaSabSanto2025FOTO0.JPG", "galeria-fotos/VigiliaSabSanto2025FOTO1.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO2.JPG", "galeria-fotos/VigiliaSabSanto2025FOTO4.JPG", "galeria-fotos/VigiliaSabSanto2025FOTO5.JPG", "galeria-fotos/VigiliaSabSanto2025FOTO10.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO11.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO12.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO13.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO14.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO15.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO16.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO17.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO18.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO19.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO20.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO21.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO22.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO23.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO24.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO26.jpg", "galeria-fotos/VigiliaSabSanto2025FOTO28.jpg"],
    },
    {
        eventName: "Domingo de ramos 2025",
        fotos: ["galeria-fotos/SANTA-MISSA-RAMOS-1.jpeg", "galeria-fotos/SANTA-MISSA-RAMOS-2.jpeg", "galeria-fotos/SANTA-MISSA-RAMOS-5.jpeg", "galeria-fotos/SANTA-MISSA-RAMOS-3.jpeg", "galeria-fotos/SANTA-MISSA-RAMOS-4.jpeg"],
    },
    {
        eventName: "Quaresma 2025",
        fotos: [],
    },
    {
        eventName: "Multirão de Confissões 2025",
        fotos: ["galeria-fotos/FOTO-1-MUTIRAO-CONFISSOES-2025.jpeg", "galeria-fotos/FOTO-2-MUTIRAO-CONFISSOES-2025.jpeg", "galeria-fotos/FOTO-3-MUTIRAO-CONFISSOES-2025.jpeg", "galeria-fotos/FOTO-PAROCOS-MUTIRAO-CONFISSOES-2025.jpeg"],
    },
    {
        eventName: "Solenidade de São José 2025",
        fotos: ["galeria-fotos/FOTO-IMAGEM-SOLENIDADE-S.JOSE.jpeg", "galeria-fotos/FOTO-EUCARISTIA-SOLENIDADE-S.JOSE.jpeg", "galeria-fotos/FOTO-CALICE-SOLENIDADE-S.JOSE.jpeg", "galeria-fotos/FOTO-ALTAR-SOLENIDADE-S.JOSE.jpeg"],
    },
    {
        eventName: "Quarta-Feira de Cinzas 2025",
        fotos: ["galeria-fotos/CINZAS-Bencao-S-Missa-2025.jpeg", "galeria-fotos/CINZAS-Distribuicao-S-Missa-2025.jpeg", "galeria-fotos/CINZAS-Eucaristia-S-Missa-2025.jpeg"],
    },
    {
        eventName: "Novo Sacrário",
        fotos: ["galeria-fotos/FotoDoisBencaoNovoSacrarioMatriz2025.jpeg", "galeria-fotos/FotoNovoSacrarioMatriz2025.jpeg", "galeria-fotos/FotoUmBencaoNovoSacrarioMatriz2025.jpeg"],
    }
];

let elementos = [];

const father = document.getElementById("FotosEvento");

function OnEventUpdate(newEvent)
{
    if (elementos.length > 0)
    {
        while (elementos.length > 0)
        {
            elementos[0].remove();
            elementos.splice(0, 1);
        }
    }

    if(newEvent.target.value == "-1"){
        document.getElementById("NomeDoEvento").textContent = "";
        return;
    }
    
    let n = 0;

    while (n < eventos[newEvent.target.value].fotos.length)
    {
        CreateElement(eventos[newEvent.target.value].fotos[n]);

        n += 1;
    }

    document.getElementById("NomeDoEvento").textContent = eventos[newEvent.target.value].eventName;
}

function CreateElement(path)
{
    const newElement = document.createElement("img");
    newElement.setAttribute("src", path);
    father.appendChild(newElement);

    elementos.push(newElement);
}