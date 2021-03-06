import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from '../historyRequisition/goToPages'

export const useProtectPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    token || goToLoginPage(history)
  }, [history])
};
