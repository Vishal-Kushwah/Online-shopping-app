function Profile(props) {
	const [open , setOpen] = useState(false);
	console.log(props);
	return(
		<li className="profile-tabs">
			<a href="#" className='Prof-icon' onClick={()=> setOpen(!open)}>
				{props.icon}
			</a>
			{open && props.children}
		</li>
	);
}


function DropdownMenu(){
	function DropdownItem(props) {
		console.log(props);
		return (
			<a href="#" className="menu-item">
				<span className="icon-button">{props.leftIcon}</span>
				{props.children}
			</a>
		);
	}
	return(
		<div className="dropdown">
			<DropdownItem>My Profile</DropdownItem>
			<DropdownItem leftIcon={<ProfileIcon/> }>
			</DropdownItem>
		</div>
	);
}