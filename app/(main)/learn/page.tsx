import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wraper";
import { Header } from "./header";
import { UserProgress } from "./user-progress";
import { title } from "process";

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-12 px-6">
            <StickyWrapper>
                <UserProgress activeCourse={{title: "Spanish", imageSrc: "/flag_spain.png"}} hearts={5} points={100} hasActiveSubscription={false} />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Spanish"/>
            </FeedWrapper>

        </div>
    )
}

export default LearnPage;