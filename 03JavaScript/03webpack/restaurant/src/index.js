import { componentTemplate } from "./template";

document.body.appendChild(componentTemplate());

function componentIndex() {
  const section = document.createElement("section");
  section.classList.add("content-section");
  section.classList.add("container");
  const h2 = document.createElement("h2");
  h2.classList.add("section-header");
  h2.textContent = "ABOUT";
  const img = document.createElement("img");
  img.classList.add("about-loja-image");
  img.src = "img/cores.jpg";
  const p1 = document.createElement("p");
  p1.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pretium risus. Mauris commodo, neque nec vehicula dictum, metus est faucibus libero, non interdum quam dolor ut urna. Ut vehicula sem quis augue euismod luctus. Etiam eget magna sit amet metus aliquet accumsan ac nec nisi. Morbi sed fermentum risus, nec condimentum leo. Proin ipsum augue, maximus quis iaculis quis, pharetra mollis elit. Vivamus in efficitur purus. Nullam pulvinar leo nec massa pharetra, non efficitur arcu luctus. Nam velit velit, consectetur a pharetra vel, vehicula vel quam. Ut hendrerit eros nibh. Nulla tincidunt mi vitae libero gravida, nec porta metus viverra. Quisque in gravida dui. Pellentesque hendrerit, mi non finibus vehicula, nunc dolor aliquam leo, accumsan venenatis leo mauris sit amet dui. Nunc auctor nec sapien in pulvinar.";
  const p2 = document.createElement("p");
  p2.textContent =
    "Aliquam iaculis turpis tortor, tempor mattis orci pharetra vel. Nam vitae nunc a risus pharetra euismod in in arcu. Donec sollicitudin dolor eget eros tempus consequat. Pellentesque dictum scelerisque urna. Maecenas commodo id augue id facilisis. Ut id dolor quis augue porta euismod ut ut quam. Pellentesque fermentum erat ac imperdiet tempus. Fusce vestibulum, orci ut elementum pellentesque, sapien eros ornare dui, quis finibus libero est eu purus. Duis vulputate sapien ac nisi tincidunt, scelerisque maximus purus pellentesque.";
  section.appendChild(img);
  section.appendChild(p1);
  section.appendChild(p2);
  section.appendChild(h2);

  return section;
}

document.body.appendChild(componentIndex());
