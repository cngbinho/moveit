import { createContext, ReactNode, useEffect, useState } from 'react';

interface ChallengesContextData {
  level: number, 
}

interface ChallengeProviderProps {
  children: ReactNode;
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export const AuthContext = createContext({} as ChallengesContextData);

export function AuthProvider({ children, ...rest }: ChallengeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  
  console.log(rest);

  return (
    <AuthContext.Provider 
      value={{ 
        level
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}