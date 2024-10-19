# Portfolio Website

This is a personal portfolio website built using ReactJS and Tailwind CSS. It showcases my projects, skills, experience, and provides information on how to contact me.

## Features

- **Home Page:** Introduction with a brief bio and links to social media.
- **About Page:** Detailed information about me, my skills, and experience.
- **Projects Page:** Showcases my projects with descriptions, technologies used, and live demo links.
- **Contact Page:** Provides a form for visitors to contact me and links to social media profiles.

## Tech Stack

- **Frontend:** ReactJS
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** React Icons

### Folder Structure

├── public
│ └── index.html
├── src
│ ├── assets
│ ├── styles
│ ├── App.js
│ └── index.js
└── README.md

## Code Sample

You can add code snippets to your README file like this:

````javascript
<div id="techstackModal" class="project-modal">
        <div class="project-overlay">
                  <div class="project-modal-content">
                  <span class="project-close" onclick="closeModal()">&times;</span> -->

                    <!-- Project Overview Section -->
                    <h3 id="projectOverviewTitle" class="project-overview-title">Project Overview:</h3>
                    <p id="projectOverview" class="project-overview"></p>

                    <!-- Key Features Section -->
                    <h3 id="keyFeaturesTitle" class="key-features-title">Key Features :</h3>
                    <ul id="keyFeaturesList" class="key-features-list"></ul>

                    <!-- Info Title Section -->
                    <h2 id="projectInfo1" class="project-info"></h2>
                    <p id="projectDescription1" class="project-description"></p>
                    <ol id="techStackList1" class="tech-stack-list"></ol>

                    <h2 id="projectInfo2" class="project-info"></h2>
                    <p id="projectDescription2" class="project-description"></p>
                    <ol id="techStackList2" class="tech-stack-list"></ol>

                    <h2 id="projectInfo3" class="project-info"></h2>
                    <p id="projectDescription3" class="project-description"></p>
                    <ol id="techStackList3" class="tech-stack-list"></ol>
                    </div>
                    </div>
</div>```

// This api start

// function openProject6() {
//   openModal(
//     "I built a 3D house animation project using HTML, CSS, and JavaScript.",
//     ["Key feature", "", ""],
//     ["", "Tech Stack Used :", ""],
//     [[], ["HTML", "CSS", "JavaScript"], []]
//   );
// }

// api end


// This is modal of previous version
// Start the modal

function openModal(overview, descriptions, infoTitles, techStacks) {
  const maxLength = Math.max(
    descriptions.length,
    infoTitles.length,
    techStacks.length
  );

  // Set project overview
  const overviewElement = document.getElementById("projectOverview");
  overviewElement.innerText = overview || ""; // Clear if empty

  for (let i = 1; i <= maxLength; i++) {
    const descriptionElement = document.getElementById(
      `projectDescription${i}`
    );
    const infoElement = document.getElementById(`projectInfo${i}`);
    const techStackList = document.getElementById(`techStackList${i}`);

    // Ensure the elements exist before attempting to update them
    if (descriptionElement) {
      descriptionElement.innerText = descriptions[i - 1] || ""; // Clear if empty
    }

    if (infoElement) {
      infoElement.innerText = infoTitles[i - 1] || ""; // Clear if empty
    }

    // Clear and update tech stack list
    if (techStackList) {
      techStackList.innerHTML = "";

      if (techStacks[i - 1] && techStacks[i - 1].length > 0) {
        techStacks[i - 1].forEach((stackItem) => {
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
// end modal
````
