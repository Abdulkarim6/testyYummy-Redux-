import { NavLink } from 'react-router-dom';

const CreateButton = ({path, title}) => {
    const classStyle = "p-1 text-lg md:text-xl text-blue-400 rounded-md border-2 border-transparent hover:border-blue-500 uppercase"
  
    return <NavLink to={path} className={classStyle}>{title}</NavLink>;
};

export default CreateButton;