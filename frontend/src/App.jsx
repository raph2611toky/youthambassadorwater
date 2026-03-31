export default function YouthWaterProjectApp() {
  const objectives = [
    "Train young people aged 15–25 from the scouting association to become Water Ambassadors.",
    "Build practical knowledge on water conservation, rainwater harvesting, water reuse, hygiene, and simple water filtration.",
    "Empower youth to lead awareness activities in schools, rural areas, and local communities.",
    "Support long-term youth-led action through small local initiatives and community engagement.",
  ];

  const projectSteps = [
    {
      title: "1. Selection of young participants",
      text: "The project will start with the selection of motivated young people aged 15 to 25 from my scouting association. These young people will not only be participants but future ambassadors who will help spread knowledge and practical solutions in their communities. The selection will focus on motivation, willingness to serve, and interest in community action.",
    },
    {
      title: "2. Training sessions on water challenges",
      text: "Selected participants will take part in structured learning sessions on water-related challenges in Madagascar. These sessions will address water scarcity, limited access to safe water, health risks linked to unsafe water, hygiene practices, and the importance of responsible water use. The trainings will also introduce practical and affordable solutions adapted to local realities.",
    },
    {
      title: "3. Practical workshops and hands-on learning",
      text: "The project will go beyond theory by creating practical workshops where young people learn by doing. They will practice simple filtration methods using accessible materials, learn how to collect and safely store rainwater, and explore concrete ways to reuse water at household level. These workshops will help participants gain useful, realistic, and transferable skills they can apply in daily life and share with others.",
    },
    {
      title: "4. Outreach in schools and communities",
      text: "After the training, I will accompany the young ambassadors to schools, local communities, and rural areas where access to water education is often limited. Together, we will organize awareness sessions, interactive discussions, demonstrations, and activities adapted to children, youth, and families. The aim is to make the information practical, understandable, and directly connected to everyday life.",
    },
    {
      title: "5. Youth-led local initiatives",
      text: "To ensure sustainability, the young ambassadors will be encouraged to design and carry out small local initiatives. These can include school awareness talks, practical demonstrations on water-saving habits, peer education activities, or simple community actions promoting safer and more sustainable water practices. This step will strengthen their leadership and create a multiplier effect in the community.",
    },
  ];

  const impactPoints = [
    "Young people gain practical knowledge and leadership skills.",
    "Schools and communities receive accessible information on safe water practices.",
    "Families are encouraged to adopt better habits related to water use, hygiene, and prevention of disease.",
    "Rural and underserved areas benefit from youth-led awareness and practical demonstrations.",
    "The project creates long-term impact by turning trained youth into active ambassadors for change.",
  ];

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <p style={styles.eyebrow}>Youth-led community water project</p>
            <h1 style={styles.title}>Youth Water Ambassadors</h1>
            <p style={styles.subtitle}>
              A youth-driven initiative that equips young people with practical knowledge,
              leadership, and community action skills to promote safer and more sustainable
              water practices in Madagascar.
            </p>
          </div>
        </div>
      </section>

      <main style={styles.container}>
        <section style={styles.section}>
          <div style={styles.cardHighlight}>
            <h2 style={styles.sectionTitle}>Project overview</h2>
            <p style={styles.paragraph}>
              This project was designed to respond to real water challenges faced by many communities in Madagascar,
              including water scarcity, limited access to safe water, and the health risks caused by unsafe water practices.
              It focuses on young people as key actors of change. By training and accompanying them throughout the process,
              the project aims to create a ripple effect where informed youth can educate, inspire, and mobilize others.
            </p>
            <p style={styles.paragraph}>
              The project combines training, practical workshops, and field-based awareness activities. It does not stop at
              teaching concepts: it helps young people apply concrete solutions, share them in schools and communities,
              and take ownership through youth-led action.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Main objectives</h2>
          <div style={styles.objectiveGrid}>
            {objectives.map((objective, index) => (
              <div key={index} style={styles.objectiveCard}>
                <div style={styles.objectiveNumber}>{index + 1}</div>
                <p style={styles.objectiveText}>{objective}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>How the project will be implemented</h2>
          <div style={styles.timeline}>
            {projectSteps.map((step, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineCard}>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.paragraph}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.twoColumns}>
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>Why this approach is important</h2>
              <p style={styles.paragraph}>
                Many young people want to contribute to their communities but do not always have access to the knowledge,
                tools, or opportunities needed to act. This project gives them both practical skills and a meaningful role.
                It also reaches schools and communities, including rural areas, where awareness on safe water use can be limited.
              </p>
              <p style={styles.paragraph}>
                By focusing on practical and low-cost solutions such as rainwater harvesting, water reuse, and simple filtration,
                the project promotes actions that can realistically be adopted and shared.
              </p>
            </div>

            <div style={styles.cardBlue}>
              <h2 style={styles.sectionTitleLight}>Youth-led dimension</h2>
              <p style={styles.paragraphLight}>
                The project is led by a young woman and developed with youth participation at its core. Young participants are
                not passive beneficiaries: they are trained, involved, accompanied, and empowered to become leaders of awareness
                activities and local action. This makes the project both youth-centered and community-driven.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Expected positive changes</h2>
          <div style={styles.impactList}>
            {impactPoints.map((point, index) => (
              <div key={index} style={styles.impactItem}>
                <span style={styles.check}>✓</span>
                <p style={styles.impactText}>{point}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    backgroundColor: '#f4f8ff',
    color: '#12304a',
    minHeight: '100vh',
  },
  container: {
    width: '90%',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  hero: {
    position: 'relative',
    background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 45%, #42a5f5 100%)',
    color: '#ffffff',
    padding: '90px 0 80px',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 35%), radial-gradient(circle at left center, rgba(255,255,255,0.12), transparent 30%)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '760px',
  },
  eyebrow: {
    fontSize: '14px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '14px',
    opacity: 0.92,
    fontWeight: 'bold',
  },
  title: {
    fontSize: '52px',
    lineHeight: 1.1,
    margin: '0 0 20px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '20px',
    lineHeight: 1.7,
    margin: 0,
    maxWidth: '700px',
  },
  section: {
    padding: '55px 0 10px',
  },
  sectionTitle: {
    fontSize: '32px',
    marginBottom: '22px',
    color: '#0d47a1',
  },
  sectionTitleLight: {
    fontSize: '32px',
    marginBottom: '22px',
    color: '#ffffff',
  },
  paragraph: {
    fontSize: '17px',
    lineHeight: 1.9,
    marginBottom: '18px',
  },
  paragraphLight: {
    fontSize: '17px',
    lineHeight: 1.9,
    marginBottom: '18px',
    color: '#f3f8ff',
  },
  cardHighlight: {
    backgroundColor: '#ffffff',
    borderRadius: '22px',
    padding: '34px',
    boxShadow: '0 12px 32px rgba(13, 71, 161, 0.12)',
    border: '1px solid #d9e9ff',
  },
  objectiveGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '18px',
  },
  objectiveCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '22px',
    boxShadow: '0 10px 24px rgba(21, 101, 192, 0.08)',
    border: '1px solid #dcecff',
  },
  objectiveNumber: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    backgroundColor: '#1565c0',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: '14px',
  },
  objectiveText: {
    fontSize: '16px',
    lineHeight: 1.7,
    margin: 0,
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  },
  timelineDot: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#1e88e5',
    marginTop: '18px',
    flexShrink: 0,
    boxShadow: '0 0 0 6px rgba(30, 136, 229, 0.15)',
  },
  timelineCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '24px 26px',
    border: '1px solid #dbeafe',
    boxShadow: '0 10px 26px rgba(13, 71, 161, 0.08)',
    flex: 1,
  },
  stepTitle: {
    marginTop: 0,
    marginBottom: '12px',
    fontSize: '22px',
    color: '#1565c0',
  },
  twoColumns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '22px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '22px',
    padding: '30px',
    border: '1px solid #dbeafe',
    boxShadow: '0 10px 28px rgba(13, 71, 161, 0.08)',
  },
  cardBlue: {
    background: 'linear-gradient(135deg, #1565c0 0%, #1e88e5 100%)',
    borderRadius: '22px',
    padding: '30px',
    boxShadow: '0 12px 30px rgba(13, 71, 161, 0.18)',
  },
  impactList: {
    display: 'grid',
    gap: '14px',
  },
  impactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '18px 20px',
    border: '1px solid #dcecff',
    boxShadow: '0 8px 20px rgba(13, 71, 161, 0.06)',
  },
  check: {
    color: '#1565c0',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: 1.6,
  },
  impactText: {
    margin: 0,
    fontSize: '16px',
    lineHeight: 1.8,
  },
};
