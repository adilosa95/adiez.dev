const links =[
  {
    id: 0,
    nombre: 'Visita mi web',
    icon: `https://img.icons8.com/fluent/60/000000/web-design.png` ,
    link: 'https://github.com/adilosa95',
    color: ''
  },
  {
    id: 1,
    nombre: 'Sígueme en Github',
    icon: `https://img.icons8.com/fluent/60/000000/github.svg` ,
    link: 'https://github.com/adilosa95',
    color: ''
  },
  {
    id: 2,
    nombre: 'Sígueme en Twitter',
    icon: `https://img.icons8.com/fluent/60/000000/twitter.svg` ,
    link: 'https://twitter.com/adilosa95',
    color: ''
  }
]

const card = (data)=>{
  return `<div class="link-card">
            <a href=${data.link}>
              <img src=${data.icon} alt=${data.nombre}/>
              <p>${data.nombre}</p>
            </a>
          </div>`
}

export const Links = `
  <div class="links">
    <div class="profile-picture"><img src='https://github.com/adilosa95.png?size=200' alt="foto-de-perfil"/></div>
    <div class="social-networks"></div>
    <div class="links-cards">
      ${links.map((link) => card(link)).join('')}
    </div>
  </div>`;

