export default function HomeBody({ styles }) {
  return (
    <div style={styles.BodyContainer}>
      <h1 className="display-3 section-header"> Skills/Proficiencies </h1>
      <div style={styles.InnerBodyContainer}>
        <div style={styles.InnerBodyText}>
          <p>
            Owing to multi-disciplinary projects, I have skills in a variety of
            areas:
          </p>
          <ul>
            <li>
              Mechanical Engineering
              <ul>
                <li>SolidWorks</li>
                <li>AutoCAD</li>
                <li>MATLAB</li>
              </ul>
            </li>
            <li>
              Robotics
              <ul>
                <li>Working with micro-controllers</li>
                <li>C++</li>
                <li>Q-Learning AI Training</li>
              </ul>
            </li>
            <li>
              Software Development
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
                <li>MySQL</li>
                <li>Amazon Web Services</li>
              </ul>
            </li>
            <li>
              Game Development
              <ul>
                <li>Unity</li>
                <li>Programming game logic in C#</li>
                <li>User interaction</li>
                <li>AI Behavior</li>
                <li>Blender Modeling</li>
              </ul>
            </li>
          </ul>
        </div>
        <div style={styles.InnerBodyProfileContainer}>
          <img
            style={styles.InnerBodyProfileImage}
            src={`${process.env.PUBLIC_URL}/assets/david.JPG`}
            alt="Head Shot"
          />
        </div>
      </div>
    </div>
  );
}
