// NOTIFICATIONS. Plain entries, edited by hand. The page is built from this file.
// There is no database and no admin: edit, save, rebuild.
//
// Fields:
//   id        unique
//   date      'YYYY-MM-DD'  (publication date; newest shown first)
//   type      one of: 'call-experts' | 'call-project' | 'postponed' | 'cancelled'
//                     | 'erasmus-partners' | 'deadline' | 'announcement'
//   title     { sq, en }
//   body      { sq, en }  paragraphs separated by a blank line (\n\n)
//   deadline  optional 'YYYY-MM-DD'. When this day has passed the item is marked "Deadline passed".
//   link      optional { url, label: { sq, en } }  shows a button
//   status    'open' | 'closed' | 'postponed' | 'cancelled'
//   sample    true on demo entries. Delete the whole entry (or set sample to false) before launch.
//
// DEMO ENTRIES BELOW ARE SAMPLES with invented text so you can see the filters and expired states.
// Delete them, then add real notifications at the top of the list.

export const notifications = [
  {
    id: 'sample-1',
    sample: true,
    date: '2026-10-12',
    type: 'call-experts',
    status: 'open',
    deadline: '2026-12-15',
    title: {
      sq: 'SHEMBULL: Thirrje për ekspertë të komunikimit dixhital',
      en: 'SAMPLE: Call for digital communication experts',
    },
    body: {
      sq: 'Ky është një njoftim shembull. Këtu shkruhet përshkrimi i plotë i thirrjes: detyrat, kërkesat dhe mënyra e aplikimit.\n\nFshije këtë hyrje para publikimit.',
      en: 'This is a sample notification. The full description of the call goes here: tasks, requirements and how to apply.\n\nDelete this entry before launch.',
    },
    link: { url: 'mailto:qendrakazus@gmail.com', label: { sq: 'Apliko me email', en: 'Apply by email' } },
  },
  {
    id: 'sample-2',
    sample: true,
    date: '2026-10-05',
    type: 'erasmus-partners',
    status: 'open',
    deadline: '2026-11-30',
    title: {
      sq: 'SHEMBULL: Kërkojmë partnerë për një projekt Erasmus+',
      en: 'SAMPLE: Looking for partners for an Erasmus+ project',
    },
    body: {
      sq: 'Njoftim shembull për thirrje ekipesh ose partnerësh Erasmus+. Shkruani temën, vendet e kërkuara dhe afatin.',
      en: 'Sample notification for a call for Erasmus+ teams or partners. State the topic, the countries sought and the deadline.',
    },
  },
  {
    id: 'sample-3',
    sample: true,
    date: '2026-09-20',
    type: 'call-project',
    status: 'closed',
    deadline: '2026-10-10',
    title: {
      sq: 'SHEMBULL: Thirrje për projekt të ri rinor (afati ka kaluar)',
      en: 'SAMPLE: Call for a new youth project (deadline passed)',
    },
    body: {
      sq: 'Shembull i një njoftimi me afat të kaluar. Faqja e shënon automatikisht si të përfunduar.',
      en: 'Example of a notification whose deadline has passed. The page marks it automatically as ended.',
    },
  },
  {
    id: 'sample-4',
    sample: true,
    date: '2026-09-10',
    type: 'postponed',
    status: 'postponed',
    title: {
      sq: 'SHEMBULL: Aktiviteti i shtyrë për datë të re',
      en: 'SAMPLE: Activity postponed to a new date',
    },
    body: {
      sq: 'Shembull njoftimi për projekt ose aktivitet të shtyrë. Shkruani arsyen dhe datën e re kur ajo dihet.',
      en: 'Sample notice for a postponed project or activity. Give the reason and the new date when known.',
    },
  },
  {
    id: 'sample-5',
    sample: true,
    date: '2026-08-25',
    type: 'cancelled',
    status: 'cancelled',
    title: {
      sq: 'SHEMBULL: Aktivitet i anuluar',
      en: 'SAMPLE: Cancelled activity',
    },
    body: {
      sq: 'Shembull njoftimi për projekt ose aktivitet të anuluar.',
      en: 'Sample notice for a cancelled project or activity.',
    },
  },
  {
    id: 'sample-6',
    sample: true,
    date: '2026-08-15',
    type: 'announcement',
    status: 'open',
    title: {
      sq: 'SHEMBULL: Njoftim i përgjithshëm',
      en: 'SAMPLE: General announcement',
    },
    body: {
      sq: 'Shembull njoftimi të përgjithshëm, p.sh. orare, ngjarje ose lajme nga zyra.',
      en: 'Sample general announcement, e.g. opening hours, events or news from the office.',
    },
  },
  {
    id: 'sample-7',
    sample: true,
    date: '2026-08-01',
    type: 'deadline',
    status: 'closed',
    deadline: '2026-09-01',
    title: {
      sq: 'SHEMBULL: Afati për dorëzimin e aplikimeve',
      en: 'SAMPLE: Application submission deadline',
    },
    body: {
      sq: 'Shembull i një afati që ka kaluar tashmë.',
      en: 'Example of a deadline that has already passed.',
    },
  },
]
