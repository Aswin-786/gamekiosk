import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import axios from "axios";
import { BASE_URL } from "../shared/config";

const InitUser = () => {
    const setUser = useSetRecoilState(userState);
    useEffect(() => {
      const checkProfile = async () => {
        try {
            const result = await axios.get(`${BASE_URL}/test/Users?id=ec14dcc2-304d-4052-a177-01d68dd6a952`, {
                headers: {
                  'Content-Type': 'application/json',
                }
              });
              
          if (result != null) {
            console.log(result);
            setUser({
              userName: result,
              userId: result,
              perPersonCost: null ,
              version: null,
              performance: null,
            });
          }
        } catch (error) {
          setUser({
            userName: null,
            userId: null,
            perPersonCost: null ,
            version: null,
            performance: null,
          });
        }
      };
      checkProfile();
    }, []);
  return (
    <></>
  )
}

export default InitUser