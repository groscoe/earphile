// Loading animation
document.getElementsByTagName('html')[0].classList.remove('loading');

// Sidebar navigation
var switch_section = function (clicked_link, section_id) {
  if (!clicked_link.classList.contains('active-link')) { // if the section selected isn't active already
    document.getElementsByClassName('active-link')[0].classList.toggle('active-link');
    clicked_link.classList.toggle('active-link');
    document.getElementsByClassName('active-section')[0].classList.toggle('active-section');
    document.getElementById(section_id).classList.toggle('active-section');
  }
}
