
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { goToHome, SetUserInfoToCookie, setUserInfoToLocalstorage } from '../../apiEndPoints/ApiEndPoints';
import { ACCESS_TOKEN } from '../../apiEndPoints/constants'





export const SocialLoginConfirmed = (props) => {
  let params = (new URL(document.location)).searchParams  
  let token = params.get("token")

    const navigate = useNavigate()

    localStorage.setItem(ACCESS_TOKEN, token)
    
    /**
    *  에러 분기 처리
     */

    setUserInfoToLocalstorage()
    
    setTimeout(() => {
      goToHome()
    }, 2000);
    
    
    return (
    <div>로그인을 축하드립니다! 2초후 자동으로 메인으로 돌아갑니다.</div>
  )
}

