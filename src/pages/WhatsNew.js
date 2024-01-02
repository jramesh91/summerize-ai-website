import React from 'react';
import { Card, CardBody, Typography, Input, List, ListItem } from '@material-tailwind/react';

const releaseNotes = [
  {
    version: 'Version 1.31',
    date: '2024-01-01',
    details: 'We have made improvements in how we welcome new users, Migrated to Assistant API for new use cases and improved usability, Easy summaries on Google Docs (public only)'
  },
  {
    version: 'Version 1.30',
    date: '2023-12-25',
    details: 'Audio mode, Upgraded to the latest GPT4 model for precise summaries, Performance improvements'
  },
  {
    version: 'Version 1.20',
    date: '2023-11-18',
    details: 'Dark mode (Theme), Improvements in View History tab, Easy summaries will now work on Youtube videos, Keywords and highlights are now two different options, Improved prompting for better results'
  },
  {
    version: 'Version 1.13',
    date: '2023-10-18',
    details: 'Bug fixes in summarizing PDFs, Improved prompts for concise results, Performance improvements'
  },
  {
    version: 'Version 1.12',
    date: '2023-10-10',
    details: 'We now support some PDF format documents, Bug fixes and UI improvements'
  },
  {
    version: 'Version 1.11',
    date: '2023-09-30',
    details: 'Upgrade button: When you subscribe to unlimited learning package, you can now give the email address when you click on "upgrade" to remove the monthly limits, Onboarding screen: To help you on how to pin the plugin, we have added a quick onboarding screen'
  },
  {
    version: 'Version 1.10',
    date: '2023-09-12',
    details: 'Report Issues: Found something off with the summary? Use the new "Report Issue" feature to let us know, Dislike a Generated Content: If a summary does not meet your needs, use the Dislike button to help us improve, View Historical Generated Content: Access all your previously generated summaries and keywords through the new View History feature.'
  }
  // ... add more versions as needed
];

const WhatsNew = () => {
  return (
    <div className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
      <aside className="col-span-1 lg:col-span-1">
        <Typography variant="h5" color="gray" className="text-3xl font-bold mb-4">Release Notes</Typography>
    
        <List className="mb-4">
          {releaseNotes.map((note) => (
            <ListItem key={note.version} className="text-blue-500 hover:underline mb-2">
              <a href={`#${note.version}`}>{note.version}</a>
            </ListItem>
          ))}
        </List>
      </aside>
      <section className="col-span-1 lg:col-span-3">
        {releaseNotes.map((note) => (
          <Card key={note.version} id={note.version} className="mb-4 shadow-md border bg-white">
          <CardBody className="p-5 flex flex-col justify-between h-full">
            <Typography variant="h5" color="blueGray" className="font-bold text-xl mb-2">{note.version}</Typography>
            <Typography variant="small" color="blueGray" className="text-sm font-semibold mb-2">Released on {note.date}</Typography>
            <Typography color="blueGray" className="text-md">
              {note.details}
            </Typography>
          </CardBody>
        </Card>
        
        ))}
      </section>
    </div>
  );
}

export default WhatsNew;
