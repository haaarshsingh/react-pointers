import React from "react"

import { motion } from "framer-motion"

import * as S from "./Nav.style"

import { icon } from "@anims/nav"
import { FadeContainer, FadeReverse } from "@anims/index"

const Nav: React.FC = () => {
  return (
    <S.Nav>
      <S.Container href="/">
        <Logo />
        <S.Logomark>Groovi</S.Logomark>
      </S.Container>
      <S.Container>
        <S.Button coloured href="/signup">
          Get Started
        </S.Button>
        <S.Button href="/login">Login</S.Button>
      </S.Container>
    </S.Nav>
  )
}

const Logo: React.FC = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 85 149"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M78.269 14.2287L84.2341 6.16572C86.1255 3.60911 84.2987 0 81.1068 0H26.6206C11.1383 0 -22.113 40.1809 22.0434 64.576C25.0036 66.2114 28.4056 66.9657 31.7861 66.766C72.3513 64.3703 69.5694 33.4016 62.7413 17.6088H71.5483C74.2017 17.6088 76.6968 16.3539 78.269 14.2287Z"
        fill="#ffffff"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M12.719 58.6753L14.1755 57.66C16.739 56.8746 28.9652 55.775 57.3615 57.66C56.2567 61.945 37.2475 68.2637 25.4157 68.2637C23.0493 68.2637 22.4578 75.3328 25.4157 75.3328H71.0753C75.2947 75.3328 77.9777 79.8213 75.9612 83.5068L43.4452 142.936C39.1307 150.822 27.8345 151.067 23.1779 143.376L4.74128 112.926C1.3459 107.318 5.4076 100.172 11.9905 100.172C14.8322 100.172 17.4841 101.591 19.0505 103.948L33.6979 125.995L53.2204 90.6491H26.8783C20.4871 90.6491 14.5865 87.2418 11.419 81.7221L8.6233 76.8502C5.06474 70.6491 6.83947 62.7736 12.719 58.6753Z"
        fill="#ffffff"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
    </svg>
  )
}

export default Nav
