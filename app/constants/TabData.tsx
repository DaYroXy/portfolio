import SkillSection from "../components/SkillSection";

import Languages from "./Languages";
import Technologies from "./Technologies";
import CyberSecurity from "./CyberSecurity";
import OperatingSystems from "./OperatingSystems";
import Education from "./Education";
import Servers from "./Servers";

const TabData = [
    {
        id: "Languages",
        content: <SkillSection skills={Languages.skills} color={Languages.color} border={Languages.border} />
    },
    {
        id: "Technologies",
        content: <SkillSection skills={Technologies.skills} color={Technologies.color} border={Technologies.border} />
    },
    {
        id: "Cyber Security",
        content: <SkillSection skills={CyberSecurity.skills} color={CyberSecurity.color} border={CyberSecurity.border} />
    },
    {
        id: "Operating Systems",
        content: <SkillSection skills={OperatingSystems.skills} color={OperatingSystems.color} border={OperatingSystems.border} />
    },
    {
        id: "Servers",
        content: <SkillSection skills={Servers.skills} color={Servers.color} border={Servers.border} />
    },
    {
        id: "Education",
        content: <SkillSection skills={Education.skills} color={Education.color} border={Education.border} />
    },
]

export default TabData
