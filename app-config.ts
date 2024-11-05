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
    tel: { long: "+1 (585) 606-8655", short: "+15856068655" },
    instagram: {
      username: "tylertech",
      url: "https://www.instagram.com/tylertech200/profilecard/?igsh=MXN4dWNzNWVsMnI1MQ==",
    },
    whatsapp: "https://wa.link/3bugce",
    email: "",
  },
};

export default CONFIG;
