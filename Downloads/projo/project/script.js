// Course data
const mainCourses = [
    {
        name: "Artificial Intelligence & Data Science",
        courses: [
            "Python for Data Science",
            "Machine Learning & Deep Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Big Data Analytics with Python",
            "AI Model Development & Deployment"
        ],
        image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        shortDescription: "AI, ML, and Data Science technologies"
    },
    {
        name: "Cloud & DevOps",
        courses: [
            "AWS Cloud Architecture",
            "Docker & Kubernetes",
            "CI/CD Pipeline Implementation",
            "Infrastructure as Code (Terraform)",
            "Cloud Security & Compliance",
            "Microservices Architecture"
        ],
        image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
        shortDescription: "Cloud computing and automation"
    },
    {
        name: "Microsoft Technologies",
        courses: [
            ".NET Core & C#",
            "ASP.NET MVC",
            "Azure Cloud Services",
            "Microsoft Power Platform",
            "SharePoint Development",
            "Windows App Development"
        ],
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
        shortDescription: "Microsoft development ecosystem"
    },
    {
        name: "Full Stack Java",
        courses: [
            "Core Java & Advanced Java",
            "Spring Framework & Spring Boot",
            "Microservices Architecture",
            "Hibernate ORM",
            "RESTful Web Services",
            "Angular/React with Java Backend"
        ],
        image: "https://cdn.worldvectorlogo.com/logos/java.svg",
        shortDescription: "Enterprise Java development"
    },
    {
        name: "Mobile Development",
        courses: [
            "iOS App Development",
            "Android App Development",
            "Kotlin & Swift Programming",
            "Flutter Cross-platform Development",
            "Mobile UI/UX Design",
            "App Testing & Deployment"
        ],
        image: "https://th.bing.com/th/id/OIP.8Y60ZYXyqp10pk-3EoRDrAHaHa?rs=1&pid=ImgDetMain",
        shortDescription: "Mobile app development"
    }
];

const otherCourses = [
    {
        name: "Business Analysis",
        courses: [
            "Requirements Engineering",
            "Business Process Modeling",
            "Agile BA Practices",
            "Stakeholder Management",
            "BA Tools & Techniques"
        ],
        image: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
        shortDescription: "Business process and analysis"
    },
    {
        name: "Database Administration",
        courses: [
            "Oracle Database Administration",
            "Performance Tuning",
            "Backup & Recovery",
            "High Availability Solutions",
            "Database Security"
        ],
        image: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
        shortDescription: "Database administration"
    },
    {
        name: "Big Data",
        courses: [
            "Hadoop Ecosystem",
            "Apache Spark",
            "NoSQL Databases",
            "Data Warehousing",
            "ETL Processing"
        ],
        image: "https://cdn.worldvectorlogo.com/logos/hadoop.svg",
        shortDescription: "Big data processing"
    },
    {
        name: "SAP",
        courses: [
            "SAP FICO",
            "SAP MM",
            "SAP SD",
            "SAP ABAP",
            "SAP Basis"
        ],
        image: "https://cdn.worldvectorlogo.com/logos/sap-2.svg",
        shortDescription: "Enterprise resource planning"
    },
    {
        name: "Software Testing",
        courses: [
            "Manual Testing",
            "Automation Testing (Selenium)",
            "Performance Testing",
            "API Testing",
            "Mobile Testing"
        ],
        image: "https://static.vecteezy.com/system/resources/previews/025/365/917/non_2x/check-icon-inspection-illustration-symbol-testing-symbol-vector.jpg",
        shortDescription: "Quality assurance and testing"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialize Why Choose Us section
    initializeWhyChooseUs();
    
    // Initialize course list
    displayCourses(mainCourses);
});

// Why Choose Us section
function initializeWhyChooseUs() {
    const items = [
        "21+ Years of Excellence",
        "Expert Trainers",
        "Flexible Learning Options",
        "Comprehensive Course Catalog",
        "Industry-Relevant Curriculum",
        "Hands-on Training"
    ];
    
    const container = document.getElementById('whyChooseUs');
    items.forEach(item => {
        container.innerHTML += `
            <div class="flex items-center gap-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-green-500 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span class="text-base md:text-lg">${item}</span>
            </div>
        `;
    });
}

// Course display functions
let showingOtherCourses = false;

function displayCourses(courses) {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';
    
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'bg-white rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer overflow-hidden';
        courseElement.onclick = () => showCourseModal(course);
        
        courseElement.innerHTML = `
            <div class="h-48 bg-gray-50 flex items-center justify-center p-6">
                <img 
                    src="${course.image}" 
                    alt="${course.name}"
                    class="max-h-full max-w-full w-auto h-auto object-contain"
                    style="max-width: 80%; max-height: 80%;"
                />
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">${course.name}</h3>
                <p class="text-gray-600 text-sm">${course.shortDescription}</p>
            </div>
        `;
        
        courseList.appendChild(courseElement);
    });
}

function toggleCourses() {
    showingOtherCourses = !showingOtherCourses;
    const toggleBtn = document.getElementById('toggleCoursesBtn');
    toggleBtn.textContent = showingOtherCourses ? 'View Main Courses' : 'View Other Courses';
    displayCourses(showingOtherCourses ? otherCourses : mainCourses);
}

// Course modal
function showCourseModal(course) {
    const modal = document.getElementById('courseModal');
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-2xl w-full">
            <div class="relative p-6 flex items-center justify-center bg-gray-50 rounded-t-lg">
                <img 
                    src="${course.image}" 
                    alt="${course.name}"
                    class="max-h-24 w-auto object-contain"
                    style="max-width: 80%;"
                />
                <button 
                    onclick="closeCourseModal()"
                    class="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="p-6">
                <h3 class="text-2xl font-bold mb-4">${course.name}</h3>
                <h4 class="text-lg font-semibold mb-2">Available Courses:</h4>
                <ul class="list-disc pl-5 mb-6 space-y-1">
                    ${course.courses.map(item => `<li class="text-gray-600">${item}</li>`).join('')}
                </ul>
                <div class="flex justify-end">
                    <button
                        onclick="bookCourse()"
                        class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Book Course
                    </button>
                </div>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
}

function closeCourseModal() {
    const modal = document.getElementById('courseModal');
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

function bookCourse() {
    closeCourseModal();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const isHidden = mobileMenu.classList.contains('hidden');
    
    if (isHidden) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.add('hidden');
}

// Navigation functions
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToCourses() {
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

window.bookCourse = bookCourse;
window.closeCourseModal = closeCourseModal;
window.toggleCourses = toggleCourses;
window.toggleMobileMenu = toggleMobileMenu; 
window.closeMobileMenu = closeMobileMenu;


export {};