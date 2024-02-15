function navbarToggle() {
    const navbar = document.getElementById("navbar");
    let prevScrollPos = window.pageYOffset;
    window.addEventListener("scroll", function () {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            navbar.classList.remove("navbar-hidden");
        } else {
            navbar.classList.add("navbar-hidden");
        }

        prevScrollPos = currentScrollPos;
    });
}

function displayExperience(jobs) {
    const experienceContainer = document.getElementById("experienceContainer")

    jobs.map(job => {
        const experDetail = document.createElement('div');
        experDetail.classList.add('exper_detail_wrap', 'border');

        const companyName = document.createElement('div');
        const companyLocation = document.createElement('span')
        const linkTag = document.createElement('a')
        linkTag.href = job.link;
        linkTag.target = "_blank";
        companyName.classList.add('expr_job_name');
        linkTag.textContent = job.companyName;
        companyLocation.textContent = " - " + job.location;
        companyName.appendChild(linkTag)
        companyName.appendChild(companyLocation)
        experDetail.appendChild(companyName);

        const jobTitle = document.createElement('div');
        jobTitle.classList.add('expr_job_title');
        jobTitle.textContent = job.jobTitle;
        experDetail.appendChild(jobTitle);

        const companyDescription = document.createElement('div');
        companyDescription.classList.add('expr_job_desc');
        companyDescription.textContent = job.companyDescription;
        experDetail.appendChild(companyDescription);

        const detailsList = document.createElement('ul');
        detailsList.classList.add('expr_job_exp_ul', 'common_list_style_ul');
        job.details.map(detail => {
            const detailItem = document.createElement('li');
            detailItem.classList.add('expr_job_exp_ul_li', 'common_list_style_ul_li');
            detailItem.textContent = detail;
            detailsList.appendChild(detailItem);
        });
        experDetail.appendChild(detailsList);

        experienceContainer?.appendChild(experDetail);
    });
}

function displayAboutSection(about) {
    const aboutContainer = document.getElementById("aboutContainer"),
        aboutLeft = document.createElement('div'),
        aboutRight = document.createElement('div'),
        aboutLeftTop = document.createElement('div'),
        aboutLeftBottom = document.createElement('div'),
        aboutLeftBottomUl = document.createElement('ul'),
        aboutRightImg = document.createElement('img');

    about.map(data => {
        data.description.map((v) => {
            const aboutPara = document.createElement('p');
            aboutPara.textContent = v;
            aboutLeftTop.appendChild(aboutPara)
        })
        data.points.map((v) => {
            const aboutPoints = document.createElement('li');
            aboutPoints.classList.add('code')
            aboutPoints.textContent = v
            aboutLeftBottomUl.appendChild(aboutPoints);
        })
    });
    aboutLeftBottom.appendChild(aboutLeftBottomUl)

    aboutRight.classList.add('about_right_side')
    aboutLeft.classList.add('about_left_side')
    aboutLeftTop.classList.add('content_top')
    aboutLeftBottom.classList.add('content_bottom')

    const combinedLeftSide = document.createDocumentFragment();
    combinedLeftSide.appendChild(aboutLeftTop)
    combinedLeftSide.appendChild(aboutLeftBottom)
    aboutLeft.appendChild(combinedLeftSide);

    aboutRight.appendChild(aboutRightImg)
    aboutRightImg.src = "images/Niraj_cas_pic.jpg"
    aboutRightImg.alt = "Niraj's Image"

    const combinedDiv = document.createDocumentFragment();
    combinedDiv.append(aboutLeft)
    combinedDiv.append(aboutRight)
    aboutContainer.appendChild(combinedDiv);
}

function displayTechStack(images) {
    const techStackContainer = document.getElementById("techStackList");
    const imageListDiv = document.createElement('div');
    imageListDiv.classList.add('exper_techStack_list')
    images.map(i => {
        const imageTag = document.createElement('img');
        imageTag.src = i.src;
        imageTag.title = i.title;
        imageListDiv.appendChild(imageTag)
    })
    techStackContainer.appendChild(imageListDiv)
}

function displaySocialMedia(list) {
    const socialMediaContainer = document.getElementById("social_media_wrap");
    socialMediaContainer.classList.add('social_media_wrap')
    const socialMediaList = document.createElement('ul')
    list.map((data) => {
        const listItem = document.createElement('li');
        listItem.classList.add('border')
        const anchorItem = document.createElement('a');
        const iconItem = document.createElement('i');
        iconItem.classList.add('h3', 'fab', data.icon)
        anchorItem.href = data.href;
        anchorItem.target = "_blank";
        anchorItem.appendChild(iconItem);
        listItem.appendChild(anchorItem);
        socialMediaList.appendChild(listItem)
    })
    socialMediaContainer.appendChild(socialMediaList);
}

