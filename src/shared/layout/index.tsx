import { Outlet} from 'react-router-dom';
import { Header } from "../components";

export const MainLayout = () => {
    return (
        <div className='bg-custom-color h-full flex flex-col justify-center'>
            <Header />
            <Outlet />
        </div>
    )
}