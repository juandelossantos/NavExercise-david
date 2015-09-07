'use strict';
console.log('cargado con exito');

// Function to switch submenu
function toggleHugesubmenu(div1, div2) {
  var el1 = document.getElementById(div1);
  var el2 = document.getElementById(div2);

  if (el1.style.display === 'none' && el2.style.display === 'none') {
    el1.style.display = 'inline-block';
    el2.style.display = 'inline-block';
  } else {
    el1.style.display = 'none';
    el2.style.display = 'none';
  }
}
// function to get the actual viewportsize



// function to open menu if screen size <768px

function mobileMenu(){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  console.log(w);
  var openButton = document.getElementById('logo');
  var closeButton = document.getElementById('hugemenu-close');
  var menu = document.getElementById('menuwrap');
  var content = document.getElementById('wrap');
  var fadeon = document.getElementById('menuon');
  var openMenu = function(){
    closeButton.style.display = 'block';
    menu.style.left = '-72px';
    content.style.left = '70%';
    fadeon.className = fadeon.className + 'menuon';
  };
  var closeMenu = function(){
    closeButton.style.display = 'none';
    menu.style.left = '-100%';
    content.style.left = '0';
    fadeon.className = '';
  };
  if (w < 768) {
    openButton.addEventListener('click', openMenu, false);
    closeButton.addEventListener('click', closeMenu, false);
  } else {
    openButton.removeEventListener('click', openMenu, false);
    closeButton.removeEventListener('click', closeMenu, false);
  }
}


window.onresize = mobileMenu;


