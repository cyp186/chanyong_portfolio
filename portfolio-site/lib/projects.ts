export type Screenshot = {
  file: string;
  caption: string;
};

export type ScreenshotGroup = {
  title: string;
  note: string;
  shots: Screenshot[];
};

export type WalkthroughTable = {
  headers: string[];
  rows: string[][];
};

export type WalkthroughSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: WalkthroughTable;
  afterTable?: string[];
  flow?: string;
  tail?: string[];
  shots?: Screenshot[];
};

export type Walkthrough = {
  title: string;
  intro: string[];
  introShots?: Screenshot[];
  sections: WalkthroughSection[];
  closingTitle?: string;
  closing?: string[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  contribution: string;
  stack: string[];
  href: string;
  accent: "lime" | "violet" | "cyan";
  screenshotGroups?: ScreenshotGroup[];
  walkthrough?: Walkthrough;
};

export const projects: Project[] = [
  {
    slug: "rentmate",
    number: "01",
    title: "RentMate",
    eyebrow: "Property management platform",
    description:
      "A full-stack rental management system that brings maintenance requests, property bookings and tenant communication into one reliable workflow.",
    contribution:
      "Led delivery as Scrum Master, built core React experiences and strengthened the application with automated testing and CI/CD.",
    stack: ["React", "Spring Boot", "Java 21", "Neon", "Docker"],
    href: "https://github.com/cyp186/rentmate_property_management",
    accent: "lime",
    walkthrough: {
      title: "How RentMate Works",
      intro: [
        "RentMate is a full-stack property rental management platform designed to simplify interactions between tenants and property managers. It brings essential rental processes—including maintenance reporting, inspection bookings, and direct communication—into one centralised system.",
      ],
      introShots: [{ file: "Landing Page.png", caption: "Landing page" }],
      sections: [
        {
          title: "1. User Authentication and Role-Based Access",
          paragraphs: [
            "The system begins with a secure login process. Once authenticated, users are directed to an interface based on their assigned role.",
            "Tenants can access features related to their rental experience, such as submitting maintenance requests, arranging property bookings, and communicating with property managers. Property managers receive a management-focused interface where they can review tenant requests, monitor bookings, respond to messages, and update the progress of reported issues.",
            "This separation ensures that each user can only access the information and functionality relevant to their responsibilities.",
          ],
          shots: [{ file: "Sign In.png", caption: "Sign in" }],
        },
        {
          title: "2. Role-Based Dashboards",
          paragraphs: [
            "Once authenticated, each user lands on a dashboard tailored to their role.",
            "Tenants are presented with a dashboard that acts as the central access point for the platform. From here, they can navigate between maintenance requests, bookings, messages, and other property-related information. It gives tenants a clear overview of their recent activity, allowing them to check the progress of existing requests or begin a new action without navigating through multiple disconnected systems.",
            "Property managers receive a management-focused dashboard where they can review tenant requests, monitor bookings, track properties, and update the progress of reported issues. This separation ensures that each user can only access the information and functionality relevant to their responsibilities.",
          ],
          shots: [
            { file: "Landlord Dashboard.png", caption: "Landlord dashboard" },
            { file: "Tenant Dashboard.png", caption: "Tenant dashboard" },
          ],
        },
        {
          title: "3. Maintenance Request Workflow",
          paragraphs: [
            "When a tenant discovers an issue with their rental property, they can create a maintenance request through the platform. The tenant enters information about the problem, including its category, description, and other relevant details.",
            "Once submitted, the React frontend sends the request to the Spring Boot backend through a REST API. The backend validates the submitted information and stores the request in the PostgreSQL database.",
            "The property manager can then view the newly submitted request from their management interface. As the issue is reviewed and resolved, its status can be updated—for example, from submitted to in progress and eventually completed. The tenant can return to the platform at any time to monitor these updates, reducing the need for repeated emails or phone calls.",
          ],
          shots: [
            {
              file: "Maintenance Request Form.png",
              caption: "Maintenance request form",
            },
            {
              file: "Maintenance Request.png",
              caption: "Maintenance request — tenant view",
            },
            {
              file: "Maintenance Request - Landlord View.png",
              caption: "Maintenance request — landlord view",
            },
          ],
        },
        {
          title: "4. Property Booking Workflow",
          paragraphs: [
            "RentMate also allows tenants to arrange property-related appointments through a structured booking system. The tenant selects an available date or time and submits the booking through the application.",
            "The backend processes the booking, verifies the submitted information, and records it in the database. The booking then becomes visible to the relevant users, providing both the tenant and property manager with a consistent record of the appointment.",
            "This workflow helps prevent scheduling confusion and keeps booking information within the same platform as the rest of the rental process.",
          ],
          shots: [
            { file: "Property Detail.png", caption: "Property details" },
            { file: "Property Booking.png", caption: "Property booking" },
          ],
        },
        {
          title: "5. Tenant–Manager Messaging",
          paragraphs: [
            "The messaging feature provides a direct communication channel between tenants and property managers. Users can send and review messages related to maintenance, bookings, or general rental enquiries without relying on a separate communication platform.",
            "Messages are processed by the backend and stored in the database, allowing conversations to remain available for future reference. By connecting communication with other rental functions, RentMate makes it easier for users to understand the context of an enquiry and follow its progress.",
          ],
          shots: [{ file: "Messaging.png", caption: "Messaging" }],
        },
        {
          title: "6. Backend and Data Flow",
          paragraphs: [
            "RentMate uses a layered full-stack architecture. The React frontend is responsible for displaying the user interface, collecting user input, and sending requests to the backend.",
            "The Java 21 Spring Boot backend contains the application’s business logic and exposes REST API endpoints for the frontend. It validates incoming requests, processes user actions, controls access to system functionality, and communicates with the PostgreSQL database hosted through Neon.",
            "A typical request follows this flow:",
          ],
          flow: "User action → React interface → REST API request → Spring Boot business logic → PostgreSQL database → API response → Updated interface",
        },
        {
          title: "7. Testing and Development Workflow",
          paragraphs: [
            "The project includes automated testing across both the frontend and backend. Backend functionality was tested using JUnit 5, Mockito, Spring Boot Test, and MockMvc, while frontend components were tested using Jest and React Testing Library.",
            "Docker was used to support a consistent development environment, while GitHub Actions provided automated checks through the project’s CI/CD workflow. These practices helped identify integration issues earlier and improved reliability throughout development.",
          ],
        },
      ],
      closingTitle: "My Contributions",
      closing: [
        "RentMate was developed as a collaborative software engineering project. I contributed to the React implementation of key features, including maintenance requests, property bookings, and tenant–manager messaging. I also supported project documentation and testing.",
        "Alongside development, I served as the Scrum Master and coordinated sprint planning, daily team communication, and retrospective discussions. This role allowed me to contribute to both the technical implementation and the organisation of the development process.",
      ],
    },
  },
  {
    slug: "ai-business-assistant",
    number: "02",
    title: "REPLIVO",
    eyebrow: "AI business assistant",
    description:
      "A secure workspace for small businesses to manage enquiries and draft knowledge-grounded responses with selectable tone and human approval.",
    contribution:
      "Designed role-based data isolation, email verification, analytics and a modular API architecture around an approval-first AI workflow.",
    stack: ["React", "FastAPI", "PostgreSQL", "OpenAI", "Alembic"],
    href: "https://github.com/cyp186/ai-sme-assistant",
    accent: "violet",
    walkthrough: {
      title: "How REPLIVO Works",
      intro: [
        "REPLIVO is a full-stack AI business assistant designed to help small and medium-sized businesses manage customer enquiries and produce high-quality reply drafts. It brings customer records, enquiry tracking, business knowledge, and AI-assisted response generation into one centralised workspace for business owners.",
      ],
      introShots: [{ file: "Replivo Landing.png", caption: "Landing page" }],
      sections: [
        {
          title: "1. User Authentication and Account Access",
          paragraphs: [
            "The system begins with a secure registration and login process. New users create an account with their name, email, and password. The backend hashes the password and stores the account in PostgreSQL, then sends a one-time email verification code.",
            "Once the user verifies their email, the system issues a JWT access token. That token is stored on the frontend and included with subsequent API requests, so only authenticated users can access protected business data. The platform also includes a forgot-password workflow: users request a reset code by email, then set a new password after the code is validated.",
            "Unlike a multi-role tenant/manager system, REPLIVO is built as a business-owner workspace. After authentication, each user works within their own business context rather than switching between separate customer and staff portals.",
          ],
          shots: [
            { file: "Replivo Sign Up.png", caption: "Sign up" },
            { file: "Replivo Sign In.png", caption: "Sign in" },
          ],
        },
        {
          title: "2. Business Setup and Owner Dashboard",
          paragraphs: [
            "After logging in, the user creates a business profile containing details such as business name, industry, contact email, and description. This profile becomes the foundation for the rest of the system: customers, enquiries, knowledge base entries, and AI responses are all scoped to that business.",
            "The dashboard then acts as the central overview for the workspace. It summarises key activity, including the number of customers, total enquiries, pending enquiries, and approved AI responses. From here, the user can navigate into customers, enquiries, knowledge base management, or business settings without leaving the application.",
          ],
          shots: [
            { file: "Replivo Business Setup.png", caption: "Business setup" },
            { file: "Replivo Dashboard.png", caption: "Owner dashboard" },
          ],
        },
        {
          title: "3. Customer and Enquiry Management Workflow",
          paragraphs: [
            "Business owners can create and manage customer records directly in the platform, including name, email, and phone details. When a customer enquiry arrives—whether through email, social media, phone, or another channel—the owner logs it in REPLIVO against the relevant customer.",
            "Each enquiry includes a subject, message, optional category, and status such as pending, in progress, or resolved. The React frontend sends this information to the FastAPI backend through a REST API. The backend validates the data, links the enquiry to the correct business and customer, and stores it in PostgreSQL.",
            "From the enquiry detail page, the owner can update the enquiry content or status as work progresses. This gives the business a consistent internal record of customer questions and their resolution state, instead of relying on scattered inboxes and notes.",
          ],
          shots: [
            { file: "Customers.png", caption: "Customer records" },
            {
              file: "Replivo Record Enquiries.png",
              caption: "Record enquiries",
            },
            { file: "Replivo Enquiry.png", caption: "Enquiry detail" },
          ],
        },
        {
          title: "4. Knowledge Base Workflow",
          paragraphs: [
            "Before generating AI replies, the business can build a knowledge base of trusted information such as pricing, opening hours, service details, policies, and FAQs. Each entry includes a title, content, and source type.",
            "These entries are stored against the business profile and later provided as context when the AI drafts a response. This design is intentional: the system is meant to ground replies in the business’s own information rather than inventing unsupported details. As a result, the quality of AI drafts improves as the knowledge base becomes more complete.",
          ],
          shots: [{ file: "Knowledge Base.png", caption: "Knowledge base" }],
        },
        {
          title: "5. AI Response Generation and Review Workflow",
          paragraphs: [
            "Once an enquiry has been recorded, the business owner can open the AI Response Review page and generate a draft reply. The frontend requests a new draft from the backend, which gathers:",
          ],
          bullets: [
            "the enquiry subject and message",
            "the related customer details",
            "the business profile",
            "the business knowledge base entries",
            "an optional tone setting such as professional, friendly, or concise",
          ],
          tail: [
            "The backend then calls the OpenAI API with that context and stores the generated reply as an unapproved draft. The owner can review the text, edit it, save changes, regenerate a new version, or approve the final draft.",
            "This human-in-the-loop step is a core part of the workflow. AI accelerates drafting, but the business owner remains responsible for checking accuracy and tone before the reply is treated as ready to send.",
          ],
          shots: [
            {
              file: "AI Generated Response.png",
              caption: "AI-generated response",
            },
          ],
        },
        {
          title: "6. Approved Reply Delivery Workflow",
          paragraphs: [
            "After a draft has been approved, the owner can send it to the customer by email. The backend checks that the response is approved, that it has not already been sent, and that the customer has an email address. It then delivers the reply through SMTP and records a sent timestamp against the response.",
            "This completes the end-to-end enquiry loop:",
          ],
          flow: "Customer question arrives → enquiry is logged → AI draft is generated → owner reviews and approves → reply is emailed to the customer",
          tail: [
            "By keeping drafting, approval, and delivery in the same system, REPLIVO reduces the gap between receiving an enquiry and sending a polished response.",
          ],
          shots: [
            { file: "Reply Delivery.png", caption: "Approved reply delivery" },
          ],
        },
        {
          title: "7. Backend and Data Flow",
          paragraphs: [
            "REPLIVO uses a layered full-stack architecture. The React frontend is responsible for the user interface, form handling, protected routing, and API communication. The FastAPI backend contains the application’s business logic and exposes REST endpoints for authentication, business setup, customers, enquiries, knowledge base entries, and AI responses.",
            "The backend validates incoming requests with Pydantic schemas, enforces authentication through JWT dependencies, and persists data with SQLAlchemy and PostgreSQL. Database schema changes are managed with Alembic migrations. Supporting services handle password hashing, email delivery, and OpenAI draft generation.",
            "A typical request follows this flow:",
          ],
          flow: "User action → React interface → REST API request → FastAPI business logic → PostgreSQL database / OpenAI / SMTP → API response → Updated interface",
        },
        {
          title: "8. Development Approach",
          paragraphs: [
            "The project was developed iteratively, starting with core authentication and business-scoped CRUD features, then expanding into AI draft generation, approval, and email delivery. Environment-based configuration was used for database access, JWT secrets, OpenAI credentials, and SMTP settings so local development could run safely without exposing secrets.",
            "Local development uses a React Vite frontend and a FastAPI backend with PostgreSQL. Email verification and password-reset codes can be logged to the server console when SMTP is not configured, which made authentication testing practical during development. AI features were validated against real OpenAI API calls once API credits were available.",
          ],
        },
      ],
    },
  },
  {
    slug: "atelier",
    number: "03",
    title: "Atelier Clothing Recommendation",
    eyebrow: "Flask data application",
    description:
      "A full-stack NLP application that predicts whether a customer would recommend a clothing item based on review text.",
    contribution:
      "Built database-backed filters, aggregate queries, and adaptive visualisations.",
    stack: ["Python", "Flask", "scikit-learn", "pandas", "NLTK"],
    href: "https://github.com/cyp186/atelier_clothing_recommendation",
    accent: "cyan",
    walkthrough: {
      title: "How Atelier Works",
      intro: [
        "Atelier is a full-stack NLP application that predicts whether a customer would recommend a clothing item based on the text of their review. It presents a women’s e-commerce catalog built from 19,662 real customer reviews, and it combines product browsing with a machine learning pipeline that classifies new reviews as Recommended or Not Recommended.",
        "The platform brings catalog discovery, keyword search, and ML-assisted review submission into one system, so shoppers can explore items, read existing feedback, and contribute a new review without leaving the application.",
      ],
      introShots: [{ file: "main page.png", caption: "Catalog home" }],
      sections: [
        {
          title: "1. Catalog Home and Product Discovery",
          paragraphs: [
            "The experience begins on the homepage, which acts as the central access point for the catalog. Users can browse a paginated grid of clothing items, each showing its class (for example, Dresses or Jackets), a short description, average star rating, review count, and the percentage of reviewers who would recommend it.",
            "Department shortcuts sit at the top of the page, so users can move directly into a category or continue scrolling through the full catalog. Because there is no login requirement, anyone can explore products, search, and submit a review immediately.",
            "This homepage gives users a clear overview of the store without needing a separate product database or shopping-cart system. Item statistics are calculated from the underlying review data, so ratings and recommendation percentages stay consistent across the site.",
          ],
        },
        {
          title: "2. Category Browsing",
          paragraphs: [
            "Users can filter the catalog by department, including Bottoms, Dresses, Intimate, Jackets, Tops, and Trend. Selecting a department opens a category page that lists only the items in that group, along with the related clothing classes for extra context.",
            "From here, a user can open any product to see its full details and customer reviews. This structure keeps browsing organised by clothing type, similar to a typical retail site, while still using the same review-backed product data as the rest of the application.",
          ],
          shots: [
            {
              file: "search by categories.png",
              caption: "Search by categories",
            },
          ],
        },
        {
          title: "3. Product Detail and Review History",
          paragraphs: [
            "When a user opens an item, they see a product detail page with the clothing title, description, average rating, total number of reviews, and overall recommendation percentage. Division, department, and class tags sit alongside this summary so the item is easy to place in the catalog.",
            "Below the product information, the page lists every customer review for that item. Each review shows its title, written feedback, star rating, a Recommended or Not Recommended badge, and the reviewer’s age group.",
            "This page is also the starting point for the machine learning workflow. A Write a Review action takes the user into a form tied to that specific clothing item, so the new review is stored against the correct product.",
          ],
          shots: [
            { file: "item description.png", caption: "Product detail" },
          ],
        },
        {
          title: "4. Keyword Search Workflow",
          paragraphs: [
            "Atelier includes a catalog search bar in the site header. When a user enters a query such as “summer dress,” the Flask backend tokenises and stems the search terms using NLTK’s Porter stemmer. This means related word forms, such as “dresses” and “dress,” can still match.",
            "Each catalog item is then scored by how many stemmed query tokens appear in its title, description, class, and department. Items with no overlap are removed, and the remaining results are ranked by match score.",
            "This is a keyword-matching search rather than a separate recommendation engine. It helps users find relevant clothing quickly while reusing the same NLP utilities that support the review classifier.",
          ],
          shots: [{ file: "search.png", caption: "Search results" }],
        },
        {
          title: "5. Review Submission and ML Recommendation Workflow",
          paragraphs: [
            "The core of Atelier is the review workflow. When a customer wants to leave feedback on an item, they complete a form with a review title, written review, star rating, and optional age.",
            "Once submitted, the Flask frontend sends the title and review text to the backend. The text is preprocessed — lowercased, tokenised, stripped of stopwords, and filtered — then passed into a scikit-learn pipeline. That pipeline uses bag-of-words features (CountVectorizer) and a logistic regression classifier to predict whether the reviewer would recommend the item. The model also returns a confidence score.",
            "The user is then shown a confirmation page with the predicted label — Recommended or Not Recommended — and the model’s confidence. They can accept that label or override it if it does not match their intent. This human-in-the-loop step keeps the classifier useful as a suggestion rather than a final decision the user cannot change.",
            "After confirmation, the review is saved to a CSV file and merged back into the live catalog data. The user receives a success page with a permanent URL for the review. From that point, the item’s review count and recommendation percentage update to include the new submission, so later visitors see the latest feedback.",
            "A typical review follows this path:",
          ],
          flow: "Write review → Flask form submission → Text preprocessing → Logistic regression prediction → Confirm or override label → Save to CSV → Updated product page",
          shots: [
            { file: "review form.png", caption: "Review form" },
            { file: "recommendation.png", caption: "Model prediction" },
            { file: "review submitted.png", caption: "Review submitted" },
          ],
        },
        {
          title: "6. Backend, Machine Learning, and Data Flow",
          paragraphs: [
            "Atelier uses a layered Python architecture. The Flask backend is responsible for routing, page rendering, data aggregation, and connecting the user interface to the NLP and machine learning modules.",
            "Jinja2 templates and CSS display the catalog, forms, and prediction results. The backend loads the original Kaggle dataset (assignment3_II.csv) into pandas, groups reviews by clothing title, and calculates ratings and recommendation rates for each product. Newly submitted reviews are stored in new_reviews.csv and combined with the original dataset at runtime.",
            "The machine learning layer lives in a dedicated module. Review title and body text are combined and preprocessed with the same function used during training, which keeps inference consistent with the model the classifier was built on. The production model is a CountVectorizer + logistic regression pipeline, serialised with joblib so the web app can load it on startup instead of retraining every time.",
            "The production model was selected after comparing three baselines on a stratified 80/20 hold-out split:",
          ],
          table: {
            headers: ["Approach", "Accuracy", "F1"],
            rows: [
              ["Count Vectorizer + Logistic Regression", "89.9%", "93.8%"],
              ["TF-IDF + Logistic Regression", "89.7%", "93.9%"],
              ["TF-IDF + Naive Bayes", "84.9%", "91.5%"],
            ],
          },
          afterTable: [
            "Count + logistic regression was chosen for production because it had the strongest accuracy while remaining easy to interpret.",
            "A typical request follows this flow:",
          ],
          flow: "User action → Flask route → pandas / NLP processing → scikit-learn model or CSV storage → Jinja2 response → Updated interface",
          tail: [
            "This separation between the web layer, text processing, model training, and persisted data makes the application easier to test, retrain, and extend.",
          ],
        },
        {
          title: "7. Testing, Evaluation, and Development Workflow",
          paragraphs: [
            "The project includes unit tests for the NLP and machine learning core, written with pytest. These tests cover text preprocessing, stopword removal, stemming, search scoring, and end-to-end prediction on a small synthetic dataset. They also check that training and inference use the same preprocessing steps, which is important for a text classifier.",
            "Model quality was evaluated separately from the web interface. A hold-out evaluation script retrains candidate pipelines, records accuracy, precision, recall, F1, and a confusion matrix, then saves the selected production model. A Jupyter notebook documents exploratory analysis, including class balance, rating distribution, text length, and side-by-side model comparison charts.",
            "Together, these steps made it possible to justify the production model with measured results, not only with the behaviour of the website.",
          ],
        },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
