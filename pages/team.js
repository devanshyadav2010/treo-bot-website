import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Owner',
    avatarUrl: 'https://images-ext-1.discordapp.net/external/ZVEvKf45XxQctxcaiYCfWFGzgI6W8yXdrKAhS5I9uk4/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/980069165459198022/283716454cf02f9c2083375779b730af.png',
  },
  {
    name: 'Jane Doe',
    role: 'Developer',
    avatarUrl: 'https://images-ext-1.discordapp.net/external/ZVEvKf45XxQctxcaiYCfWFGzgI6W8yXdrKAhS5I9uk4/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/980069165459198022/283716454cf02f9c2083375779b730af.png',
  },
  {
    name: 'Alex Smith',
    role: 'Manager',
    avatarUrl: 'https://images-ext-1.discordapp.net/external/ZVEvKf45XxQctxcaiYCfWFGzgI6W8yXdrKAhS5I9uk4/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/980069165459198022/283716454cf02f9c2083375779b730af.png',
  },
];

const TeamMember = ({ name, role, avatarUrl }) => (
  <div>
    <img src={avatarUrl} alt={`${name}'s avatar`} />
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);

export default function Team() {
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
