import { useEffect } from 'react';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import { useSession, signOut} from 'next-auth/client'
import { addHours } from 'date-fns'

import { Loading } from '../components/Loading';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperinceBar";
import { Profile } from '../components/Profile';

import { CountdownProvider } from '../contexts/CountdownContexts';
import { ChallengeProvider } from '../contexts/ChallengesContexts';

import styles from '../styles/pages/home.module.css';

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {

  const [session, loading] = useSession();

  const handleSignOut = () => {
    signOut()
  }

  let data = addHours(new Date(), 3);
  console.log('session: ', session, ' loading: ', loading, data);

  // useEffect(() => {
  //   console.log()

  //   if(!loading) {
  //     console.log('aqui 1')
  //     if(session == undefined && session == null) {
  //       console.log('aqui 2')
  //       Router.push('/auth/signin');
  //     } else {
  //       if (new Date(session.expires) < data) {
  //         console.log('aqui 3')
  //         Router.push('/auth/signin');
  //       }
  //     }
  //   }
  // }, [loading]);


  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      { !session ? 
        <Loading /> : 
        (
          <div className={styles.container}>
              <Head>
                <title>Inicio | move.it</title>
              </Head>

              <ExperienceBar />

              <CountdownProvider>
                <section>
                  <div>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                  </div>
                  <div>
                    <ChallengeBox />
                  </div>
                </section>
              </CountdownProvider>
          </div>  
        ) 
      }
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
