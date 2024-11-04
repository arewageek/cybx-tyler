interface IStats {
  field: string;
  value: string | number;
}

interface IServices {
  icon?: any;
  title: string;
  desc: string;
}

interface ITestimonials {
  review: string;
  stars: number;
  client: {
    photo: string;
    name: string;
    role: string;
    org: string;
  };
}

interface IContact {
  tel: { long: string; short: string };
  whatsapp: string;
  instagram: { username: string; url: string };
  email: "";
}

interface IConfig {
  appName: string;
  brand: {
    age: number;
    startDate: number;
  };
  stats: IStats[];
  services?: IServices[];
  testimonials?: ITestimonials[];
  contact: IContact;
}

const CONFIG: IConfig = {
  appName: "Tyler Tech0",
  brand: {
    age: 13,
    startDate: 2011,
  },
  stats: [
    { field: "Projects", value: 10 },
    { field: "Years of Experience", value: 13 },
    { field: "Clients", value: 10 },
  ],
  contact: {
    tel: { long: "", short: "" },
    instagram: {
      username: "tylertech",
      url: "https://www.instagram.com/tylertech",
    },
    whatsapp: "330303",
    email: "",
  },
};

export default CONFIG;
