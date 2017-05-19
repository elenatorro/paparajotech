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
      aboutUs: 'About the project',
      aboutUsDescription: 'paparajo.tech is a web portal created with the purpose of showing the different tech-based companies in Murcia. Our aim is to increase the visibility of the companies, but also to offer information about these companies and attract talent, both national and international.',
      contactUs: 'Contact us',
      contactUsDescription: 'If you want to contact us, please send us an email.',
      addCompany: 'Add Company',
      addCompanyQuestion: 'Would you like to add a company?',
      addCompanyAnswer: 'If you want to add a new company to the map, please fill this form:',
      addEvent: 'Add Event',
      addEventQuestion: 'Would you like to add an event?',
      addEventAnswer: 'If you want to add a new event, please fill this form:',
      questions: 'Questions'
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
        companies: 'Company Map',
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
