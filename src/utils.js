export function convertToMonth(num) {
  switch(num){
  	case -1:
  	return 'None Selected'
  	break;
  	case 1:
  	return 'January'
  	break;
  	case 2:
  	return 'February'
  	break;
  	case 3:
  	return 'March'
  	break;
  	case 4:
  	return 'April'
  	break;
  	case 5:
  	return 'May'
  	break;
  	case 6:
  	return 'June'
  	break;
  	case 7:
  	return 'July'
  	break;
  	case 8:
  	return 'August'
  	break;
  	case 9:
  	return 'September'
  	break;
  	case 10:
  	return 'October'
  	break;
  	case 11:
  	return 'November'
  	break;
  	case 12:
  	return 'December'
  	break;
  	default:
  	return null;
  }
}


export function convertToHour(num){
	switch(num){
		case -1:
  		return 'None Selected'
  		break;
  		case 1:
  		return '1:00 AM'
  		break;
  		case 2:
  		return '2:00 AM'
  		break;
  		case 3:
  		return '3:00 AM'
  		break;
  		case 4:
  		return '4:00 AM'
  		break;
  		case 5:
  		return '5:00 AM'
  		break;
  		case 6:
  		return '6:00 AM'
  		break;
  		case 7:
  		return '7:00 AM'
  		break;
  		case 8:
  		return '8:00 AM'
  		break;
  		case 9:
  		return '9:00 AM'
  		break;
  		case 10:
  		return '10:00 AM'
  		break;
  		case 11:
  		return '11:00 AM'
  		break;
  		case 12:
  		return '12:00 PM'
  		break;
  		case 13:
  		return '1:00 PM'
  		break;
  		case 14:
  		return '2:00 PM'
  		break;
  		case 15:
  		return '3:00 PM'
  		break;
  		case 16:
  		return '4:00 PM'
  		break;
  		case 17:
  		return '5:00 PM'
  		break;
  		case 18:
  		return '6:00 PM'
  		break;
  		case 19:
  		return '7:00 PM'
  		break;
  		case 20:
  		return '8:00 PM'
  		break;
  		case 21:
  		return '9:00 PM'
  		break;
  		case 22:
  		return '10:00 PM'
  		break;
  		case 23:
  		return '11:00 PM'
  		break;
  		case 0:
  		return '12:00 AM'
  		break;
  		default:
	  	return null;
	}
}