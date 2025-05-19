// Select DOM elements for each section
const educationForm = document.getElementById('educationForm');
const experienceForm = document.getElementById('experienceForm');
const skillForm = document.getElementById('skillForm');
const projectForm = document.getElementById('projectForm');

const educationList = document.getElementById('educationList');
const experienceList = document.getElementById('experienceList');
const skillList = document.getElementById('skillList');
const projectList = document.getElementById('projectList');

// Form containers for adding data
const educationFormContainer = document.getElementById('educationFormContainer');
const experienceFormContainer = document.getElementById('experienceFormContainer');
const skillFormContainer = document.getElementById('skillFormContainer');
const projectFormContainer = document.getElementById('projectFormContainer');

// Popup and close button
const successPopup = document.getElementById('successPopup');
const closePopupBtn = document.getElementById('closePopupBtn');
const successMessage = document.getElementById('successMessage');

// Buttons to show form
document.getElementById('addEducationBtn').addEventListener('click', () => {
    educationFormContainer.style.display = 'block';
});
document.getElementById('addExperienceBtn').addEventListener('click', () => {
    experienceFormContainer.style.display = 'block';
});
document.getElementById('addSkillBtn').addEventListener('click', () => {
    skillFormContainer.style.display = 'block';
});
document.getElementById('addProjectBtn').addEventListener('click', () => {
    projectFormContainer.style.display = 'block';
});

// Show Data Buttons
// Show Data Button for Education
document.getElementById('showEducationDataBtn').addEventListener('click', async () => {
    const response = await fetch('http://localhost:5000/api/education');
    const data = await response.json();

    educationList.innerHTML = '';  // Clear existing data

    if (data.length > 0) {
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.school} - ${item.degree} (${item.year})`;
            educationList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No data available';
        educationList.appendChild(li);
    }
});

// Show Data Button for Experience
document.getElementById('showExperienceDataBtn').addEventListener('click', async () => {
    const response = await fetch('http://localhost:5000/api/experience');
    const data = await response.json();

    experienceList.innerHTML = '';

    if (data.length > 0) {
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.company} - ${item.role} (${item.duration})`;
            experienceList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No data available';
        experienceList.appendChild(li);
    }
});

// Show Data Button for Skills
document.getElementById('showSkillDataBtn').addEventListener('click', async () => {
    const response = await fetch('http://localhost:5000/api/skill');
    const data = await response.json();

    skillList.innerHTML = '';

    if (data.length > 0) {
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.level}`;
            skillList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No data available';
        skillList.appendChild(li);
    }
});

// Show Data Button for Projects
document.getElementById('showProjectDataBtn').addEventListener('click', async () => {
    const response = await fetch('http://localhost:5000/api/project');
    const data = await response.json();

    projectList.innerHTML = '';

    if (data.length > 0) {
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.projectName} - ${item.projectDescription}`;
            projectList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No data available';
        projectList.appendChild(li);
    }
});

// Add Education
educationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const year = document.getElementById('year').value;

    const response = await fetch('http://localhost:5000/api/education', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ school, degree, year }),
    });

    const data = await response.json();

    // Dynamically add the new education item to the list
    const li = document.createElement('li');
    li.textContent = `${data.data.school} - ${data.data.degree} (${data.data.year})`;
    educationList.appendChild(li);

    // Hide the form after submission
    educationFormContainer.style.display = 'none';
    educationForm.reset();  // Clear the form inputs

    // Show success popup
    successMessage.textContent = "Education data submitted successfully!";
    successPopup.style.display = 'flex';
});

// Add Experience
experienceForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const company = document.getElementById('company').value;
    const role = document.getElementById('role').value;
    const duration = document.getElementById('duration').value;

    const response = await fetch('http://localhost:5000/api/experience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ company, role, duration }),
    });

    const data = await response.json();

    // Dynamically add the new experience item to the list
    const li = document.createElement('li');
    li.textContent = `${data.data.company} - ${data.data.role} (${data.data.duration})`;
    experienceList.appendChild(li);

    // Hide the form after submission
    experienceFormContainer.style.display = 'none';
    experienceForm.reset();  // Clear the form inputs

    // Show success popup
    successMessage.textContent = "Experience data submitted successfully!";
    successPopup.style.display = 'flex';
});

// Add Skill
skillForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const level = document.getElementById('level').value;

    const response = await fetch('http://localhost:5000/api/skill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, level }),
    });

    const data = await response.json();

    // Dynamically add the new skill item to the list
    const li = document.createElement('li');
    li.textContent = `${data.data.name} - ${data.data.level}`;
    skillList.appendChild(li);

    // Hide the form after submission
    skillFormContainer.style.display = 'none';
    skillForm.reset();  // Clear the form inputs

    // Show success popup
    successMessage.textContent = "Skill data submitted successfully!";
    successPopup.style.display = 'flex';
});

// Add Project
projectForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const projectName = document.getElementById('projectName').value;
    const projectDescription = document.getElementById('projectDescription').value;

    const response = await fetch('http://localhost:5000/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectName, projectDescription }),
    });

    const data = await response.json();

    // Dynamically add the new project item to the list
    const li = document.createElement('li');
    li.textContent = `${data.data.projectName} - ${data.data.projectDescription}`;
    projectList.appendChild(li);

    // Hide the form after submission
    projectFormContainer.style.display = 'none';
    projectForm.reset();  // Clear the form inputs

    // Show success popup
    successMessage.textContent = "Project data submitted successfully!";
    successPopup.style.display = 'flex';
});

// Close the popup when clicking the close button
closePopupBtn.addEventListener('click', () => {
    successPopup.style.display = 'none';
});

// Initially load all data
fetchEducation();
fetchExperience();
fetchSkills();
fetchProjects();

// Fetch and display all Education
async function fetchEducation() {
    const response = await fetch('http://localhost:5000/api/education');
    const data = await response.json();

    educationList.innerHTML = ''; // Clear the list
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.school} - ${item.degree} (${item.year})`;
        educationList.appendChild(li);
    });
}

// Fetch and display all Experience
async function fetchExperience() {
    const response = await fetch('http://localhost:5000/api/experience');
    const data = await response.json();

    experienceList.innerHTML = ''; // Clear the list
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.company} - ${item.role} (${item.duration})`;
        experienceList.appendChild(li);
    });
}

// Fetch and display all Skills
async function fetchSkills() {
    const response = await fetch('http://localhost:5000/api/skill');
    const data = await response.json();

    skillList.innerHTML = ''; // Clear the list
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.level}`;
        skillList.appendChild(li);
    });
}

// Fetch and display all Projects
async function fetchProjects() {
    const response = await fetch('http://localhost:5000/api/project');
    const data = await response.json();

    projectList.innerHTML = ''; // Clear the list
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.projectName} - ${item.projectDescription}`;
        projectList.appendChild(li);
    });
}

// Theme toggle button
const themeToggleBtn = document.getElementById('themeToggle');

// Check if there's a saved theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleBtn.textContent = "🌞";  // Change icon to sun for dark theme
} else {
    document.body.classList.remove('dark-theme');
    themeToggleBtn.textContent = "🌙";  // Keep moon icon for light theme
}

// Toggle dark and light theme
themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        themeToggleBtn.textContent = "🌙";  // Moon icon for light theme
        localStorage.setItem('theme', 'light');  // Save preference in localStorage
    } else {
        document.body.classList.add('dark-theme');
        themeToggleBtn.textContent = "🌞";  // Sun icon for dark theme
        localStorage.setItem('theme', 'dark');  // Save preference in localStorage
    }
});
