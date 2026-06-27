import {
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Download,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
} from 'lucide-react'
import './App.css'

const contact = {
  phone: '+91 7452942831',
  email: 'jadaunnarendra12@gmail.com',
  location: 'Noida, India',
  linkedin: 'https://linkedin.com/in/narendra-jadaun',
  github: 'https://github.com/Narendra-1000',
}

const techStack = ['Python', 'FastAPI', 'Flask', 'Django', 'React', 'AWS', 'PostgreSQL', 'MongoDB', 'Redis']

const metrics = [
  { value: '3+', label: 'Years experience' },
  { value: '50K+', label: 'Concurrent users scaled' },
  { value: '2', label: 'Production reward apps' },
  { value: 'AWS', label: 'Cloud infrastructure' },
]

const experiences = [
  {
    role: 'Software Development Engineer II',
    company: 'Collegedunia Web Pvt Ltd',
    period: 'May 2023 - Present',
    location: 'Gurgaon, India',
    highlights: [
      'Designed and maintained scalable backend applications and REST APIs using FastAPI, Flask, and Django.',
      'Built asynchronous workflows with Celery, Redis, and AsyncIO for rewards, transactions, users, and offers.',
      'Optimized PostgreSQL, MongoDB, and Redis performance for high-volume production workloads.',
      'Managed AWS deployments using EC2, Docker, Linux, Nginx, ALB, ASG, and monitoring workflows.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Mtalkz Mobility Services Pvt Ltd',
    period: 'Jul 2022 - Apr 2023',
    location: 'Noida, India',
    highlights: [
      'Developed backend modules and automation scripts using Python.',
      'Integrated third-party APIs and improved internal service workflows.',
    ],
  },
]

const projects = [
  {
    title: 'KickCash Reward Platform',
    badge: 'Featured case study',
    url: 'https://play.google.com/store/apps/details?id=in.cashback.shopping.kickcash',
    overview:
      'A reward platform where users complete tasks, surveys, referrals, and promotional offers to earn coins and rewards.',
    problem: 'High-traffic reward and offer flows needed reliable transactions, fast APIs, and stable mobile backend support.',
    architecture: 'Users -> ALB -> Flask APIs -> Redis cache -> Celery workers -> MongoDB + PostgreSQL on AWS.',
    role: 'Owned core backend services, database optimization, AWS scaling decisions, deployment reliability, and mobile API support.',
    impact:
      'Scaled the platform from about 5K to 50K+ concurrent users through backend optimization, AWS Auto Scaling, database indexing, Redis caching, and production hardening.',
    stack: ['Python', 'Flask', 'MongoDB', 'PostgreSQL', 'Redis', 'Celery', 'AWS', 'Docker', 'React Native'],
  },
  {
    title: 'Cash-D Reward Platform',
    badge: 'Backend + cloud architecture',
    url: 'https://play.google.com/store/apps/details?id=com.rewarded.game.play&hl=en',
    overview:
      'A large-scale rewards product launched in the United States, supporting offers, activities, referrals, wallet flows, and transaction tracking.',
    problem: 'The system needed production-grade reward processing, callbacks, authentication, and infrastructure that could scale reliably.',
    architecture: 'Mobile clients and dashboards communicate with REST APIs, Redis, Celery workers, PostgreSQL, MongoDB, and AWS services.',
    role: 'Designed backend architecture, REST APIs, cloud infrastructure, deployment automation, and production debugging workflows.',
    impact:
      'Improved reliability, reduced deployment effort, and supported production reward workloads across mobile and dashboard surfaces.',
    stack: ['Python', 'Flask', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'React', 'Ansible'],
  },
  {
    title: 'KickCash CMS Dashboard',
    badge: 'Admin platform',
    overview:
      'A complete administrative dashboard for users, rewards, fraud detection, transactions, offers, tickets, approval workflows, and mobile previews.',
    problem: 'Operations teams needed fast tools to search, filter, approve, detect fraud, and manage reward workflows at scale.',
    architecture: 'React + Ant Design dashboard backed by authenticated Flask REST APIs with pagination, filtering, and role-based access.',
    role: 'Built reusable React components, tables, forms, charts, dashboard APIs, search, filters, and workflow screens.',
    impact:
      'Created an operational control panel that made offer, wallet, transaction, user, and fraud workflows easier to manage.',
    stack: ['React', 'Ant Design', 'Flask', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Braj Mandal Web',
    badge: 'Modern web platform',
    url: 'https://brajmandal.in',
    overview:
      'A tourism and information platform for temples, history, schools, colleges, blogs, district pages, and contact workflows.',
    problem: 'The product needed a responsive, SEO-friendly web presence with reusable content sections.',
    architecture: 'Next.js application with React components, Tailwind styling, TypeScript, and SEO-focused pages.',
    role: 'Built responsive pages, reusable components, content sections, and public-facing web flows.',
    impact: 'Delivered a modern and searchable platform for regional information and tourism discovery.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'SEO'],
  },
]

const achievements = [
  'Scaled KickCash infrastructure from about 5K to 50K+ concurrent users through backend and AWS optimizations.',
  'Built production REST APIs powering rewards, transactions, user management, wallet systems, and offer workflows.',
  'Designed reliable asynchronous processing with Celery and Redis for callbacks, scheduled jobs, and background tasks.',
  'Optimized PostgreSQL, MongoDB, and Redis to reduce server load and improve application performance.',
  'Developed React-based CMS dashboards with filtering, approval workflows, responsive UI, and role-based flows.',
  'Migrated large-scale user and event analytics from MoEngage to CleverTap.',
  'Managed AWS infrastructure, deployment automation, and cloud-native production environments.',
]

const skillGroups = [
  { title: 'Languages', values: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'Java'] },
  { title: 'Backend', values: ['FastAPI', 'Flask', 'Django', 'DRF', 'Celery', 'SQLAlchemy', 'Pydantic', 'AsyncIO'] },
  { title: 'Frontend', values: ['React', 'Next.js', 'Tailwind CSS', 'Ant Design', 'HTML', 'CSS'] },
  { title: 'Databases', values: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Indexing', 'Aggregation Pipelines'] },
  { title: 'Cloud & DevOps', values: ['AWS', 'EC2', 'RDS', 'S3', 'ALB', 'ASG', 'Docker', 'Linux', 'Nginx', 'GitHub Actions'] },
  { title: 'Engineering', values: ['REST APIs', 'Microservices', 'ETL Pipelines', 'Caching', 'System Design', 'Production Debugging'] },
]

const infraItems = [
  'AWS EC2, ALB, ASG, RDS, S3, VPC, IAM, and security groups',
  'Docker, Nginx, Linux, Supervisor, PM2, Cron, Ansible, and GitHub Actions',
  'PostgreSQL indexing, query optimization, VACUUM, and performance tuning',
  'MongoDB schema design, aggregation pipelines, replication, and operational debugging',
  'Redis caching, queues, rate-sensitive workflows, and background job reliability',
]

const heroNodes = [
  { label: 'Users', detail: 'Mobile + web traffic' },
  { label: 'ALB', detail: 'Load balancing' },
  { label: 'Flask APIs', detail: 'Reward services' },
  { label: 'Redis', detail: 'Cache + queues' },
  { label: 'Celery', detail: 'Background jobs' },
  { label: 'DB Layer', detail: 'MongoDB + PostgreSQL' },
]

function HeroArchitecture() {
  return (
    <div className="architecture-stage" aria-hidden="true">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="architecture-ring" />
      <div className="architecture-core">
        <Server size={28} />
        <strong>API Core</strong>
      </div>
      <div className="node-grid">
        {heroNodes.map((node, index) => (
          <div className={`hero-node node-${index + 1}`} key={node.label}>
            <span>{node.label}</span>
            <small>{node.detail}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

function App() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#home" aria-label="Narendra Jadaun home">
          NJ
        </a>
        <div className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={18} />
            Software Development Engineer II
          </div>
          <h1>Building scalable backend systems, cloud infrastructure, and high-performance APIs.</h1>
          <p className="hero-lead">
            I am Narendra Jadaun, a Python backend engineer with 3+ years of experience designing production
            applications, distributed workflows, and cloud-native systems used by thousands of users.
          </p>
          <div className="hero-stack">
            {techStack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects
              <ArrowUpRight size={18} />
            </a>
            <a className="button secondary" href="/narendra-jadaun-resume.md" download>
              Download Resume
              <Download size={18} />
            </a>
            <a className="button ghost" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="3D backend architecture visualization">
          <HeroArchitecture />
          <div className="visual-card top">
            <Server size={18} />
            Flask APIs + Celery
          </div>
          <div className="scale-card" aria-label="AWS scaling from 5K to 50K concurrent users">
            <div className="scale-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <strong>AWS Scaling</strong>
              <span>5K to 50K+ concurrent users</span>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Portfolio highlights">
        {metrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section className="content-section about-grid" id="about">
        <SectionTitle
          eyebrow="About"
          title="Hi, I'm Narendra Jadaun"
          description="I enjoy solving performance bottlenecks, designing clean architectures, and building products that scale."
        />
        <div className="about-card">
          <p>
            I specialize in scalable backend architectures, REST APIs, cloud infrastructure, modern web applications,
            and mobile backend integrations. At Collegedunia Web Pvt Ltd, I build and maintain reward platforms, CMS
            dashboards, transaction systems, user management services, and high-volume cloud infrastructure.
          </p>
          <p>
            My work spans backend engineering, distributed systems, database optimization, DevOps, frontend development,
            and production debugging across Python, Flask, FastAPI, Django, PostgreSQL, MongoDB, Redis, Docker, and AWS.
          </p>
        </div>
      </section>

      <section className="content-section" id="experience">
        <SectionTitle
          eyebrow="Experience"
          title="Production backend and platform engineering"
          description="I have worked across APIs, background workers, dashboards, databases, infrastructure, and live incident debugging."
        />
        <div className="timeline">
          {experiences.map((item) => (
            <article key={item.company} className="timeline-card">
              <div>
                <span className="period">{item.period}</span>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <small>{item.location}</small>
              </div>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="projects">
        <SectionTitle
          eyebrow="Projects"
          title="Case studies with architecture, ownership, and measurable impact"
          description="Each project is presented around the problem, system design, my role, and the engineering outcome."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-heading">
                <span>{project.badge}</span>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                    <ArrowUpRight size={18} />
                  </a>
                ) : null}
              </div>
              <h3>{project.title}</h3>
              <p>{project.overview}</p>
              <div className="case-study">
                <div>
                  <strong>Problem</strong>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <strong>Architecture</strong>
                  <p>{project.architecture}</p>
                </div>
                <div>
                  <strong>My role</strong>
                  <p>{project.role}</p>
                </div>
                <div>
                  <strong>Impact</strong>
                  <p>{project.impact}</p>
                </div>
              </div>
              <div className="chip-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section">
        <div>
          <SectionTitle
            eyebrow="Infrastructure"
            title="Cloud, databases, and production engineering"
            description="Hands-on with the systems recruiters care about: scaling, observability, deployment, caching, and reliability."
          />
          <div className="infra-list">
            {infraItems.map((item) => (
              <div key={item}>
                <ShieldCheck size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="architecture-card">
          <span className="mini-label">KickCash scale path</span>
          <div className="flow">
            {['Users', 'Load Balancer', 'Flask APIs', 'Redis', 'Celery', 'MongoDB + PostgreSQL', 'AWS'].map((item) => (
              <div key={item}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="achievements">
        <SectionTitle eyebrow="Achievements" title="Engineering outcomes that made production stronger" />
        <div className="achievement-grid">
          {achievements.map((item) => (
            <article key={item}>
              <Trophy size={20} />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="skills">
        <SectionTitle
          eyebrow="Skills"
          title="Grouped by engineering focus"
          description="Backend depth, cloud operations, data systems, frontend dashboards, and mobile API integration."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <div className="skill-icon">
                {group.title === 'Databases' ? <Database size={20} /> : group.title === 'Cloud & DevOps' ? <Cloud size={20} /> : <Code2 size={20} />}
              </div>
              <h3>{group.title}</h3>
              <div className="chip-list">
                {group.values.map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section blog-section" id="blogs">
        <SectionTitle
          eyebrow="Blogs"
          title="Writing topics to add next"
          description="A blog section is ready for engineering articles around scaling, production debugging, and backend architecture."
        />
        <div className="blog-grid">
          {['Scaling Flask APIs from 5K to 50K users', 'Redis caching patterns for reward platforms', 'Celery retries and callback reliability'].map((title) => (
            <article key={title}>
              <Zap size={20} />
              <h3>{title}</h3>
              <p>Draft planned around real production lessons and architecture decisions.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <span className="eyebrow">
            <Rocket size={18} />
            Available for backend and platform roles
          </span>
          <h2>Let’s build reliable systems that scale.</h2>
          <p>
            Reach out for backend engineering, cloud infrastructure, API design, performance optimization, or production
            system ownership opportunities.
          </p>
        </div>
        <div className="contact-card">
          <a href={`mailto:${contact.email}`}>
            <Mail size={18} />
            {contact.email}
          </a>
          <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>
            <Phone size={18} />
            {contact.phone}
          </a>
          <span>
            <MapPin size={18} />
            {contact.location}
          </span>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-mark">in</span>
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            <span className="contact-mark">GH</span>
            GitHub
          </a>
          <a className="button primary" href="/narendra-jadaun-resume.md" download>
            Download Resume
            <Download size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
