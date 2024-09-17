import { Theme } from "@radix-ui/themes";

import Navigation from "@/components/common/navBar";
import MultiCarousal from "@/components/multiCarousal";
import AuthCard from "@/components/common/auth-card";



export default function Home() {
    return (
        <>
            <Theme>
                {/* <Navigation></Navigation>
                <MultiCarousal></MultiCarousal> */}
                <AuthCard/>
            </Theme>
        </>
    )
}