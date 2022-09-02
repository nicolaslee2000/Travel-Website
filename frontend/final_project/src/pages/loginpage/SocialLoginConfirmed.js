
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { SetUserInfoToCookie } from '../../ApiConnect/ApiEndPoints';
import { ACCESS_TOKEN } from '../../ApiConnect/constants'





export const SocialLoginConfirmed = (props) => {
    let params = (new URL(document.location)).searchParams;
    let token = params.get("token");
    const [cookie,setCookie,removeCookie] = useCookies(['this_is_login'])
    const navigate = useNavigate();
        SetUserInfoToCookie()
        setCookie('this_is_login',1,{path:'/'}) //로그인 여부 확인용 쿠키
        localStorage.setItem(ACCESS_TOKEN, token);
        navigate("/");
    return (

    <div>로그인 축하</div>

  )
}
