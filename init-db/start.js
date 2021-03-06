db.getCollection("cervezas").insertMany([
  {
    nombre: "DAMM INEDIT",
    descripción:
      "Creada por los cerveceros de Damm junto a Ferrán Adriá y los sumilleres de El Bulli, se elabora con una mezcla de malta de cebada y trigo aromatizada con cilantro, piel de naranja y regaliz.",
    graduación: "4,8º",
    envase: "Botella de 75cl",
    precio: "3,90€",
  },
  {
    nombre: "ALHAMBRA 1925",
    descripción:
      "Con su característica botella de color verde, se trata de una cerveza extra con una graduación de 6,8º. Se distingue por su peculiar toque acaramelado y por su perfecto y refrescante amargor final.Gran cuerpo y mucho equilibrio.",
    graduación: "6,8º",
    envase: "Botella de 33 cl.",
    precio: "1€",
  },
  {
    nombre: "MAHOU CINCO ESTRELLAS",
    descripción:
      "Un auténtico clásico entre nuestras cervezas. Muy ligera y agradable, resulta especialmente refrescante. Con una ligera acidez, sabor a cebada tostada y un correcto amargor final.",
    graduación: "5,5º",
    envase: "Pack de 6 botellines de 25 cl.",
    precio: "2,70 euros.",
  },
  {
    nombre: "SAN MIGUEL 1516",
    descripción:
      "Entre las varias opciones de esta marca, una de las más internacionales de las españolas, destaca esta 1516 elaborada según métodos tradicionales. Fresca, amarga y con baja graduación, lo que la hace muy agradable a cualquier hora.",
    graduación: "4,2º",
    envase: "Botella de 33 cl.",
    precio: "0,80€",
  },
  {
    nombre: "CRUZ CAMPO GRAN RESERVA 1904",
    descripción:
      "Cerveza cien por cien malta, de gran calidad. Intensa y equilibrada, con agradable final amargo. graduación muy adecuada para acompañar cualquier tipo de comida.",
    graduación: "6,4º",
    envase: "Botella de 33cl",
    precio: "1€",
  },
  {
    nombre: "VOLL DAMM",
    descripción:
      "Elaborada con el doble de malta, lo que le proporciona un sabor muy característico, y un cuerpo intenso y peculiar, diferente de otras. Alta graduación alcohólica. Adecuada para tomar como copa.",
    graduación: "7,2º",
    envase: "Botella de 33cl",
    precio: "1,10€",
  },
  {
    nombre: "ÁMBAR ESPECIAL",
    descripción:
      "La Zaragozana es una centenaria fábrica de cervezas de la capital zaragozana. Ofrece una amplia variedad. La más atractiva es esta Especial, una lager de baja fermentación que resulta muy fácil y agradable de beber.",
    graduación: "5,2º",
    envase: "Botella de 33cl",
    precio: "0,90€",
  },
  {
    nombre: "MORITZ",
    descripción:
      "Una cerveza casi artesanal, que es una institución en Barcelona desde 1856. En su elaboración se emplean agua de un manantial de Vichy Catalán y flores de lúpulo en lugar de extractos, lo que le confiere más aroma y menos amargor.",
    graduación: "5,4º",
    envase: "Botella de 33cl",
    precio: "1,20€",
  },
  {
    nombre: "BRABANTE BLANCA",
    descripción:
      "Elaborada en Bélgica con métodos tradicionales, se puede considerar española pues la hacen empresarios madrileños para el mercado nacional. De sus variedades destaca esta blanca de trigo, ligera y suave.",
    graduación: "5º",
    envase: "Botella de 33cl",
    precio: "1,50€",
  },
]);
db.cervezas.createIndex(
  {
    nombre: "text",
    descripción: "text",
  },
  {
    name: "CervezasIndex",
    default_language: "spanish",
  }
);
