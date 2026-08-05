import { createContext, useContext } from "react";

interface DashboardMenuContextValue {
  openMenu: () => void;
}

export const DashboardMenuContext = createContext<DashboardMenuContextValue>({
  openMenu: () => {},
});

export function useDashboardMenu() {
  return useContext(DashboardMenuContext);
}