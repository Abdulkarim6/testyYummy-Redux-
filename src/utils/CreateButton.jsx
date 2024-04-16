import { NavLink } from 'react-router-dom';

const CreateButton = ({path, title}) => {
    const classStyle = "text-lg text-blue-500 md:text-xl rounded-md border-2 border-transparent hover:border-blue-500 uppercase"
  
    return <li className={classStyle}><NavLink to={path} className="p-2">{title}</NavLink></li>;
};

export default CreateButton;