export interface ResumeData {
  personal_information: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    dates: string;
    location: string;
    responsibilities: string[];
  }>;
  education: Array<{
    degree: string;
    university?: string;
    school?: string;
    dates: string;
    location: string;
    gpa?: string;
    ssle?: string;
  }>;
  skills: string[];
  references: Array<{
    name?: string;
    title?: string;
    company?: string;
    phone?: string;
    email?: string;
    note?: string;
  }>;
}

export const resumeData: ResumeData = {
  personal_information: {
    name: "Ebenezer Abebe",
    title: "Marketing Manager",
    location: "Addis Abeba",
    phone: "+251943313116",
    email: "ebenezerabebe.work@gmail.com",
    linkedin: "http://www.linkedin.com/in/ebenezer-abebe"
  },
  summary: "Recent Marketing Management graduate with practical experience in sales and event organizing. Skilled in CRM, Microsoft Office Suite, and Google Docs. Fluent in both Amharic and English with basic proficiency in German. Seeking opportunities in marketing, sales and event planning.",
  experience: [
    {
      title: "Sales Intern",
      company: "Teleport Technologies Plc",
      dates: "DECEMBER 2023 - JULY 2024",
      location: "DIRE DAWA",
      responsibilities: [
        "Registered Telebirr merchants and agents, contributing significantly to customer acquisition efforts.",
        "Assisted in safety net programs in rural areas.",
        "Sold SIM cards."
      ]
    }
  ],
  education: [
    {
      degree: "Degree in Marketing Management",
      university: "Dire Dawa University",
      dates: "JULY 2021 - JULY 2024",
      location: "DIRE DAWA",
      gpa: "3.54 (Graduated with Distinction)"
    },
    {
      degree: "Diploma",
      school: "Saint Joseph School",
      dates: "FINISHED ON JULY 2020",
      location: "ADDIS ABEBA",
      ssle: "537"
    }
  ],
  skills: [
    "Event Organizing",
    "CRM Management",
    "Microsoft Office Suite",
    "Google Docs",
    "Amharic (Native)",
    "English (Fluent)",
    "German (Basic)",
    "Communication",
    "Sales Strategy",
    "Customer Acquisition"
  ],
  references: [
    {
      name: "Mr. Leulekal Zelalem",
      title: "Regional Sales Manager",
      company: "Teleport Technologies Plc.",
      phone: "+251911234567"
    }
  ]
};