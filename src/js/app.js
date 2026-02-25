import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "position-right", // social media bar position (position-left or position-right)
        //for social media links, only update usernames
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        Linkedintype: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" onerror="src='https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaWdvfGVufDB8fDB8fHww'" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${
            variables.avatarURL
          }" class="photo" onerror="src='https://randomuser.me/api/portraits/men/18.jpg'" />
          <h1>${variables.name ? variables.name : "Oscar"} ${
    variables.lastName ? variables.lastName : "Becerrra"
  }</h1>
          <h2>${variables.role ? variables.role : "Role"}</h2>
          <h3>${variables.city ? variables.city : "Miami"},${
    variables.country ? variables.country : "USA"
  }</h3>
          <ul class=${variables.socialMediaPosition}>
            <li><a href="https://twitter.com/"${
              variables.twitter ? variables.twitter : "4geeksacademy"
            }><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/"${
              variables.github ? variables.github : "4geeksacademy"
            }><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/"${
              variables.Linkedintype ? variables.Linkedintype : "4geehsacademy"
            }${
    variables.linkedin ? variables.linkedin : "4geeksacademy"
  }><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/"${
              variables.instagram ? variables.instagram : "4geeksacademy"
            }><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=889&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/men/47.jpg",
    // social media bar position (position-left or position-right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    Linkedintype: "in",
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
