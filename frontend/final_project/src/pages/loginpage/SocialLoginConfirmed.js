
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { goToHome, SetUserInfoToCookie, setUserInfoToLocalstorage } from '../../apiEndPoints/ApiEndPoints';
import { ACCESS_TOKEN } from '../../apiEndPoints/constants'





export const SocialLoginConfirmed = (props) => {
    let params = (new URL(document.location)).searchParams;
    let token = params.get("token");
    const navigate = useNavigate();
        setUserInfoToLocalstorage()
        localStorage.setItem(ACCESS_TOKEN, token);
        

    return (
    <div>로그인을 축하드립니다!</div>
  )
}

