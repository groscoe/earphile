// Loading animation
document.getElementById('dashboard').style.display = 'block'; // Show the dashboard section
document.getElementsByTagName('html')[0].classList.remove('loading');

// Sidebar navigation
var switch_section = function (clicked_link, section_id) {
  if (!clicked_link.classList.contains('active-link')) { // if the section selected isn't active already
    document.getElementsByClassName('active-link')[0].classList.remove('active-link');
    clicked_link.classList.add('active-link');

    Velocity(document.getElementsByClassName('active-section')[0], "fadeOut", {
      duration: 200
    });
    Velocity(document.getElementById(section_id), "fadeIn", {
      delay: 200,
      duration: 200
    });

    document.getElementsByClassName('active-section')[0].classList.remove('active-section');
    document.getElementById(section_id).classList.add('active-section');
  }
}
