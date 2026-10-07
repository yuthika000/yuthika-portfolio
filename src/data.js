// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'M.S. Yuthika',
  role: 'Full-stack developer',
  location: 'Neyveli, Tamil Nadu',
  email: 'msyuthika0@gmail.com',
  phone: '+91 81484 79242',
  linkedin: 'https://linkedin.com/in/m-s-yuthika-72a734357',
  github: 'https://github.com/yuthika000',
  leetcode: 'https://leetcode.com/u/yuthika2005',
  gfg: 'https://geeksforgeeks.org/profile/msyuthjwqi',
  // Put your resume PDF in /public and keep this path, or set to null to hide the button.
  resume: '/MS_Yuthika_Resume.pdf',
  intro:
    "I'm a Computer Science student at Government College of Engineering, Erode, and a full-stack developer who loves building software that people actually use. During my internships at NLC India and Jayapriya Group, I built applications that are now running in real workplaces.",
  about:
    'I’m a Computer Science student at Government College of Engineering, Erode, with a strong foundation in data structures and algorithms. I like the whole path from problem to production: designing the data model, writing the backend, building the interface, then containerising it with Docker and shipping it to Render or Vercel.',
}

export const stats = [
  { value: '2', label: 'software internships' },
  { value: '250+', label: 'DSA problems solved' },
  { value: '8.01', label: 'CGPA' },
]

// "status" drives the badge colour: live | delivered | built
export const experience = [
  {
    title: 'Software Development Intern',
    org: 'Jayapriya Group of Companies',
    place: 'Neyveli',
    period: 'Jun 2026',
    status: 'live',
    statusText: 'Running on production server',
    points: [
      'Redesigned the UI of an existing company web page using HTML and CSS.',
      'Built an Employee Directory web application with PHP and MS SQL Server.',
      'Developed an Android Leave Management System using Java, XML and SQLite.',
      'Deployed and tested work directly on the organisation’s live production server.',
    ],
    tech: ['PHP', 'MS SQL Server', 'Android', 'Java', 'SQLite', 'HTML', 'CSS'],
  },
  {
    title: 'Software Development Intern',
    org: 'NLC India Limited',
    place: 'Neyveli',
    period: 'Apr – May 2026',
    status: 'delivered',
    statusText: 'In active use by the department',
    points: [
      'Built the Employee Promotion Management System, a web application for managing employee promotions.',
      'Delivered the completed system to the department, where it is currently in active use.',
    ],
    tech: ['PHP', 'Oracle Database', 'JavaScript', 'HTML', 'CSS'],
  },
]

export const projects = [
  {
    name: 'Employee Promotion Management System',
    kind: 'Full-stack web application',
    date: 'Apr 2026',
    summary:
      'A comprehensive web-based application for managing employee promotions, tracking career progression, and maintaining accurate employee data.',
    flow: null,
    points: [
      'Migrated and synchronized employee records between source and master tables, identifying and resolving duplicates.',
      'Validated department, designation, and grade information with lookup tables to identify data inconsistencies.',
      'Implemented secure authentication using CPF_NO and generated detailed reports on employee data.',
    ],
    tech: ['PHP', 'Oracle Database', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/yuthika000/Employee-promotion-management-system',
    live: null,
  },
  {
    name: 'Event Tracking System',
    kind: 'Full-stack web application',
    date: 'Jan 2026',
    summary:
      'A Leave/OD request system for colleges where each request moves through a multi-level approval chain, with students able to see exactly where it stands.',
    flow: ['Student', 'Advisor', 'HOD', 'Principal'],
    points: [
      'Automated email notifications and real-time request-status tracking.',
      'Student dashboard with a pie-chart breakdown and a leave-limit bar (15-day cap).',
      'Frontend and backend Dockerized with Docker Compose; deployed on Render and Vercel.',
    ],
    tech: ['Spring Boot', 'React', 'Docker', 'Render', 'Vercel'],
    github: 'https://github.com/yuthika000/Event-tracking-system',
    live: null,
  },
  {
    name: 'Online Car Marketplace',
    kind: 'Full-stack web application',
    date: 'Dec 2025',
    summary:
      'A marketplace where buyers browse car listings and talk to sellers directly in real-time chat.',
    flow: null,
    points: [
      'React frontend with REST services built in Spring Boot.',
      'OAuth-based authentication for secure sign-in.',
      'Real-time buyer–seller chat with Socket.IO.',
      'MongoDB for flexible storage of dynamic car listings.',
    ],
    tech: ['React', 'Spring Boot', 'MongoDB', 'OAuth', 'Socket.IO'],
    github: 'https://github.com/Indhumathi1505/Car-app',
    live: null,
  },
]

export const skills = [
  { group: 'Languages', items: ['Java', 'JavaScript', 'HTML', 'CSS'] },
  { group: 'Frameworks', items: ['React', 'Spring Boot'] },
  { group: 'Databases', items: ['MySQL', 'MongoDB'] },
  { group: 'Tools', items: ['Git & GitHub', 'Docker', 'Postman'] },
  { group: 'Deployment', items: ['Vercel', 'Render'] },
  { group: 'Coursework', items: ['DSA', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'] },
]

export const education = {
  degree: 'B.E. Computer Science and Engineering',
  school: 'Government College of Engineering, Erode',
  period: '2023 – 2027',
  score: 'CGPA 8.01',
}

export const certifications = [
  { name: 'Programming in Java', issuer: 'NPTEL', year: '2025', note: 'Scored 91%', pdf: '/Programming In Java.pdf' },
  { name: 'Introduction to Front-End Development', issuer: 'Meta, Coursera', year: '2024', note: null, pdf: '/Introduction to Front-End Development.pdf' },
]
