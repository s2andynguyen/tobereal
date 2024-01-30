'use client'
import './style.css'
// components
import InformationForm from './ui/InformationForms/InformationForm'
import Favourite from './ui/Favourites/Favourite'
import InformationBonuss from './ui/InformationBonuss/InformationBonuss'
import LinkWebsite from './ui/LinkWebsites/LinkWebsite'
import Manage from './ui/Manages/Manage'
import ChangePassword from './ui/ChangePassword/ChangePassword'
import TopUserProfile from './ui/topUserProfiile/TopUserProfile'
// DashboardLayout
import DashboardLayout from '../_ui/layout/DashboardLayout'

const Profile = () => {
    return (
        <DashboardLayout title='My Profile'>
            <div className='Wrapper-Profile'>
                <div className='wrap-UserProfile'>
                    <TopUserProfile />
                </div>
                <div className='wrapper-Informations container p-6 md:p-12 justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                    <InformationForm />
                    <Favourite />
                    <InformationBonuss />
                    <LinkWebsite />
                    <Manage />
                    <ChangePassword />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Profile
