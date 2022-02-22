import { styled } from "@css/theme.config"
import { motion } from "framer-motion"

export const LoginContainer = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  textAlign: "center",
  color: "$primary",
})

export const Emoji = styled(motion.img, {
  width: 100,
  height: 100,
})

export const LoginHeader = styled(motion.h1, {
  fontSize: "$5",
  margin: "50px 0 20px 0",
})

export const LoginText = styled(motion.p, {
  fontSize: "$4",
})

export const SocialContainer = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 50,
})

export const SocialLogin = styled(motion.div, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "$main",
  width: 300,
  color: "$white10",
  fontSize: "$2",
  padding: "15px 30px",
  borderRadius: 50,
  margin: "10px 0",
  userSelect: "none",
  svg: {
    marginRight: 15,
  },
  "&:hover": {
    cursor: "pointer",
  },
})
