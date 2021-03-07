import { providers, signIn } from 'next-auth/client'

import styles from  '../../styles/pages/Signin.module.css';

interface provider {
  callbackUrl: string,
  id: string,
  name: string,
  signinUrl: string,
  type: string
}

export default function SignIn({ providers }) {

  const handleSignin = (provider) => {
    signIn(provider.id)
  }

  return (
    <>
      {Object.values(providers).map((provider: provider) => (
        <div key={provider.id} className={styles.signinContainer} >
          <div className={styles.left}>
            <img src="../icons/simbolo.svg" alt="github"/>
          </div>

          <div className={styles.right}>
            <div>
              <header>
                <img src="../icons/logo.svg" alt="logo moveit"/>
              </header>
              <main>
                <span>Bem-vindo</span>
                {/* <div className={styles.welcome}>
                  <img src="../icons/github.svg" alt="github"/>
                  <span>Faça login com seu Github para começar</span>
                </div> */}
                {/* <div className={styles.signin}>
                  <input placeholder="Digite seu username" onKeyUp={onInputUser}/>
                  <button onClick={() => signIn(provider.id, {user: username})} > 
                    <img src="../icons/arrow.svg" alt=""/>
                  </button>
                </div> */}
                <div className={styles.signin}>
                  <button type='button' className={styles.welcome} onClick={() => handleSignin(provider)}>
                    <img src="../icons/github.svg" alt="github"/>
                    <span>Fazer login com Github</span>
                  </button>
                </div>
                  {/* <button onClick={() => signIn(provider.id, {user: username})} > 
                    <img src="../icons/arrow.svg" alt=""/>
                  </button> */}
              </main>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers()
  }
}