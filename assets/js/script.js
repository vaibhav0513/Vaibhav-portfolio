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
  const projectOverview =
    "I built my personal portfolio website using HTML, CSS, and JavaScript to showcase my skills, projects, and work experience.";

  const keyFeatures = [
    "1. Community Engagement: Encourages member interaction.",
    "2. Program Promotion: Showcases initiatives in education, healthcare, and women empowerment.",
    "3. User-Friendly Interface: Designed with ReactJS and Tailwind CSS for a seamless experience.",
    "4. Responsive Design: Optimized for accessibility on various devices.",
    "5. Impactful Content: Shares stories and updates on the NGO’s programs and events.",
  ]; // List of key features

  const projectInfo1 = "Tech Stack Used :";
  const techStack1 = ["ReactJS", "Tailwind CSS"];

  // Set the project overview
  document.getElementById("projectOverview").textContent = projectOverview;

  // Populate the key features list
  const keyFeaturesList = document.getElementById("keyFeaturesList");
  keyFeaturesList.innerHTML = ""; // Clear any existing content
  keyFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    keyFeaturesList.appendChild(li);
  });

  // Set the project information
  document.getElementById("projectInfo1").textContent = projectInfo1;

  // Populate the tech stack list
  const techStackList1 = document.getElementById("techStackList1");
  techStackList1.innerHTML = ""; // Clear any existing content
  techStack1.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techStackList1.appendChild(li);
  });

  // Open the modal
  document.getElementById("techstackModal").style.display = "block";
}

function openProject2() {
  const projectOverview =
    "I built my personal portfolio website using HTML, CSS, and JavaScript to showcase my skills, projects, and work experience.";

  const keyFeatures = [
    "1. Skill Showcase: Highlights technical skills and expertise.",
    "2. Project Display: Features a collection of projects with descriptions and links.",
    "3. Work Experience: Details past work experiences and achievements.",
    "4. Responsive Design: Optimized for viewing on desktops and mobile devices.",
    "5. Interactive Elements: Engaging user interface with smooth transitions.",
  ]; // List of key features

  const projectInfo1 = "Tech Stack Used :";
  const techStack1 = ["HTML", "CSS", "JavaScript"];

  // Set the project overview
  document.getElementById("projectOverview").textContent = projectOverview;

  // Populate the key features list
  const keyFeaturesList = document.getElementById("keyFeaturesList");
  keyFeaturesList.innerHTML = ""; // Clear any existing content
  keyFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    keyFeaturesList.appendChild(li);
  });

  // Set the project information
  document.getElementById("projectInfo1").textContent = projectInfo1;

  // Populate the tech stack list
  const techStackList1 = document.getElementById("techStackList1");
  techStackList1.innerHTML = ""; // Clear any existing content
  techStack1.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techStackList1.appendChild(li);
  });

  // Open the modal
  document.getElementById("techstackModal").style.display = "block";
}

function openProject3() {
  const projectOverview =
    "Developed an engaging moving car animation using HTML and CSS, showcasing my ability to create dynamic visual experiences and implement smooth transitions and animations in web design.";

  const keyFeatures = [
    "1. Dynamic Animation: Engaging moving car animation created with HTML and CSS.",
    "2. Smooth Transitions: Implemented fluid motion for realistic movement.",
    "3. Lightweight: Efficient code for fast loading times.",
  ]; // List of key features

  const projectInfo1 = "Tech Stack Used :";
  const techStack1 = ["HTML", "CSS", "JavaScript"];

  // Set the project overview
  document.getElementById("projectOverview").textContent = projectOverview;

  // Populate the key features list
  const keyFeaturesList = document.getElementById("keyFeaturesList");
  keyFeaturesList.innerHTML = ""; // Clear any existing content
  keyFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    keyFeaturesList.appendChild(li);
  });

  // Set the project information
  document.getElementById("projectInfo1").textContent = projectInfo1;

  // Populate the tech stack list
  const techStackList1 = document.getElementById("techStackList1");
  techStackList1.innerHTML = ""; // Clear any existing content
  techStack1.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techStackList1.appendChild(li);
  });

  // Open the modal
  document.getElementById("techstackModal").style.display = "block";
}

function openProject4() {
  const projectOverview =
    "V-blogger offers insightful blogs on the latest trends in technology, lifestyle tips, and startup stories. With a user-friendly interface, readers can easily navigate various topics. The dedicated admin page allows for quick creation and management of new posts, ensuring fresh and relevant content. Stay updated on what matters to you!";

  const keyFeatures = [
    "1. Diverse Content: Blogs on technology, lifestyle, and startups.",
    "2. User-Friendly Interface: Easy navigation for a seamless experience.",
    "3. Admin Page: Quick post creation and management.",
    "4. Regular Updates: Timely and engaging articles.",
    "5. Responsive Design: Optimized for desktop and mobile.",
  ]; // List of key features

  const projectInfo1 = "Tech Stack Used :";
  const techStack1 = ["Next JS", "Tailwind CSS", "MongoDB"];

  // Set the project overview
  document.getElementById("projectOverview").textContent = projectOverview;

  // Populate the key features list
  const keyFeaturesList = document.getElementById("keyFeaturesList");
  keyFeaturesList.innerHTML = ""; // Clear any existing content
  keyFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    keyFeaturesList.appendChild(li);
  });

  // Set the project information
  document.getElementById("projectInfo1").textContent = projectInfo1;

  // Populate the tech stack list
  const techStackList1 = document.getElementById("techStackList1");
  techStackList1.innerHTML = ""; // Clear any existing content
  techStack1.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techStackList1.appendChild(li);
  });

  // Open the modal
  document.getElementById("techstackModal").style.display = "block";
}

