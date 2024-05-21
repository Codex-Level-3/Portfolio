# Portfolio

This portfolio project is a journey of creation and learning, documented through daily logs. It's built using Next.js, incorporating various components like Contact, Footer, Header, Hero, ProjectCard, Projects, and Skills. Each day marks progress, challenges, solutions, and insights gained.

## Daily Logs

### Day 1:

#### Tasks Completed:

- Initialized a Next.js project.
- Started drafting the wireframe for my portfolio.
- Established the foundation for the following components:
  - Contact
  - Footer
  - Header
  - Hero
  - ProjectCard
  - Projects
  - Skills
  - skillList

#### Challenges and Solutions:

The only challenge I encountered was when implementing React-Bootstrap's carousel for my Skills component. It conflicted with the styling of other components. As a solution, I intend to remove it and explore alternative carousel libraries.

#### Next Steps:

- Resolve the conflict with the carousel in the Skills component.
- Develop an About Me section.
- Initiate styling for the components.

### Day 2:

#### Tasks Completed:

- Completed the wireframe for the Portfolio.
- Explored alternative carousel libraries.
- Added images for the Skills component.
- Established the foundation for the About component.

#### Challenges and Solutions:

Implementing a carousel library posed challenges as I encountered several errors during setup. I experimented with different libraries until finding one that suited my needs.

#### Learnings and Insights:

Discovering various carousel libraries introduced me to TypeScript. I aim to revisit these libraries to delve into TypeScript and enhance my understanding.

#### Next Steps:

- Finalize the development of the Projects component.
- Define a theme and styling for the website.
- Implement functionality for the Contact component.

## Wireframe Screenshot

![alt text](image.png)

### Day 3:

#### Tasks Completed:

- Finished the development of the Projects component
- Utilized Tailwind CSS to style the ProjectCard component for a consistent and responsive design.
- Created a Projects Page for Portfolio:
  - Developed a dedicated Projects page within the portfolio to showcase various projects.
- Added Ecommerce, Breadcrumb, and GitHubSvg Components to Projects.

#### Challenges and Solutions:

I encountered difficulties while integrating the Contact component with Netlify for form submissions. Despite following the Netlify documentation, I was unable to resolve the issue. To address this, I plan to revisit the documentation, seek community support, and explore alternative solutions.

#### Learnings and Insights:

When troubleshooting deployment issues I recognized the need for better debugging practices and thorough documentation review when facing deployment challenges.

#### Next Steps:

- Resolve the Contact Component Issue:
  - Continue to investigate the integration problem with Netlify and implement a solution.
- Finish the development of the projects page and apply final styling to ensure it matches the overall portfolio design.
- Review and refine other components as needed, ensuring optimal performance and aesthetics.

### Days 4 + 5:

#### Tasks Completed:

- Installed and applied Framer Motion for enhanced animations and transitions.
- Implemented email sending functionality for contact form using using Nodemailer.
- Fixed link routing issues for the Header component and projects page, ensuring smooth navigation throughout the application.
- Checked each component for any missed errors.

#### Learnings and Insights:

Through this coding process, I've gained valuable insights into handling form submissions and implementing email functionality using Node.js. In `route.js`, I learned how to extract data from incoming POST requests and configure Nodemailer to send emails through Gmail. Then, in `Contact.jsx`, I built a user-friendly contact form component using React, allowing visitors to input their name, email, and message. Upon form submission, the data is sent to the server, and upon success, a confirmation message is logged. This experience has deepened my understanding of server-side integration in React applications and honed my skills in managing form submissions, essential for creating dynamic and interactive web experiences.

## Projects

These are links to the following projects showcased in the portfolio.

### Ecommerce

https://github.com/Laqwanda-Nettles/Bootstrap-Project

### Blog

https://github.com/Laqwanda-Nettles/Personal-Webpage

### Recipe App

https://github.com/Laqwanda-Nettles/Recipe-App

### Community Marketplace

https://github.com/Codex-Level-3/community-marketplace

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
