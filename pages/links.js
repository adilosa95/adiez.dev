const links =[
  {
    id: 0,
    nombre: 'Visita mi web',
    icon: `https://img.icons8.com/fluent/60/000000/web-design.png` ,
    link: 'https://github.com/adilosa95'
  },
  {
    id: 2,
    nombre: 'Twitter',
    icon: `https://img.icons8.com/fluent/60/000000/twitter.svg` ,
    link: 'https://twitter.com/adilosa95'
  },
  {
    id: 4,
    nombre: 'DEV.to',
    icon: `https://cdn.worldvectorlogo.com/logos/devto.svg` ,
    link: 'https://dev.to/adiezdev'
  },
  {
    id: 3,
    nombre: 'Mi Kit',
    icon: `https://img.icons8.com/color/48/000000/keyboard.png` ,
    link: 'https://kit.co/adiezdev'
  },
  {
    id: 1,
    nombre: 'Github',
    icon: `https://img.icons8.com/fluent/60/000000/github.svg` ,
    link: 'https://github.com/adilosa95'
  },
  {
    id: 5,
    nombre: 'Instagram',
    icon: `https://img.icons8.com/fluent/60/000000/instagram-new.svg` ,
    link: 'https://instagram.com/adiezdev',
    class: 'new-post'
  }
]

const card = (data)=>{
  return `<div class="link-card ${ !data.class ? '' :data.class }">
            <a href=${data.link}>
              <img width="60px"  src=${data.icon} alt=${data.nombre}/>
              <p>${data.nombre}</p>
            </a>
          </div>`
}

export const Links = `
  <div class="links">
    <div class="profile-picture"><img src='https://pbs.twimg.com/profile_images/1380936395875815426/dsNNOmWr_200x200.jpg' alt="foto-de-perfil"/></div>
    <div class="profile-description">
      <p class="profile-name">Alejandro Díez López</p>
      <p>@adiezdev</p>
    </div>
    <div class="social-networks"></div>
    <div class="links-cards">
      ${links.reverse().map((link) => card(link)).join('')}
    </div>
  </div>`;

