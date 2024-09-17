import Image from 'next/image'

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, IconButton, TabNav } from "@radix-ui/themes";

import styles from '../common/navBar.module.scss'

export default function NavBar() {
    return (
        <>
            <TabNav.Root className={styles.navRoot}>
                <div className={styles.navColumn1}>
                    <TabNav.Link href="/" active>
                        Home
                    </TabNav.Link>
                    <TabNav.Link href="#">Collection</TabNav.Link>
                    <TabNav.Link href="/cartHistory">Cart</TabNav.Link>
                    <TabNav.Link href="/imageUpload">Contact</TabNav.Link>
                </div>
                <div className={styles.navColumn2}>
                    <TabNav.Link href="#" className={styles.logo}>
                        <Image
                            src="/images/armchair.png"
                            alt="logo"
                            height={50}
                            width={50}/>
                    </TabNav.Link>
                </div>
                <div className={styles.navColumn3}>
                    <TabNav.Link href="#">Shops</TabNav.Link>
                    <TabNav.Link href="#">
                        <IconButton color="gray" variant="soft" highContrast>
                            <MagnifyingGlassIcon width="18" height="18" />
                        </IconButton>
                    </TabNav.Link>
                    <TabNav.Link href="#">
                        <Avatar
                            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                            fallback="A"
                            radius="full"
                        />
                    </TabNav.Link>
                </div>
            </TabNav.Root>
        </>
    )
}