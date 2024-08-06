const corsOptions = {
    origin: [
     "https://chat-frontend-bb6v-git-main-raj9523s-projects.vercel.app" ,
      process.env.CLIENT_URL,

    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  };
  
  const CHATTU_TOKEN = "chattu-token";
  
  export { corsOptions, CHATTU_TOKEN };