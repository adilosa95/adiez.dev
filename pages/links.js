const links =[
  {
    id: 0,
    nombre: '¿Me invitas a un café?',
    icon: `https://img.icons8.com/fluent/48/000000/coffee.png` ,
    link: 'https://google.es',
    color: 'red'
  },
  {
    id: 1,
    nombre: 'Card2',
    icon: `https://img.icons8.com/fluent/48/000000/coffee.png` ,
    link: 'https://google.es',
    color: 'pink'
  }
]

const card = (data)=>{
  return `<div class="link-card" style="background-color: ${data.color};" >
          <img src=${data.icon} alt=${data.nombre}/>
          <p>${data.nombre}</p>
        </div>`
}

export const Links = `
  <div class="profile-picture"><img src='https://github.com/adilosa95.png?size=200' alt="foto-de-perfil"/></div>
  <div class="social-networks"></div>
  <div class="links">
    ${links.map((link) => card(link)).join('')}
  </div>`;

