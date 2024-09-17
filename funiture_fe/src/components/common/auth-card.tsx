import { Text, Strong, TextField, Button, Flex, Checkbox } from "@radix-ui/themes"
import { FaEnvelope, FaFacebookF, FaGoogle, FaLinkedinIn, FaLock } from 'react-icons/fa'

const AuthCard = () => {
    return (
        <>
        <main style={{background: "white", height: "100%", width: "100%", display: "flex", justifyContent: "center"}}>
            <div style={{background: "white",borderRadius: "30px", display: "flex", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", width: "66.6667%", maxWidth: "56rem"}}>
                <div style={{width: "60%",padding: "1.25rem" }}>
                    <div style={{paddingTop: "2.5rem", paddingBottom: "2.5rem"}}>
                        <h2 style={{display: "flex", justifyContent: "center", fontSize: "1.875rem", lineHeight: "2.25rem", fontWeight: "700", color: "#22c55e"}}>Sign in to Account</h2>
                        <div style={{border: "2px solid #22c55e",width: "2.5rem",display: "flex",justifyContent: "center",margin: "0.5rem auto"}}></div>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", marginTop: "0.5rem", marginBottom: "0.5rem"}}>
                        <a href='#' style={{border: "2px #e5e7eb solid",borderRadius: "50%", padding: "0.75rem",marginLeft: "0.5rem", marginRight: "0.5rem"}}>
                            <FaFacebookF fontSize="0.875rem" style={{lineHeight: "1.25rem"}}/>
                        </a>
                        <a href='#' style={{border: "2px #e5e7eb solid",borderRadius: "50%", padding: "0.75rem",marginLeft: "0.5rem", marginRight: "0.5rem"}}>
                            <FaGoogle fontSize="0.875rem" style={{lineHeight: "1.25rem"}}/>
                        </a>
                        <a href='#' style={{border: "2px #e5e7eb solid",borderRadius: "50%", padding: "0.75rem",marginLeft: "0.5rem", marginRight: "0.5rem"}}>
                            <FaLinkedinIn fontSize="0.875rem" style={{lineHeight: "1.25rem"}}/>
                        </a>
                    </div>
                    <p style={{color: "#9ca3af", display: "flex", justifyContent: "center"}}>or use your email account</p>
                    <form style={{display: "flex-column", justifyContent: "center", marginTop: "2rem"}}>
                    <div style={{ position: "relative", marginBottom: "1rem" }}>
                            <FaEnvelope style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
                            <TextField.Root radius="full" placeholder="Email" style={{ paddingLeft: "2.5rem", width: "100%" }} />
                        </div>
                        <div style={{ position: "relative", marginBottom: "1rem" }}>
                            <FaLock style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
                            <TextField.Root radius="full" placeholder="Password" style={{ paddingLeft: "2.5rem", width: "100%" }} />
                        </div>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", justifyContent: "space-between" }}>
                            <li style={{ display: "inline-block", textAlign: "right", marginRight: "1rem" }}>
                            <Text as="label" size="3">
                                <Flex gap="2">
                                    <Checkbox defaultChecked />
                                    Remember me
                                </Flex>
                            </Text>
                            </li>
                            <li style={{ display: "inline-block", textAlign: "left" }}>
                                <a href='#'>Forgot Password?</a>
                            </li>
                        </ul>

                        <div style={{display: "flex", justifyContent: "center"}}>
                        <a
                            href='#'
                            style={{border: "2px white solid", borderRadius: "9999px", paddingLeft: "3rem", 
                            paddingRight: "3rem", paddingTop: "8px", paddingBottom: "8px", 
                            display: "flex", fontWeight: "600", marginTop: "3rem", justifyContent: "center", background: "#22c55e", color: "white"}}>Sign In</a>
                        </div>
                    </form>
                </div>
                <div style={{width: "40%", backgroundColor: "#22c55e", color: "#ffffff", borderTopRightRadius: "1.5rem", paddingTop: "9rem", paddingBottom: "9rem", paddingLeft: "3rem", paddingRight: "4rem"}}>
                    <h2 style={{fontSize: "1.875rem", fontWeight: "700", marginBottom: "0.5rem", justifyContent: "center", alignItems: "center", display: "flex"}}>Hello, Friends!</h2>
                    <div style={{border: "2px solid white",width: "2.5rem",display: "flex",justifyContent: "center",margin: "0.5rem auto"}}></div>
                    <p style={{marginBottom: "0.5rem", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "3rem"}}>Fill up personal information and start journey with us.</p>
                    <a
                     href='#'
                     style={{border: "2px white solid", borderRadius: "9999px", paddingLeft: "3rem", 
                     paddingRight: "3rem", paddingTop: "8px", paddingBottom: "8px", 
                     display: "flex", fontWeight: "600", marginTop: "5rem", justifyContent: "center"}}>Sign Up</a>
                </div>
            </div>
        </main>    
        </>
    )
}

export default AuthCard;