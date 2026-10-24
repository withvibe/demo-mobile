export type JobStatus = "scheduled" | "en_route" | "on_site" | "done";

export type Job = {
  id: string;
  customer: string;
  task: string;
  address: string;
  time: string;
  status: JobStatus;
  tech: string;
};

export const jobs: Job[] = [
  {
    id: "J-1042",
    customer: "Harbor Dental",
    task: "HVAC quarterly service",
    address: "12 Marina Ave",
    time: "08:30",
    status: "done",
    tech: "Dana",
  },
  {
    id: "J-1043",
    customer: "Nova Fitness",
    task: "Compressor replacement",
    address: "48 King St",
    time: "10:00",
    status: "on_site",
    tech: "Omar",
  },
  {
    id: "J-1044",
    customer: "Cedar House Café",
    task: "Walk-in cooler inspection",
    address: "3 Elm Square",
    time: "12:15",
    status: "en_route",
    tech: "Dana",
  },
  {
    id: "J-1045",
    customer: "Brightline Offices",
    task: "Thermostat install (x6)",
    address: "200 Summit Blvd",
    time: "14:00",
    status: "scheduled",
    tech: "Maya",
  },
  {
    id: "J-1046",
    customer: "Loft 29 Apartments",
    task: "Leak check, unit 7B",
    address: "29 Dockside Rd",
    time: "16:30",
    status: "scheduled",
    tech: "Omar",
  },
];

export const statusLabel: Record<JobStatus, string> = {
  scheduled: "Scheduled",
  en_route: "En route",
  on_site: "On site",
  done: "Done",
};
