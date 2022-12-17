const teamData = [
  {
    name: "Goodnews Adewole",
    bio: "Goodnews Adewole is a  Second year student of computer science at UNILAG and  a first year student at Kibo. He is also a member of chat Gpt's blog team" ,
    role: "Techie",
    imageUrl: "/images/IMG_2143.jpg",
  },
  {
    name: "Ridwan Animasahun",
    bio: "Ridwan Animasahun is a final year student at UNILAG and  a first year student at Kibo. He is also a member of chat Gpt's blog team",
    imageUrl: "/images/IMG_2141.jpg",
    role: "Tech Enthusiast",
  },
  {
    name: "Oladipupo Akinyan",
    bio: " Oladipupo Akinyan is a first year student computer science student at Kibo. He is also a member of chat Gpt's blog team  ",
    imageUrl: "/images/IMG_2134 (1).jpg",
    role:" brains of the operation"
  },
  
];
const aboutMembers = document.querySelector(".about-members");
const popUp = document.querySelector(".pop-up");
const popUpDisplay = document.getElementById("pop-up-display");
console.log(aboutMembers);
teamData.forEach((data, i) => {
  const aboutMember = document.createElement("div");
  aboutMember.classList.add("about-member");
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image-wrapper");
  const image = document.createElement("img");
  image.src = data.imageUrl;
  image.alt = data.name;
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-plus");
  icon.onclick = () => {
    console.log("clicked");
    popUp.classList.add("show");
    showAboutMember(i);
  };
  imageWrapper.appendChild(image);
  imageWrapper.appendChild(icon);
  aboutMember.appendChild(imageWrapper);
  const name = document.createElement("h3");
  name.textContent = data.name;
  aboutMember.appendChild(name);
  const role = document.createElement("p");
  role.textContent = data.role;
  aboutMember.appendChild(role);

  aboutMembers.appendChild(aboutMember);
});
function closePopup() {
  popUp.classList.remove("show");
  popUpDisplay.innerHTML = ""
}
function showAboutMember(i) {
  const { imageUrl, name, role, bio} =
    teamData[i];
  popUpDisplay.innerHTML = `
        <div class="about-member-info">
      <div class="image-sec">
        <img src="${imageUrl}" alt="placeholder" />
        <h2>${name}</h2>
        <p>${role}</p>
      </div>
      <div class="details-sec">
        <h3>Bio</h3>
        <p>${bio}</p>
      </div>
    </div>
    `;
}
