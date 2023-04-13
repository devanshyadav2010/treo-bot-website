import React from 'react';
import Head from 'next/head';
import { Accordion, AccordionItem } from 'react-bootstrap';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

export default function Changelogs() {
  const changelogs = [
    {
      version: '1.0.0',
      date: '2022-04-01',
      changes: [
        'Added new feature A',
        'Fixed bug B',
        'Improved performance',
      ],
    },
    {
      version: '1.1.0',
      date: '2022-05-01',
      changes: [
        'Added new feature C',
        'Fixed bug D',
        'Improved user interface',
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Changelog - My Website</title>
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Changelog</h1>
        <Accordion defaultActiveKey="0">
          {changelogs.map((changelog, index) => (
            <AccordionItem eventKey={index.toString()} key={index}>
              <AccordionItem.Header>
                <h2 className="flex items-center justify-between">
                  <span className="font-bold">{`Version ${changelog.version}`}</span>
                  <span className="text-sm text-gray-500">{changelog.date}</span>
                  <span className="text-xl">
                    <BiChevronDown />
                  </span>
                </h2>
              </AccordionItem.Header>
              <AccordionItem.Body>
                <ul className="list-disc list-inside">
                  {changelog.changes.map((change, index) => (
                    <li key={index}>{change}</li>
                  ))}
                </ul>
              </AccordionItem.Body>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
