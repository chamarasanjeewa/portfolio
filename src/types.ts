export interface CareerInfoType {
  title?: string;
  companyName?: string;
  time?: string;
  client?: string;
  experience?: string[];
  technologies?: string[];
}

export interface Education {
  title: string;
  institute: string;
  time: string;
}

export interface Technologies {
  name: string;
  type: string;
  icon: string;
}

export interface Projects {
  name: string;
  client: string;
  clientOrigin: string;
  logo: string;
  technologies: string[];
}

export interface CareerInfoResult {
  careerInfo: CareerInfoType[];
  education: Education[];
  technologies: Technologies[];
  projects: Projects[];
  loading: boolean;
}
