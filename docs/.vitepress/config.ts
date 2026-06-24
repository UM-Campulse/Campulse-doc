
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Documentation Campulse',
  description: 'Documentation interne Campulse',

  lang: 'fr-FR',

  appearance: true,

  cleanUrls: true,
  
  base : '/Campulse-doc/',

 // lastUpdated: true,

  themeConfig: {

    // Logo
   // logo: '/logo.png',

    // Barre du haut
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Documentation fonctionnelle', link: '/introduction' }
    ],

    // Menu latéral
    sidebar: [
	{
		text: 'Introduction', link: '/introduction'
		},
      {
        text: 'Etudiants',
        items: [
          { text: 'Connexion', link: '/etu/connexion' },
          { text: 'Changement de mot de passe', link: '/etu/mdp' },
          { text: 'Affiliation à une association', link: '/etu/affiliation-asso' },
		  { text: 'Edition de la fiche association', link: '/etu/edition-asso' },
          { text: 'Délégation de présidence', link: '/etu/delegation-presidence' },
          { text: "Dépôt de la charte", link: '/etu/agrement' },
		  { text: 'Demande de subvention', link: '/etu/subvention' },
          { text: "Avancement d'un projet", link: '/etu/avancement-projet' },
          { text: "Bilan moral et financier", link: '/etu/bilan' }

        ]
      },
      {
        text: 'Gestionnaires',
        items: [
          { text: 'Connexion', link: '/gestion/connexion' },
          { text: 'Changement de mot de passe', link: '/gestion/mdp' },
		  { text: 'Gestion des utilisateurs', link: '/gestion/users' },
          { text: 'Gestion des associations', link: '/gestion/assos' },
		  { text: 'Gestion des documents', link: '/gestion/documents' },
          { text: 'Gestion des chartes', link: '/gestion/chartes' },
		  { text: 'Gestion des commissions', link: '/gestion/commissions' },
          { text: 'Gestion des projets', link: '/gestion/projets' },
		  { text: 'Export de données', link: '/gestion/export' }
        ]
      },
	  
	  {
        text: 'Membres de commission',
        items: [
          { text: 'Connexion', link: '/etu/connexion' },
          { text: 'Changement de mot de passe', link: '/etu/mdp' },
		  { text: 'Accès aux projets', link: '/membre/projet' }
        ]
      }
    ],

    // Recherche
    search: {
      provider: 'local'
    },

    // Footer
    footer: {
      message: 'Documentation interne',
      copyright: '© 2026 Campulse'
    }
	
    // Réseaux / liens externes
   // socialLinks: [
   //{ icon: 'github', link: 'https://github.com/' }
   //
  }
})

