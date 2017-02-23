export default {
  application: {
    name: 'paparajo.tech',
    title: 'Red de empresas y eventos tecnológicos de la Región de Murcia.'
  },

  index: {
    template: {
      description: ''
    }
  },

  contact: {
    template: {
      aboutUs: 'Sobre el proyecto',
      aboutUsDescription: 'paparajo.tech es una web que permite ubicar las distintas empresas de base tecnológica de la Región de Murcia, desde consultorías de diseño y desarrollo web hasta desarrollo de aplicaciones, entre otros. El objetivo es dar visibilidad al talento de la región, así como ofrecer un directorio con información sobre empresas que sea de utilidad para aquéllos que, por ejemplo, estén buscando empleo en tierras murcianas.',
      contactUs: 'Contacta con nosotros',
      contactUsDescription: 'Para contactar con nosotros, puedes hacerlo a través de nuestro correo electrónico',
      addCompany: 'Añadir Empresa',
      addCompanyQuestion: '¿Quieres añadir una empresa?',
      addCompanyAnswer: 'Para añadir una empresa, por favor, rellena el siguiente formulario',
      addEvent: 'Añadir Evento',
      addEventQuestion: '¿Quieres añadir un evento?',
      addEventAnswer: 'Para añadir un evento, por favor, rellena el siguiente formulario',
      questions: 'Preguntas'
    }
  },

  components: {

    eventCard: {
      template: {
        nextEvent: 'Próximo evento',
        eventLink: 'Enlace al evento'
      }
    },

    navBar: {
      template: {
        menu: 'Menú',
        companies: 'Empresas',
        events: 'Eventos',
        news: 'Noticias',
        contact: 'Contacto',
        languages: 'Idiomas 🇪🇸'
      }
    },

    changeLocale: {
      template: {
        EN: 'Inglés 🇬🇧',
        ES: 'Español 🇪🇸',
        MURCIANO: 'Murciano 🍋'
      }
    },

    footer: {
      template: {
        addCompanyQuestion: '¿Quieres añadir una empresa?',
        addEventQuestion: '¿Quieres añadir un evento?',
        publishPost: '¿Quieres publicar un post?',
        contactUs: 'Contacta con nosotros',
        aboutProject: 'Sobre nosotros',
        twitter: 'Twitter',
        facebook: 'Facebook',
        instagram: 'Instagram'
      }
    }
  }
};
