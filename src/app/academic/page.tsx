import { ScrollWrapper } from "@/components/ScrollWrapper/ScrollWrapper"
import ExtraActivities from "@/sections/academic/extraActivities/ExtraActivities"
import Volunteer from "@/sections/academic/volunteer/Volunteer"

export default function AcademicPortfolio() {
    return (
        <ScrollWrapper>
            <ExtraActivities />
            <Volunteer />
        </ScrollWrapper>
    )
}
