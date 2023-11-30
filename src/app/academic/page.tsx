import { ScrollWrapper } from "@/components/ScrollWrapper/ScrollWrapper"
import ExtraActivities from "@/components/sections/academic/extraActivities/ExtraActivities"
import Volunteer from "@/components/sections/academic/volunteer/Volunteer"

export default function AcademicPortfolio() {
    return (
        <ScrollWrapper>
            <ExtraActivities />
            <Volunteer />
            <section className="w-screen h-[90vh]">
                <iframe
                    src="https://www.theasys.io/viewer/yojCmz79JtQj5cjh8ewURw6BLiwczo"
                    allow="vr;gyroscope;accelerometer"
                    width={"100%"}
                    height={"100%"}
                />
            </section>
            <Volunteer />
        </ScrollWrapper>
    )
}
