import React from "react"

import * as S from "./Login.style"
import * as anims from "@anims/index"

import { signIn } from "next-auth/react"
import { Provider } from "next-auth/providers"

const Login: React.FC<{ provider: Provider }> = ({ provider }) => {
  return (
    <S.LoginContainer
      variants={anims.FadeContainer}
      initial="hidden"
      animate="visible"
    >
      <S.Emoji
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        src="http://cdn.shopify.com/s/files/1/1061/1924/products/Waving_Hand_Sign_Emoji_Icon_ios10_grande.png"
        alt="wave"
        draggable={false}
      />
      <S.LoginHeader variants={anims.Fade}>What's Up?</S.LoginHeader>
      <S.LoginText variants={anims.Fade}>
        Let's create something cool!
      </S.LoginText>
      <S.SocialContainer>
        {Object.values(provider).map((provider, index) => (
          <S.SocialLogin
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => signIn(provider.id)}
            variants={anims.Fade}
            key={index}
          >
            Continue With {provider.name}
          </S.SocialLogin>
        ))}
      </S.SocialContainer>
    </S.LoginContainer>
  )
}

export default Login
