const info           = resume_content;
const header         = document.querySelector('#header');
const contact        = document.querySelector('#contact');
const coverLetter    = document.querySelector('#cover_letter');
const workExperience = document.querySelector('#work_experience');
const lifeExperience = document.querySelector('#life_experience');
const references     = document.querySelector('#references');

function populateHeader() {
  header.innerHTML = '<span id="name">'+info.name+'</span>' +
                     '<span id="job-title">'+info.position+'</span>';
}

function populateContact() {
  contact.innerHTML = '<span id="phone">'+info.phone+'</span>' +
                      '<span id="email">'+info.email+'</span>';
}

function populateCoverLetter() {
  coverLetter.innerHTML = '<img id="profile-picture" src="'+info.profile_pic+'">' +
                          '<p id="cover_letter">'+info.cover_letter+'</p>';
}

function populateWorkExperience() {
  for(var i in info.work_experience) {
    const job = info.work_experience[i];
    workExperience.innerHTML += '<div class="work-experience">' +
                                  '<div class="work-logo-'+job.logo+'"></div>' +
                                  '<span class="work-title">'+job.title+'</span>' +
                                  '<span class="work-dates">'+job.dates+'</span>' +
                                  '<span class="work-company">'+job.company+'</span>' +
                                  '<p class="work-description">'+job.description+'</p>' +
                                '</div>';
  }
}

function populateLifeExperience() {
  for(var i in info.life_experience) {
    const life = info.life_experience[i];
    lifeExperience.innerHTML += '<div class="life-experience">'+
                                  '<div class="life-logo-'+life.logo+'"></div>' +
                                  '<span class="life-feat">'+life.feat+'</span>' +
                                  '<span class="life-dates">'+life.dates+'</span>' +
                                  '<span class="life-location">'+life.location+'</span>'+
                                  '<p class="life-description">'+life.description+'</p>'+
                                '</div>'
  }
}

function populateReferences() {
  references.innerHTML = '<span class="references-message">'+info.references+'</span>';
}

const main = (function() {
  populateHeader();
  populateContact();
  populateCoverLetter();
  populateWorkExperience();
  populateLifeExperience();
  populateReferences();
})();
