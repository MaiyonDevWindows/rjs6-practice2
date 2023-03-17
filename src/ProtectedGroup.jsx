import { useNavigate } from 'react-router-dom';
const ProtectedGroup = ({ isMember, children }) => {
    const navigate = useNavigate();
    const handleRedirectUser = () => {
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }
    if (!isMember) {
        handleRedirectUser();
        return (
            <div>
                <div>Bạn không phải là thành viên của nhóm này.</div>
                <div>Bạn sẽ được chuyển hướng về trang chủ sau 3s.</div>
            </div>
        )
    }
    return <div>{children}</div>
}
export default ProtectedGroup;