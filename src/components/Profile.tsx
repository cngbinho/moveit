import { useContext } from 'react';

import { useSession, signIn, signOut} from 'next-auth/client';

import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  const [session] = useSession();

  const handleSignOut = () => {
    signOut({callbackUrl: '/auth/signin', redirect: true})
  }

  const handleSignIn = () => {
    signOut();
  }

  return (
    <div className={styles.profileContainer}>
      <img src={session && session.user.image } alt="Robson Sousa"/>
      <div>
        <strong> {session && session.user.name } </strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
        <button type="button" onClick={handleSignOut}>
          Teste Login Auth
        </button>
      </div>
    </div>
  );
}