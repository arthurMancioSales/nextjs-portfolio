import { ScrollWrapper } from "@/components/ScrollWrapper/ScrollWrapper"
import Achievements from "@/sections/academic/achievements/Achievements"
import ExtraActivities from "@/sections/academic/extraActivities/ExtraActivities"
import Volunteer from "@/sections/academic/volunteer/Volunteer"

export default function AcademicPortfolio() {
    return (
        <ScrollWrapper>
            <ExtraActivities />
            <Volunteer />
            <Achievements />
        </ScrollWrapper>
    )
}
