import { FC, ReactElement } from 'react'
import Header from '../../components/Header/Header'
import './index.scss'
import Footer from '../../components/Footer/Footer'
import ImageWindow from '../../pages/Skin/component/ImageWindow/ImageWindow'
import { useSelector } from "react-redux"
import { IImageWindow } from '../../pages/Skin/store/ImageWindowSlice'
import { RootState } from '../../App/store/store'
interface LayoutProps {
	children: ReactElement
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	const isOpen = useSelector((state:RootState)=> state.ImageWindow.isOpen)
	const img = useSelector((state:RootState)=> state.ImageWindow.img)
	return(
		<div style={isOpen?{maxHeight:'100vh',overflow:"hidden"}:{}}>
			<Header/>
			<main className='main'>{children}</main>
			{isOpen&&<ImageWindow img={img}/>}
			<Footer/>
		</div>
	)
}