function globalGradientBg() {
    const body = document.body;
    const fsDiv = document.createElement('div');
    fsDiv.classList.add('pos-relative')
    const radGrdDiv = document.createElement('div');
    radGrdDiv.id = 'gradient_bg_screen';
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        const gradientValue = `radial-gradient(800px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 50%)`;
        radGrdDiv.style.background = gradientValue
    });
    fsDiv.appendChild(radGrdDiv);
    return body.appendChild(fsDiv)
}

const aboutSection = [
    {
        description: [
            "Hello! I am Niraj and I enjoy creating things that live on the internet. My interest in software development started back in 2017 when I decided to try editing custom web pages — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
            "Fast-forward to today, and I've had the privilege of working at an Ed_Tech company, a start-up and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences on my personal projects for a variety of clients.",
            "Here are a few technologies I've been working with recently & my interests"
        ],
        points: ["Javascript", "Web Applications", "Mobile Applications", "Backend", "Cybersecurity", "Networking"]
    }
]

const experience = [
    {
        companyName: 'Expertrons',
        location: 'Mumbai, MH, India',
        jobTitle: 'Software Developer',
        link: "https://www.expertrons.com/",
        companyDescription: 'Expertrons is the world\'s largest AI Videobot Technology platform, offering advanced communication, hiring, and placement solutions to businesses and educational institutions, along with edtech and career guidance services for individuals.',
        details: [
            "Optimized API performance by strategically modifying data retrieval processes, resulting in a significant reduction in response time.",
            "Developed revenue-generating features that drove results and enhanced the overall functionality of the web application.",
            "Designed and implemented a comprehensive Admin panel for efficient CRUD operations, leveraging strong backend skills to create well-structured schemas and APIs.",
            "Recognized as a Q1 Star Performer"
        ]
    },
    {
        companyName: 'Legends',
        location: 'Toronto, ON, Canada',
        jobTitle: 'POS Supervisor',
        link: "https://www.legends.net/",
        companyDescription: 'Legends is a global premium experiences company that specializes in delivering holistic solutions for sports and entertainment organizations and venues',
        details: [
            "Managing POS devices at stalls and vendors.",
            "Troubleshooting technical glitches on the POS systems.",
            "Extracting payment and sales information at the end of each event.",
            "Concluding the final sale and tipping out the vendors."
        ]
    },
    {
        companyName: 'Camp K12',
        location: 'Mumbai, MH, India',
        jobTitle: 'Video Editing Tutor Intern',
        link: "https://campk12.com/us",
        companyDescription: 'Mumbai-based JBCN Education has been a pioneering organization in the field of education for over 3 decades',
        details: [
            "Taught fundamentals of VFX/SFX to the pioneers of grade 11 and prepared them for the video presentation for their annual event.",
            "Used advanced software like Adobe Premiere Pro & Adobe After Effects for video editing and rendering.",
            "Utilized a DSLR camera and provided instruction on capturing high-quality video."
        ]
    }
];

const teckStackIcons = [
    { title: "HTML", src: "images/HTML.svg" },
    { title: "CSS", src: "images/CSS.svg" },
    { title: "JavaScript", src: "images/JavaScript.svg" },
    { title: "Sass", src: "images/Sass.svg" },
    { title: "MongoDB", src: "images/MongoDB.svg" },
    { title: "ExpressJS-Dark", src: "images/ExpressJS-Dark.svg" },
    { title: "React-Dark", src: "images/React-Dark.svg" },
    { title: "NodeJS-Dark", src: "images/NodeJS-Dark.svg" },
    { title: "Git", src: "images/Git.svg" },
    { title: "Github-Dark", src: "images/Github-Dark.svg" },
    { title: "VSCode-Dark", src: "images/VSCode-Dark.svg" },
    { title: "Postman", src: "images/Postman.svg" },
    { title: "Kafka", src: "images/Kafka.svg" },
    { title: "GraphQL-Dark", src: "images/GraphQL-Dark.svg" },
    { title: "Linux-Dark", src: "images/Linux-Dark.svg" },
    { title: "Jenkins-Dark", src: "images/Jenkins-Dark.svg" },
    { title: "Heroku", src: "images/Heroku.svg" },
    { title: "R-Dark", src: "images/R-Dark.svg" },
    { title: "Discord", src: "images/Discord.svg" },
    { title: "Premiere", src: "images/Premiere.svg" },
    { title: "Illustrator", src: "images/Illustrator.svg" },
    { title: "XD", src: "images/XD.svg" },
];

const socialMediaHandles = [
    { href: "https://www.instagram.com/niraj.nick/", icon: "fa-instagram" },
    { href: "https://github.com/fsd-niraj", icon: "fa-github" },
    { href: "https://www.linkedin.com/in/nirajp247/", icon: "fa-linkedin" }
];

document.addEventListener('DOMContentLoaded', function () {
    navbarToggle()
    displayExperience(experience);
    displayAboutSection(aboutSection)
    displayTechStack(teckStackIcons)
    displaySocialMedia(socialMediaHandles)
    globalGradientBg()
});