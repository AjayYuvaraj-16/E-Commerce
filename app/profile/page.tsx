import Profile from '@/components/Profile/Profile';
import WrapperContainer from '@/components/wrapper/WrapperContainer';
import { pxToRem } from '@/utils/remPxConverter';
import React from 'react'

const ProfilePage = () => {
    return (
        <WrapperContainer wrapperContainerStyles={{my:pxToRem(64)}}>
            <Profile />
        </WrapperContainer>
    );
}

export default ProfilePage;
