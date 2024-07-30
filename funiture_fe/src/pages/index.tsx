import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import '../styles/Home.module.css';
import Navigation from "@/components/common/navBar";

export default function Home() {
  return (
    <>
     <Theme>
      <Navigation></Navigation>
     </Theme>
    </>
  );
}
