import {ReactComponent as BackIcon} from '../assets/back.svg'
import {ReactComponent as NextIcon} from '../assets/next.svg'

const Header = () => {

    return(
        <div className="app-header">
            <span><BackIcon/></span>
            <h1>Notes</h1>
            <span><NextIcon/></span>
        </div>
    )
}

export default Header