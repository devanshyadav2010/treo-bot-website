
import React, { useState } from 'react';
import fs from 'fs';

export default function Changelogs() {
  const [changelogs, setChangelogs] = useState([]);

  // read the changelog file on page load
  useEffect(() => {
    const changelogData = fs.readFileSync('../data/changelogs.json', 'utf-8');
    setChangelogs(JSON.parse(changelogData));
  }, []);

  return (
    <div className="changelogs-page">
      <header>
        <h1>Changelogs</h1>
      </header>
      <main>
        {changelogs.map(changelog => (
          <div className="changelog-item" key={changelog.version}>
            <h2>{changelog.version}</h2>
            <small>{changelog.date}</small>
            <ul>
              {changelog.changes.map(change => (
                <li key={change}>{change}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
      <style jsx>{`
        /* Add CSS styling here */
      `}</style>
    </div>
  );
}
