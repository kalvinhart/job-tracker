import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [query]);

  useEffect(() => {
    const matchTest = window.matchMedia(query);

    handleChange();

    if (matchTest.addListener) {
      matchTest.addListener(handleChange);
    } else {
      matchTest.addEventListener("change", handleChange);
    }

    return () => {
      if (matchTest.removeListener) {
        matchTest.removeListener(handleChange);
      } else {
        matchTest.removeEventListener("change", handleChange);
      }
    };
  }, [query, handleChange]);

  return matches;
};
