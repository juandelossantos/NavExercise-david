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


// Function to handle submenus
function load() {
  var menuon = document.getElementById('menuon');
  var WorkItem = document.getElementById('WorkItem');
  WorkItem.addEventListener('click', function() {
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
  AboutItem.addEventListener('click', function() {
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
  CareersItem.addEventListener('click', function() {
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
  IdeasItem.addEventListener('click', function() {
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
  NewsItem.addEventListener('click', function() {
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
  EventsItem.addEventListener('click', function() {
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
  ContactItem.addEventListener('click', function() {
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