function openProject5() {
  const projectOverview =
    "Developed a fully functional eCommerce website named FashionHaven using the MERN stack (MongoDB, Express.js, React, Node.js), providing a seamless online shopping experience for users.";

  const keyFeatures = [
    "1. User Authentication: Secure sign-up and login for user accounts.",
    "2. Order Management: Users can browse and place orders efficiently. ",
    "3. Shopping Cart: Intuitive Add to Cart functionality for item management.",
    "4. Admin Dashboard: Admin page for product management and order monitoring. ",
    "5. Order Tracking: Real-time tracking of purchase statuses. ",
  ]; // List of key features

  const projectInfo1 = "Tech Stack Used :";
  const techStack1 = [
    "React",
    "Tailwind CSS",
    "MERN Stack (MongoDB, Express.js, React, Node.js)",
  ];

  // Set the project overview
  document.getElementById("projectOverview").textContent = projectOverview;

  // Populate the key features list
  const keyFeaturesList = document.getElementById("keyFeaturesList");
  keyFeaturesList.innerHTML = ""; // Clear any existing content
  keyFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    keyFeaturesList.appendChild(li);
  });

  // Set the project information
  document.getElementById("projectInfo1").textContent = projectInfo1;

  // Populate the tech stack list
  const techStackList1 = document.getElementById("techStackList1");
  techStackList1.innerHTML = ""; // Clear any existing content
  techStack1.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techStackList1.appendChild(li);
  });

  // Open the modal
  document.getElementById("techstackModal").style.display = "block";
}

function openProject6() {
  const projectOverview =
    "I built a 3D house animation project using HTML, CSS, and JavaScript.";
  const keyFeatures = [
    "1. Responsive design for various devices",
    "2. Dynamic product listing with real-time updates",
    "3. User-friendly navigation and interface",
    "4. Add to cart functionality with item quantity management",
  ]; // List of key features

  const projectInfo1 = "Tech Stack Used :";
  const techStack1 = ["HTML", "CSS", "JavaScript"];

  // Set the project overview
  document.getElementById("projectOverview").textContent = projectOverview;

  // Populate the key features list
  const keyFeaturesList = document.getElementById("keyFeaturesList");
  keyFeaturesList.innerHTML = ""; // Clear any existing content
  keyFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    keyFeaturesList.appendChild(li);
  });

  // Set the project information
  document.getElementById("projectInfo1").textContent = projectInfo1;

  // Populate the tech stack list
  const techStackList1 = document.getElementById("techStackList1");
  techStackList1.innerHTML = ""; // Clear any existing content
  techStack1.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techStackList1.appendChild(li);
  });

  // Open the modal
  document.getElementById("techstackModal").style.display = "block";
}

function openProject7() {
  const projectOverview =
    "I built a TechPalace ecommerce project using HTML, CSS, and JavaScript.";
  const keyFeatures = [
    "1. Responsive design for various devices",
    "2. Dynamic product listing with real-time updates",
    "3. User-friendly navigation and interface",
    "4. Add to cart functionality with item quantity management",
  ]; // List of key features

  const projectInfo1 = "Tech Stack Used :";
  const techStack1 = ["HTML", "CSS", "JavaScript"];

  // Set the project overview
  document.getElementById("projectOverview").textContent = projectOverview;

  // Populate the key features list
  const keyFeaturesList = document.getElementById("keyFeaturesList");
  keyFeaturesList.innerHTML = ""; // Clear any existing content
  keyFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    keyFeaturesList.appendChild(li);
  });

  // Set the project information
  document.getElementById("projectInfo1").textContent = projectInfo1;

  // Populate the tech stack list
  const techStackList1 = document.getElementById("techStackList1");
  techStackList1.innerHTML = ""; // Clear any existing content
  techStack1.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techStackList1.appendChild(li);
  });

  // Open the modal
  document.getElementById("techstackModal").style.display = "block";
}

function openProject8() {
  const projectOverview =
    "MoneyMap is a powerful personal finance management web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It empowers users to take full control of their financial life by offering intuitive budgeting, tracking, and analysis tools, along with smart automation for recurring payments and reminders.";

  const keyFeatures = [
    "1. Monthly Budget & Planned Budget: Set your budget for each month and compare it with planned expenses..",
    "2. Auto Recurring Bill Payment & Reminders: Automate your utility bill tracking and get notified before due dates..",
    "3. Product Purchase Log: Store information about your purchases.",
    "4. Monthly & Yearly Reports: Visual dashboards that give a breakdown of your finances over time..",
    "5. Birthday Reminders: Stay informed about upcoming birthdays to plan gifts and expenses accordingly.",
  ]; // List of key features

  const projectInfo1 = "Tech Stack Used :";
  const techStack1 = ["MERN"];

  // Set the project overview
  document.getElementById("projectOverview").textContent = projectOverview;

  // Populate the key features list
  const keyFeaturesList = document.getElementById("keyFeaturesList");
  keyFeaturesList.innerHTML = ""; // Clear any existing content
  keyFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    keyFeaturesList.appendChild(li);
  });

  // Set the project information
  document.getElementById("projectInfo1").textContent = projectInfo1;

  // Populate the tech stack list
  const techStackList1 = document.getElementById("techStackList1");
  techStackList1.innerHTML = ""; // Clear any existing content
  techStack1.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techStackList1.appendChild(li);
  });

  // Open the modal
  document.getElementById("techstackModal").style.display = "block";
}

function closeModal() {
  document.getElementById("techstackModal").style.display = "none";
}

// Modal end

window.onclick = function (event) {
  const modal = document.getElementById("techstackModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

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