// Function to handle submenus
function load() {
  var menuon = document.getElementById('menuon');
  var WorkItem = document.getElementById('WorkItem');
  var menuWorkHeight = document.getElementById('Worksubmenu');
  WorkItem.addEventListener('click', function() {
    menuWorkHeight.style.marginBottom = 0+'px';
    menuAboutHeight.style.marginBottom = 0+'px';
    menuCareersHeight.style.marginBottom = 0+'px';
    menuIdeasHeight.style.marginBottom = 0+'px';
    menuNewsHeight.style.marginBottom = 0+'px';
    menuEventsHeight.style.marginBottom = 0+'px';
    menuContactHeight.style.marginBottom = 0+'px';
    toggleHugesubmenu('Work', 'WorkUl');
    if (WorkItem.className === '' && menuon.className === '') {
      WorkItem.className = WorkItem.className + ' active';
      AboutItem.className = '';
      CareersItem.className = '';
      IdeasItem.className = '';
      NewsItem.className = '';
      EventsItem.className = '';
      ContactItem.className = '';
      if (menuon.className === '') {
        menuon.className = menuon.className + ' menuon';
      } else {
        menuon.className = '';
      }
    } else {
      WorkItem.className = '';
      menuon.className = '';
    }
    document.getElementById('About').style.display = 'none';
    document.getElementById('AboutUl').style.display = 'none';
    document.getElementById('Careers').style.display = 'none';
    document.getElementById('CareersUl').style.display = 'none';
    document.getElementById('Ideas').style.display = 'none';
    document.getElementById('IdeasUl').style.display = 'none';
    document.getElementById('News').style.display = 'none';
    document.getElementById('NewsUl').style.display = 'none';
    document.getElementById('Events').style.display = 'none';
    document.getElementById('EventsUl').style.display = 'none';
    document.getElementById('Contact').style.display = 'none';
    document.getElementById('ContactUl').style.display = 'none';

  }, false);

  var AboutItem = document.getElementById('AboutItem');
  var menuAboutHeight = document.getElementById('Aboutsubmenu');
  var opencloseAbout = document.getElementById('opencloseAbout');
  AboutItem.addEventListener('click', function() {

    menuWorkHeight.style.marginBottom = 0+'px';
    if(menuAboutHeight.style.marginBottom === ''){
      menuAboutHeight.style.marginBottom = (3*48)+24+'px';
      opencloseAbout.style.transform = 'rotate(180deg)';
    } else {
      menuAboutHeight.style.marginBottom = '';
      opencloseAbout.style.transform = 'rotate(0deg)';
    }
    menuCareersHeight.style.marginBottom = 0+'px';
    menuIdeasHeight.style.marginBottom = 0+'px';
    menuNewsHeight.style.marginBottom = 0+'px';
    menuEventsHeight.style.marginBottom = 0+'px';
    menuContactHeight.style.marginBottom = 0+'px';
    toggleHugesubmenu('About', 'AboutUl');
    if (AboutItem.className === '' && menuon.className === '') {
      AboutItem.className = AboutItem.className + ' active';
      WorkItem.className = '';
      CareersItem.className = '';
      IdeasItem.className = '';
      NewsItem.className = '';
      EventsItem.className = '';
      ContactItem.className = '';
      if (menuon.className === '') {
        menuon.className = menuon.className + ' menuon';
      } else {
        menuon.className = '';
      }
    } else {
      AboutItem.className = '';
      menuon.className = '';
    }

    document.getElementById('Work').style.display = 'none';
    document.getElementById('WorkUl').style.display = 'none';
    document.getElementById('Careers').style.display = 'none';
    document.getElementById('CareersUl').style.display = 'none';
    document.getElementById('Ideas').style.display = 'none';
    document.getElementById('IdeasUl').style.display = 'none';
    document.getElementById('News').style.display = 'none';
    document.getElementById('NewsUl').style.display = 'none';
    document.getElementById('Events').style.display = 'none';
    document.getElementById('EventsUl').style.display = 'none';
    document.getElementById('Contact').style.display = 'none';
    document.getElementById('ContactUl').style.display = 'none';

  }, false);

  var CareersItem = document.getElementById('CareersItem');
  var menuCareersHeight = document.getElementById('Careerssubmenu');
  var opencloseCareers = document.getElementById('opencloseCareers');
  CareersItem.addEventListener('click', function() {

    menuWorkHeight.style.marginBottom = 0+'px';
    menuAboutHeight.style.marginBottom = 0+'px';
    if(menuCareersHeight.style.marginBottom === ''){
      menuCareersHeight.style.marginBottom = (8*48)+24+'px';
      opencloseCareers.style.transform = 'rotate(180deg)';
    } else {
      menuCareersHeight.style.marginBottom = '';
      opencloseCareers.style.transform = 'rotate(0deg)';
    }
    menuIdeasHeight.style.marginBottom = 0+'px';
    menuNewsHeight.style.marginBottom = 0+'px';
    menuEventsHeight.style.marginBottom = 0+'px';
    menuContactHeight.style.marginBottom = 0+'px';

    toggleHugesubmenu('Careers', 'CareersUl');
    if (CareersItem.className === '' && menuon.className === '') {
      CareersItem.className = CareersItem.className + ' active';
      WorkItem.className = '';
      AboutItem.className = '';
      IdeasItem.className = '';
      NewsItem.className = '';
      EventsItem.className = '';
      ContactItem.className = '';
      if (menuon.className === '') {
        menuon.className = menuon.className + ' menuon';
      } else {
        menuon.className = '';
      }
    } else {
      CareersItem.className = '';
      menuon.className = '';
    }

    document.getElementById('Work').style.display = 'none';
    document.getElementById('WorkUl').style.display = 'none';
    document.getElementById('About').style.display = 'none';
    document.getElementById('AboutUl').style.display = 'none';
    document.getElementById('Ideas').style.display = 'none';
    document.getElementById('IdeasUl').style.display = 'none';
    document.getElementById('News').style.display = 'none';
    document.getElementById('NewsUl').style.display = 'none';
    document.getElementById('Events').style.display = 'none';
    document.getElementById('EventsUl').style.display = 'none';
    document.getElementById('Contact').style.display = 'none';
    document.getElementById('ContactUl').style.display = 'none';

  }, false);

  var IdeasItem = document.getElementById('IdeasItem');
  var menuIdeasHeight = document.getElementById('Ideassubmenu');
  var opencloseIdeas = document.getElementById('opencloseIdeas');
  IdeasItem.addEventListener('click', function() {

    menuWorkHeight.style.marginBottom = 0+'px';
    menuAboutHeight.style.marginBottom = 0+'px';
    menuCareersHeight.style.marginBottom = 0+'px';
    if(menuIdeasHeight.style.marginBottom === ''){
      menuIdeasHeight.style.marginBottom = (4*48)+24+'px';
      opencloseIdeas.style.transform = 'rotate(180deg)';
    } else {
      menuIdeasHeight.style.marginBottom = '';
      opencloseIdeas.style.transform = 'rotate(0deg)';
    }
    menuNewsHeight.style.marginBottom = 0+'px';
    menuEventsHeight.style.marginBottom = 0+'px';
    menuContactHeight.style.marginBottom = 0+'px';
    toggleHugesubmenu('Ideas', 'IdeasUl');
    if (IdeasItem.className === '' && menuon.className === '') {
      IdeasItem.className = IdeasItem.className + ' active';
      WorkItem.className = '';
      AboutItem.className = '';
      CareersItem.className = '';
      NewsItem.className = '';
      EventsItem.className = '';
      ContactItem.className = '';
      if (menuon.className === '') {
        menuon.className = menuon.className + ' menuon';
      } else {
        menuon.className = '';
      }
    } else {
      IdeasItem.className = '';
      menuon.className = '';
    }

    document.getElementById('Work').style.display = 'none';
    document.getElementById('WorkUl').style.display = 'none';
    document.getElementById('About').style.display = 'none';
    document.getElementById('AboutUl').style.display = 'none';
    document.getElementById('Careers').style.display = 'none';
    document.getElementById('CareersUl').style.display = 'none';
    document.getElementById('News').style.display = 'none';
    document.getElementById('NewsUl').style.display = 'none';
    document.getElementById('Events').style.display = 'none';
    document.getElementById('EventsUl').style.display = 'none';
    document.getElementById('Contact').style.display = 'none';
    document.getElementById('ContactUl').style.display = 'none';

  }, false);

  var NewsItem = document.getElementById('NewsItem');
  var menuNewsHeight = document.getElementById('Newssubmenu');
  NewsItem.addEventListener('click', function() {
    menuWorkHeight.style.marginBottom = 0+'px';
    menuAboutHeight.style.marginBottom = 0+'px';
    menuCareersHeight.style.marginBottom = 0+'px';
    menuIdeasHeight.style.marginBottom = 0+'px';
    menuNewsHeight.style.marginBottom = 0+'px';
    menuEventsHeight.style.marginBottom = 0+'px';
    menuContactHeight.style.marginBottom = 0+'px';
    toggleHugesubmenu('News', 'NewsUl');
    if (NewsItem.className === '' && menuon.className === '') {
      NewsItem.className = NewsItem.className + ' active';
      WorkItem.className = '';
      AboutItem.className = '';
      CareersItem.className = '';
      IdeasItem.className = '';
      EventsItem.className = '';
      ContactItem.className = '';
      if (menuon.className === '') {
        menuon.className = menuon.className + ' menuon';
      } else {
        menuon.className = '';
      }
    } else {
      NewsItem.className = '';
      menuon.className = '';
    }

    document.getElementById('Work').style.display = 'none';
    document.getElementById('WorkUl').style.display = 'none';
    document.getElementById('About').style.display = 'none';
    document.getElementById('AboutUl').style.display = 'none';
    document.getElementById('Careers').style.display = 'none';
    document.getElementById('CareersUl').style.display = 'none';
    document.getElementById('Ideas').style.display = 'none';
    document.getElementById('IdeasUl').style.display = 'none';
    document.getElementById('Events').style.display = 'none';
    document.getElementById('EventsUl').style.display = 'none';
    document.getElementById('Contact').style.display = 'none';
    document.getElementById('ContactUl').style.display = 'none';

  }, false);

  var EventsItem = document.getElementById('EventsItem');
  var menuEventsHeight = document.getElementById('Eventssubmenu');
  EventsItem.addEventListener('click', function() {
    menuWorkHeight.style.marginBottom = 0+'px';
    menuAboutHeight.style.marginBottom = 0+'px';
    menuCareersHeight.style.marginBottom = 0+'px';
    menuIdeasHeight.style.marginBottom = 0+'px';
    menuNewsHeight.style.marginBottom = 0+'px';
    menuEventsHeight.style.marginBottom = 0+'px';
    menuContactHeight.style.marginBottom = 0+'px';
    toggleHugesubmenu('Events', 'EventsUl');
    if (EventsItem.className === '' && menuon.className === '') {
      EventsItem.className = EventsItem.className + ' active';
      WorkItem.className = '';
      AboutItem.className = '';
      CareersItem.className = '';
      IdeasItem.className = '';
      NewsItem.className = '';
      ContactItem.className = '';
      if (menuon.className === '') {
        menuon.className = menuon.className + ' menuon';
      } else {
        menuon.className = '';
      }
    } else {
      EventsItem.className = '';
      menuon.className = '';
    }

    document.getElementById('Work').style.display = 'none';
    document.getElementById('WorkUl').style.display = 'none';
    document.getElementById('About').style.display = 'none';
    document.getElementById('AboutUl').style.display = 'none';
    document.getElementById('Careers').style.display = 'none';
    document.getElementById('CareersUl').style.display = 'none';
    document.getElementById('Ideas').style.display = 'none';
    document.getElementById('IdeasUl').style.display = 'none';
    document.getElementById('News').style.display = 'none';
    document.getElementById('NewsUl').style.display = 'none';
    document.getElementById('Contact').style.display = 'none';
    document.getElementById('ContactUl').style.display = 'none';

  }, false);

  var ContactItem = document.getElementById('ContactItem');
  var menuContactHeight = document.getElementById('Contactsubmenu');
  var opencloseContact = document.getElementById('opencloseContact');
  ContactItem.addEventListener('click', function() {
    opencloseContact.style.transform = 'rotate(180deg)';
    menuWorkHeight.style.marginBottom = 0+'px';
    menuAboutHeight.style.marginBottom = 0+'px';
    menuCareersHeight.style.marginBottom = 0+'px';
    menuIdeasHeight.style.marginBottom = 0+'px';
    menuNewsHeight.style.marginBottom = 0+'px';
    menuEventsHeight.style.marginBottom = 0+'px';
    if(menuContactHeight.style.marginBottom === ''){
      menuContactHeight.style.marginBottom = (8*48)+24+'px';
      opencloseContact.style.transform = 'rotate(180deg)';
    } else {
      menuContactHeight.style.marginBottom = '';
      opencloseContact.style.transform = 'rotate(0deg)';
    }
    toggleHugesubmenu('Contact', 'ContactUl');
    if (ContactItem.className === '' && menuon.className === '') {
      ContactItem.className = ContactItem.className + ' active';
      WorkItem.className = '';
      AboutItem.className = '';
      CareersItem.className = '';
      IdeasItem.className = '';
      NewsItem.className = '';
      EventsItem.className = '';
      if (menuon.className === '') {
        menuon.className = menuon.className + ' menuon';
      } else {
        menuon.className = '';
      }
    } else {
      ContactItem.className = '';
      menuon.className = '';
    }

    document.getElementById('Work').style.display = 'none';
    document.getElementById('WorkUl').style.display = 'none';
    document.getElementById('About').style.display = 'none';
    document.getElementById('AboutUl').style.display = 'none';
    document.getElementById('Careers').style.display = 'none';
    document.getElementById('CareersUl').style.display = 'none';
    document.getElementById('Ideas').style.display = 'none';
    document.getElementById('IdeasUl').style.display = 'none';
    document.getElementById('News').style.display = 'none';
    document.getElementById('NewsUl').style.display = 'none';
    document.getElementById('Events').style.display = 'none';
    document.getElementById('EventsUl').style.display = 'none';

  }, false);




}

document.addEventListener('DOMContentLoaded', load, false);
