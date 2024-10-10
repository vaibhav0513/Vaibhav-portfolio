"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

//portfolio modal 
function openProject1() {
  openModal(
    "Developed a comprehensive NGO website named Rudraveer NGO using the ReactJS, Tailwind CSS , designed to facilitate community engagement and promote impactful programs in education, healthcare, women empowerment, and environmental conservation.", 
    ["Key feature", "", ""],
    ["", "Tech Stack Used :", ""],  
    [
      [],                                      
      ["ReactJS", "Tailwind CSS"],            
      []                                       
    ]
  );
}

function openProject2() {
  openModal(
    "I built my personal portfolio website using HTML, CSS, and JavaScript to showcase my skills, projects, and work experience", 
    ["Key feature", "", ""],
    ["", "Tech Stack Used :", ""],  
    [
      [],                                      
      ["HTML", "CSS", "JavaScript"],            
      []                                       
    ]
  );
}

function openProject3() {
  openModal(
    "Developed an engaging moving car animation using HTML and CSS, showcasing my ability to create dynamic visual experiences and implement smooth transitions and animations in web design.", 
    ["Key feature 3", "", ""],
    ["", "Tech Stack Used :", ""],  
    [
      [],                                      
      ["HTML", "CSS", "JavaScript"],            
      []                                       
    ]
  );
}

function openProject4() {
  openModal(
    "Vblogger offers insightful blogs on the latest trends in technology, lifestyle tips, and startup stories. With a user-friendly interface, readers can easily navigate various topics. The dedicated admin page allows for quick creation and management of new posts, ensuring fresh and relevant content. Stay updated on what matters to you!", 
    ["Key feature", "", ""],
    ["", "Tech Stack Used :", ""],  
    [
      [],                                      
      ["React JS", "Tailwind CSS", "MongoDB"],            
      []                                       
    ]
  );
}

function openProject5() {
  openModal(
    "Developed a fully functional eCommerce website named FashionHaven using the MERN stack (MongoDB, Express.js, React, Node.js), providing a seamless online shopping experience for users.", 
    ["User Authentication: Secure sign-up and login for user accounts. Order Management: Users can browse and place orders efficiently. Shopping Cart: Intuitive Add to Cart functionality for item management. Admin Dashboard: Admin page for product management and order monitoring. Order Tracking: Real-time tracking of purchase statuses.", "", ""],
    ["", "Tech Stack Used :", ""],  
    [
      [],                                      
      ["React", "Tailwind CSS", "MERN Stack (MongoDB, Express.js, React, Node.js)"],         
      []                                       
    ]
  );
}

function openProject6() {
  openModal(
    "I built a 3D house animation project using HTML, CSS, and JavaScript.", 
    ["Key feature", "", ""],
    ["", "Tech Stack Used :", ""],  
    [
      [],                                      
      ["HTML", "CSS", "JavaScript"],            
      []                                       
    ]
  );
}

function openModal(overview, descriptions, infoTitles, techStacks) {
  const maxLength = Math.max(descriptions.length, infoTitles.length, techStacks.length);

  // Set project overview
  const overviewElement = document.getElementById("projectOverview");
  overviewElement.innerText = overview || ''; // Clear if empty

  for (let i = 1; i <= maxLength; i++) {
    const descriptionElement = document.getElementById(`projectDescription${i}`);
    const infoElement = document.getElementById(`projectInfo${i}`);
    const techStackList = document.getElementById(`techStackList${i}`);

    // Ensure the elements exist before attempting to update them
    if (descriptionElement) {
      descriptionElement.innerText = descriptions[i - 1] || ''; // Clear if empty
    }

    if (infoElement) {
      infoElement.innerText = infoTitles[i - 1] || ''; // Clear if empty
    }

    // Clear and update tech stack list
    if (techStackList) {
      techStackList.innerHTML = '';

      if (techStacks[i - 1] && techStacks[i - 1].length > 0) {
        techStacks[i - 1].forEach(stackItem => {
          const li = document.createElement("li");
          li.innerText = stackItem;
          techStackList.appendChild(li);
        });
      }
    }
  }
  // Display the modal
  document.getElementById("techstackModal").style.display = "block";
}


// Closing modal
function closeModal() {
  document.getElementById("techstackModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("techstackModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
