export default {
  application: {
    name: 'paparajo.tech',
    title: 'Tech companies and events based on Región de Murcia.'
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
        nextEvent: 'Next event',
        eventLink: 'Event link'
      }
    },

    navBar: {
      template: {
        menu: 'Menu',
        companies: 'Companies',
        events: 'Events',
        news: 'News',
        contact: 'Contact',
        languages: 'Languages 🇬🇧'
      }
    },

    changeLocale: {
      template: {
        EN: 'English 🇬🇧',
        ES: 'Spanish 🇪🇸',
        MURCIANO: 'Murciano 🍋'
      }
    },

    footer: {
      template: {
        addCompanyQuestion: 'Would you like to add a company?',
        addEventQuestion: 'Would you like to add an event?',
        publishPost: 'Would you like to publish a post?',
        contactUs: 'Contact us',
        aboutProject: 'About the project',
        twitter: 'Twitter',
        facebook: 'Facebook',
        instagram: 'Instagram'
      }
    }
  }
};
