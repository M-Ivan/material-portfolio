export const projects = [
  {
    title: "BullsOn",
    images: [
      "/images/projects/bullsOn/bullsOn.png",
      "/images/projects/bullsOn/bullsOn1.png",
      "/images/projects/bullsOn/bullsOn2.png",
      "/images/projects/bullsOn/bullsOn3.png",
      "/images/projects/bullsOn/bullsOn4.png",
      "/images/projects/bullsOn/bullsOn5.png",
      "/images/projects/bullsOn/bullsOn6.png",
      "/images/projects/bullsOn/bullsOn7.png",
    ],
    stack: "React (M-UI) / MongoDB / Express",
    description:
      "Bulls On es una red social fully responsive que aunque sigue en desarrollo, ya posee las principales funcionalidades que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas.",
    repoUrl: "https://github.com/M-Ivan/BullsOn",
    demoUrl: "https://bullson.herokuapp.com",
    type: "Red social",
  },

  {
    title: "AmLibre",
    images: ["/images/projects/e-commerce/E-commerce.png"],
    stack: "React / MongoDB / Express",
    description:
      "AmLibre es un E-Commerce completamente funcional y hecho a semejanza de Amazon y Mercado Libre, acepta pagos con PayPal, ofrece seguimiento de ordenes y dashoard del admin y vendedor. Entre otras cosas.",
    repoUrl: "https://github.com/M-Ivan/E-Commerce",
    demoUrl: "https://amlibre.herokuapp.com",
    type: "E-Commerce",
  },
  {
    title: "Buscador de pasajes",
    images: ["/images/projects/buscador/buscadorPasajes.png"],
    stack: "React (M-UI) / MongoDB / Express",
    description:
      "Proyecto que hace request a una API REST y devuelve una lista de pasajes que cumplan con los requisitos solicitados.",
    repoUrl: "https://github.com/M-Ivan/Buscador-de-pasajes",
    demoUrl: "https://buscadorpasajes.herokuapp.com/",
    type: "Request a DB desde cliente",
  },
  // {
  //   title: "Sistema de Gestion de Obras",
  //   images: [
  //     "/images/projects/sgo/site-details.png",
  //     "/images/projects/sgo/key-register.png",
  //     "/images/projects/sgo/sites.png",
  //     "/images/projects/sgo/visitors-dashboard.png",
  //     "/images/projects/sgo/visitor-details.png",
  //     "/images/projects/sgo/collaborators.png",
  //     "/images/projects/sgo/acreditation.png",
  //     "/images/projects/sgo/reports.png",
  //   ],
  //   stack: "React (antd) / NestJS (express) / PostgreSQL",
  //   description:
  //     "Mi primer proyecto en una empresa, se trata de una app para Accefy, una startup de Cordoba que se especializa en poder gestionar accesos, cerraduras, y basicamente abrir puertas con el celular. El sistema de gestion de Obras ofrece una automatizacion al flujo de ingreso, egreso de un lugar especifico, dejando un registro de cada ingreso / egreso efectuado por un colaborador. Los visitantes, solo podran ingresar a los sitios para los que tengan llaves, y por los accesos que permitan esa llave. La app esta por salir a produccion, las imagenes son del ambiente de testing. ",
  //   type: "Gestion",
  // },
  {
    title: "Landing page base",
    images: [
      "/images/projects/landing-test/header.png",
      "/images/projects/landing-test/about.png",
      "/images/projects/landing-test/projects.png",
      "/images/projects/landing-test/project-detail.png",
      "/images/projects/landing-test/team.png",
      "/images/projects/landing-test/contact.png",
    ],
    stack: "React (mui)",
    repoUrl: "https://github.com/M-Ivan/Landing-Page",
    demoUrl: "https://landingtestdev.herokuapp.com",
    description:
      "Proyecto base de una landing page, esta pensado para ser utilizado 'out of the box', es decir, clonas el repo, cargas tu data en el file de los datos y ya tenes una landing-page, hace falta revisitar el codigo pero esta bastante prolijo. La deuda tecnica mas grande que tiene este proyecto es la pendiente migracion a TypeScript.",
    type: "Landing Page",
  },
];
