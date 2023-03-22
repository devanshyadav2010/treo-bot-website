import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Owner',
    avatarUrl: 'https://example.com/avatar1.png',
  },
  {
    name: 'Jane Doe',
    role: 'Developer',
    avatarUrl: 'https://example.com/avatar2.png',
  },
  {
    name: 'Alex Smith',
    role: 'Manager',
    avatarUrl: 'https://example.com/avatar3.png',
  },
];

const TeamMember = ({ name, role, avatarUrl }) => (
  <div>
    <img src={avatarUrl} alt={`${name}'s avatar`} />
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);

export default function TeamPage() {
  return (
    <div>
      <h1>Meet the Team</h1>
      {teamMembers.map((member) => (
        <TeamMember
          key={member.name}
          name={member.name}
          role={member.role}
          avatarUrl={member.avatarUrl}
        />
      ))}
    </div>
  );
}
