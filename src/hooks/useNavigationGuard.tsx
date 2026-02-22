"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

type NavigationGuardContextType = {
  navigate: (to: string) => void;
  registerGuard: (onBlock: () => void) => () => void;
  proceed: () => void;
};

const NavigationGuardContext = createContext<NavigationGuardContextType | null>(
  null
);

export const NavigationGuardProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [guard, setGuard] = useState<(() => void) | null>(null);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);

  const navigate = useCallback(
    (to: string) => {
      if (guard) {
        setPendingNavigation(to);
        guard();
      } else {
        router.push(to);
      }
    },
    [guard, router]
  );

  const registerGuard = useCallback((onBlock: () => void) => {
    setGuard(() => onBlock);
    return () => setGuard(null);
  }, []);

  const proceed = useCallback(() => {
    if (pendingNavigation) {
      const destination = pendingNavigation;
      setPendingNavigation(null);
      setGuard(null);
      router.push(destination);
    }
  }, [pendingNavigation, router]);

  useEffect(() => {
    if (!guard) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      return "";
    };

    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
      setPendingNavigation("/");
      guard();
    };

    window.history.pushState(null, "", window.location.href);

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [guard]);

  return (
    <NavigationGuardContext.Provider value={{ navigate, registerGuard, proceed }}>
      {children}
    </NavigationGuardContext.Provider>
  );
}

export const useNavigationGuard = () => {
  const context = useContext(NavigationGuardContext);
  if (!context) {
    throw new Error(
      "useNavigationGuard must be used within NavigationGuardProvider"
    );
  }
  return context;
};
