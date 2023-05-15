import "./css/style.css"
import { Route, Routes, } from "react-router-dom"
import axios from "axios"

import API from "./axios/axios"
import { allView, createView } from "./axios/url"

import Main from "./pages/MAIN"
import ADMIN__MAIN from "./admin/pages/ADMIN__MAIN";
// import AboutAdmin from "./admin/pages/about/ADDABOUT";
// import EducationAdmin from "./admin/pages/education/ADDEDUCATION";
// import SkillAdmin from "./admin/pages/skill/ADDSKILL";
// import PortfolioAdmin from "./admin/pages/portfolio/ADDPORTFOLIO";
// import ExperienceAdmin from "./admin/pages/experience/ADDEXPERIENCE";
// import About from "./admin/pages/about/ABOUT";
// import Education from "./admin/pages/education/EDUCATION";
// import Skill from "./admin/pages/skill/SCKILL";
// import Portfolio from "./admin/pages/portfolio/PORTFOLIO";
// import Experience from "./admin/pages/experience/EXPERIENCE";

// import UpdateAbout from "./admin/pages/about/EDITABOUT";
// import UpdateEducation from "./admin/pages/education/EDITEDUCATION";
// import UpdateSkills from "./admin/pages/skill/EDITSKILL";
// import UpdatePortfolio from "./admin/pages/portfolio/EDITPORTFOLIO";
// import UpdateExperience from "./admin/pages/experience/EDITEXPERIENCE";

import REGISTER from "./auth/REGISTER"
import LOGIN from "./auth/LOGIN"
import { USERS } from "./util/export__user__data"
import ADMIN__ABOUT from "./admin/pages/ADMIN__ABOUT"

function App() {

    // let bool = true
    // const getData = async () => {
    //     const res = await axios.get('https://geolocation-db.com/json/')
        
    //     const view = API.get(allView)
        
    //     for (let i of (await view).data) if (i.ip === res.data.IPv4) bool = false
        
    //     if (bool) API.post(createView, {"ip": res.data.IPv4})         
    // }
    
    // getData()

//     let q = JSON.parse(localStorage.getItem("country"))
//     let w = []
//     for (let i = 0; i < q.length; i++) {
//         let k = {
//             "common": String(q[i]?.name?.common),
//             "official": String(q[i]?.name?.official),
//             "cca2": String(q[i]?.cca2),
//             "cca3": String(q[i]?.cca3),
//             "capital": String(q[i]?.capital),
//             "region": String(q[i]?.region),
//             "maps": String(q[i]?.maps?.googleMaps),
//             "openStreetMaps": String(q[i]?.maps?.openStreetMaps),
//             "flags": {
//                 "png": String(q[i]?.flags?.png),
//                 "svg": String(q[i]?.flags?.svg)
//             },
//             "block": false,
//             "visitTotal": 0
//         }
//         w.push(k)
//     }

//     console.log(w)
    
//    localStorage.setItem("filter__country", JSON.stringify(w))
  
    return (
            <Routes>
                <Route path="/" element={<Main />} />

                {/* 
                    Auth section

                */}


                <Route path="/login" element={<LOGIN />} />
                <Route path="/register" element={<REGISTER />} />

                {/* 
                
                    Admin's About Section
                
                */}

                <Route path={`/admin/${USERS?.username}/about`} element={<ADMIN__ABOUT />} />
        
                {/* <Route path="/about/admin" element={<About />} />
                <Route path="/about/create/admin" element={<AboutAdmin /> } />
                <Route path="/about/update/admin" element={<UpdateAbout />} />
        
        
                <Route path="/education/admin" element={<Education />} />
                <Route path="/education/create/admin" element={<EducationAdmin />} />
                <Route path="/education/update/admin/:id" element={<UpdateEducation />} />
        
        
                <Route path="/skill/admin" element={<Skill />} />
                <Route path="/skill/create/admin" element={<SkillAdmin />} />
                <Route path="/skill/update/admin/:id" element={<UpdateSkills />} />
        
                <Route path="/portfolio/admin" element={<Portfolio />} />
                <Route path="/portfolio/create/admin" element={<PortfolioAdmin />} />
                <Route path="/portfolio/update/admin/:id" element={<UpdatePortfolio />} />
        
                <Route path="/experience/admin" element={<Experience />} />
                <Route path="/experience/create/admin" element={<ExperienceAdmin />} />
                <Route path="/experience/update/admin/:id" element={<UpdateExperience/>} /> */}

                <Route path={`/admin/${USERS?.username}`} element={<ADMIN__MAIN />} />
            </Routes>
    )
}

export default App