import { CheckSquare, MessageCircle } from "react-feather";

export const accordionData = [
  {
    text: "Click the accordions below to expand/collapse the accordion content. Use the ",
    code: ".accordion",
  },
];

export const simpleAccordion2 = <p> <strong> Search engine optimization: </strong> Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it. <br /> <br /> <strong> Mobile responsiveness:</strong> Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease. <br /> <br /> <strong> Improved sales:</strong>Increasing the number of items sold or acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales. </p>;
export const simpleAccordion3 = <><p> The web design process allows designers to adjust to any preferences and provide effective solutions. There are many standard components of every web design, including: </p><ul className='d-flex flex-column gap-2 accordions-content'> <li>--&gt; Layout</li><li>--&gt; Images</li><li>--&gt; Visual hierarchy</li><li>--&gt; Color scheme</li><li>--&gt; Typography</li><li>--&gt; Navigation</li><li>--&gt; Readability</li><li>--&gt; Content</li></ul></>

export const accordionList = [
  {
    id: "2",
    icon: true,
    accordionHeaderClass: "bg-light-primary",
    accordionHeading: "What is the use of web design?",
    spanClass: "txt-primary",
    bodyText: simpleAccordion2
  },
  {
    id: "3",
    icon: true,
    accordionHeaderClass: "bg-light-primary",
    accordionHeading: "What are the elements of web design?",
    spanClass: "txt-primary",
    bodyText: simpleAccordion3
  },
];

export const flushData = [
  {
    text: "Add ",
    code: ".accordion-flush",
  },
  {
    text: " to remove the default",
    code: " background-color",
  },
  {
    text: " , some borders, and some rounded corners to render accordions edge-to-edge with their parent container.",
  },
];

export const flushAccordion2 = <ul className="d-flex flex-column gap-2 accordions-content">
  <li>First and foremost, Bootstrap is easy to learn. Due to its popularity, plenty of tutorials and online forums are available to help you get started.</li>
  <li>One of the reasons why Bootstrap is so popular among web developers and web designers is that it has a simple file structure. Its files are compiled for easy access, and it only requires basic knowledge of HTML, CSS, and JS to modify them.</li>
  <li>You can also use themes for popular content management systems as learning tools. For example, most WordPress themes were developed using Bootstrap, which any beginner web developer can access. </li>
  <li>To increase the site's page load time, Bootstrap minifies the CSS and JavaScript files. Additionally, Bootstrap maintains consistency across the syntax between websites and developers, which is ideal for team-based projects.</li>
</ul>
export const flushAccordion3 = <ul className="d-flex flex-column gap-2 accordions-content">
  <li>Bootstrap handles the image display and responsiveness with its predefined HTML and CSS rules.</li>
  <li>Adding the .img-responsive class will automatically resize images based on the users' screen size. This will benefit your website’s performance, as reducing image sizes is part of the site optimization process.</li>
  <li>Bootstrap also provides additional classes like .img-circle and .img-rounded, which help to modify the images' shape.</li>
</ul>


export const flushList = [
  {
    id: "2",
    accordionHeaderClass: "bg-light-success",
    accordionHeading: "What is the use of web design?",
    spanClass: "txt-success",
    bodyText: flushAccordion2
  },
  {
    id: "3",
    accordionHeaderClass: "bg-light-success",
    accordionHeading: "Bootstrap Image System",
    spanClass: "txt-success",
    bodyText: flushAccordion3
  },
];

export const multipleData = [
  {
    text: " A   ",
    code: "<button>",
  },
  {
    text: " or",
    code: "<a>",
  },
  {
    text: " can show and hide multiple elements by referencing them with a selector in its href or data-bs-target attribute.",
  },
];

export const accordionIconData = [
  {
    text: "Use the ",
    code: ".accordion ",
  },
  {
    text: "& ",
    code: "feather icons",
  },
  {
    text: " through change look icons accordion.",
  },
];

export const iconAccordion2 = <ul className="d-flex flex-column gap-2 accordions-content">
  <li>You get the same features in Chat and Chat in Gmail, but the integrated Gmail experience provides a central location to communicate with friends, family, or coworkers between emails.</li>
  <li> <strong>Chat:</strong> Use when you prefer a dedicated chat experience and don't mind switching between different apps.</li>
</ul>
export const iconAccordion3 = <ul className="d-flex flex-column gap-2 accordions-content">
  <li>1) Decide on the indentation and keep it that way.</li>
  <li>2) Make comments.</li>
  <li>3) Consistent name scheme.</li>
  <li>4) Don't repeat code.</li>
  <li>5) Avoid writing long code LInes.</li>
  <li>6) Break down a big task into smaller chunks.</li>
  <li>7) Organize your program into smaller files.</li>
  <li>8) Write clever code that is also readable.</li>
</ul>


export const accordionIconList = [
  {
    id: "2",
    iconWithTitle: <MessageCircle className="svg-wrapper me-2 txt-secondary" />,
    icon: true,
    accordionHeaderClass: "gap-2 bg-light-secondary txt-info",
    accordionHeading: "What is the use of web design?",
    spanClass: "txt-secondary",
    bodyText: iconAccordion2
  },
  {
    id: "3",
    iconWithTitle: <CheckSquare className="svg-wrapper me-2 txt-secondary" />,
    icon: true,
    accordionHeaderClass: "gap-2 bg-light-secondary txt-secondary",
    accordionHeading: "What are the elements of web design?",
    spanClass: "txt-secondary",
    bodyText: iconAccordion3
  },
];

export const outlineData = [
  {
    text: "make custom ",
    code: ".accordion-wrapper",
  },
  {
    text: " class use to bring border-left side.",
  },
];

export const outlineList = [
  {
    id: "2",
    icon: true,
    accordionItemClass: "accordion-wrapper",
    accordionHeaderClass: "bg-light-primary",
    accordionHeading: "What is the use of web design?",
    spanClass: "txt-primary",
    bodyText: simpleAccordion2
  },
  {
    id: "3",
    icon: true,
    accordionItemClass: "accordion-wrapper",
    accordionHeaderClass: "bg-light-primary",
    accordionHeading: "What are the elements of web design?",
    spanClass: "txt-primary",
    bodyText: simpleAccordion3
  },
];

export const accordionHorizontal = [
  {
    text: "Add the ",
    code: ".collapse-horizontal",
  },
  {
    text: " modifier class to transition the width instead of height and set a width on the immediate child element.",
  },
];

//Collapse Accordions
export const accordionCollapse = [
  {
    text: "you can also use a link with the href attribute",
    code: "(and a role='button').",
  },
  {
    text: "In both cases, the ",
    code: "data-bs-toggle='collapse'",
  },
  {
    text: "is required.",
  },
];