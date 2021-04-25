import Index from "backend/views/Index.js";
import Maps from "backend/views/examples/Maps.js";
import Tables from "backend/views/examples/Tables.js";
import Icons from "backend/views/examples/Icons.js";
import UsersList from "backend/views/examples/UsersList.js";
import ListJobs from "backend/views/GJob/ListJobs";
import activatedJobs from "backend/views/GJob/activatedJobs";
import deactivatedJobs from "backend/views/GJob/deactivatedJobs";
import JobDetails from "backend/views/GJob/JobDetails";
import Ranking from "backend/views/GJob/ranking";
import scraping from "backend/views/examples/scrapping";
import JobDetailsDesap from"backend/views/GJob/JobDetailsDesap";
import PostJob from "backend/views/GJob/PostJob";
import ListJobsNonApp from "backend/views/GJob/ListJobsNonApp";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  /*{
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },*/
  {
    path: "/UsersList",
    name: "UsersList",
    icon: "ni ni-circle-08 text-purple",
    component: UsersList,
    layout: "/admin",
  },
  {
    path: "/ListJobs",
    name: "Jobs",
    icon: "ni ni-circle-08 text-pink",
    component: ListJobs,
    layout: "/admin",
  },
  {
    path: "/ListJobsNonApp",
    name: "List Jobs Non Approved",
    //icon: "ni ni-circle-08 text-pink",
    component: ListJobsNonApp,
    layout: "/admin",
  },
  {
    path: "/activatedJobs",
    //name: "activatedJobs",
    component: activatedJobs,
    layout: "/admin",
  },
  {
    path: "/deactivatedJobs",
    //name: "deactivated Jobs",
    component: deactivatedJobs,
    layout: "/admin",
  },
  {
    path: "/jobDetails/:id", 
    name: "Job Details",
    component: JobDetails,
    layout: "/admin",
  },
  {
    path: "/JobDetailsDesap",
    name: "Job Details Desappprove",
    component: JobDetailsDesap,
    layout: "/admin",
  },
  {
    path: "/Ranking",
    name: "Ranking",
    component: Ranking,
    layout: "/admin",
  },
  {
    path: "/PostJob",
    name: "PostJob",
    component: PostJob,
    layout: "/admin",
  },
  {
    path: "/scrapping",
    name: "scrapping",
    icon: "ni ni-planet text-blue",
    component: scraping,
    layout: "/admin",
  },

];
export default routes;
