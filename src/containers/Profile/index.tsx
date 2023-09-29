import { Card, Button, Typography, Space } from 'antd'
import { } from 'formik'
import { useNavigate } from 'react-router-dom'
import { ProfileForm as ProfileFormProps } from '../../types';
import { useFetchData } from '../../components/hooks'


const Profile = () => {
    const navigate = useNavigate()
    const validate = localStorage.getItem('token');
    const ProfileData  = useFetchData<ProfileFormProps>({
    url: 'https://mock-api.arikmpt.com/api/user/profile',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${validate}`,
    },
  });
    const { data: profileData } = ProfileData;

    return (
        <Card title='Profile' bordered style={{
            maxWidth: "400px",
            width: "100%",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"}}>
            <div>
                <div style={{ marginBottom: '20px'}}>
                    <Typography.Paragraph style={{marginBottom: '0px'}}>{'ID'}</Typography.Paragraph>
                    {profileData?.id || ''}
                </div>
                <div style={{ marginBottom: '20px'}}>
                    <Typography.Paragraph style={{marginBottom: '0px'}}>{'NAME'}</Typography.Paragraph>
                    {profileData?.name || ''}
                </div>
                <div style={{ marginBottom: '30px'}}>
                    <Typography.Paragraph style={{marginBottom: '0px'}}>{'EMAIL'}</Typography.Paragraph>
                    {profileData?.email || ''}
                </div>
                <Space>
                    <Button type='primary' onClick={() => navigate('/dashboard')} htmlType="button" title="back">BACK</Button>
                </Space>               
            </div>
        </Card>
    )
}

export default Profile